import { test } from 'node:test';
import assert from 'node:assert/strict';
import { coverageQuestion, coverageReply, extractIdentifier, hintForCategory } from './chatIntent';

test('"can you check guns?" gets a yes with the gun records, never a turn-away', () => {
  for (const q of ['can you check guns?', 'Can you check a firearm', 'do you do handguns', 'can I search a shotgun?', 'check guns']) {
    assert.equal(coverageQuestion(q), 'firearm', q);
  }
  const r = coverageReply('firearm', false);
  assert.match(r.content, /^\*\*Yes, I can check any gun by its serial number/);
  assert.match(r.content, /220,000 police gun theft and loss reports from 33 states and Washington, DC/);
  assert.match(r.content, /sign up or sign in first/);
  assert.doesNotMatch(r.content, /police non-emergency|dealer|don't|doesn't/i);
  assert.doesNotMatch(coverageReply('firearm', true).content, /sign up/);
  assert.equal(hintForCategory('firearm'), 'firearm');
});

test('bikes, phones, cars and other gear also get a yes', () => {
  assert.equal(coverageQuestion('can you check bikes?'), 'bicycle');
  assert.equal(coverageQuestion('do you check phones'), 'phone');
  assert.equal(coverageQuestion('can you check a car'), 'vehicle');
  assert.equal(coverageQuestion('can you check a laptop?'), 'serial');
  for (const c of ['phone', 'vehicle', 'bicycle', 'serial'] as const) assert.match(coverageReply(c, true).content, /^\*\*Yes, I can check/);
});

test('reporting or other questions still go to the AI', () => {
  assert.equal(coverageQuestion('my phone was stolen what do I do'), null);
  assert.equal(coverageQuestion('how do I report a stolen gun'), null);
  assert.equal(coverageQuestion('what does this score mean?'), null);
});

test('numbers typed with words run as a check (from real chats that were turned away)', () => {
  assert.deepEqual(extractIdentifier('gun 61050'), { identifier: '61050', category: 'firearm' });
  assert.deepEqual(extractIdentifier('Marlin gun F5873'), { identifier: 'F5873', category: 'firearm' });
  assert.deepEqual(extractIdentifier('Glock 22 BYL278US'), { identifier: 'BYL278US', category: 'firearm' });
  assert.deepEqual(extractIdentifier('Serial BYL278US'), { identifier: 'BYL278US', category: 'serial' });
  assert.equal(extractIdentifier('IMEI/MEID 351888569072872')?.identifier, '351888569072872');
  assert.equal(extractIdentifier('Imei 35 629632 838383 5')?.identifier, '356296328383835');
  assert.equal(extractIdentifier('350995/41/156622/4')?.identifier, '350995411566224');
  assert.equal(extractIdentifier('shotgun owneship of MV0384109')?.identifier, 'MV0384109');
  assert.equal(extractIdentifier('0Q9T91CK512617D Samsung laptop')?.identifier, '0Q9T91CK512617D');
});

test('when it is unclear which number is the serial, offer each one to tap', () => {
  const a = extractIdentifier('t6429-22 y07314 stoeger str-9sc');
  assert.ok(a?.choices?.includes('t6429-22') && a.choices.includes('y07314'));
  const b = extractIdentifier('2534 160844 mini vactor floor finishing machine');
  assert.ok(b?.choices?.includes('160844') && b.choices.includes('2534160844'));
});

test('ordinary sentences with a price or a model number are not checked', () => {
  assert.equal(extractIdentifier('I paid 45000 for it'), null);
  assert.equal(extractIdentifier('is an iPhone 14 a good deal at $300?'), null);
  assert.equal(extractIdentifier('what does this confidence score mean?'), null);
});
