import { ClusterArticleTemplate } from "@/components/blog/ClusterArticleTemplate";

export default function BuyingUsedPhoneChecklist() {
  return (
    <ClusterArticleTemplate
      slug="buying-used-phone-checklist"
      metaDescription="A practical used-phone checklist: match the IMEI, check carrier status, remove account locks, test the hardware, review seller records, and pay safely."
      keywords="buying used phone checklist, used phone safety, how to buy used iPhone, avoid stolen phone"
      lastReviewed="September 24, 2026"
      intro={
        <>
          <p>
            A used phone needs more than one lookup. Before paying, match the
            device identifier, check carrier status separately, remove account
            locks, test the hardware, and preserve the seller and payment
            records.
          </p>
          <p>
            Use this checklist before the meeting and again with the phone in
            your hand.
          </p>
        </>
      }
      body={
        <>
          <h2>Before you meet</h2>
          <h3>1. Ask for the IMEI</h3>
          <p>
            Ask the seller to dial <code>*#06#</code> or open Settings and send
            the 15-digit IMEI. Dual-SIM phones may have two IMEIs, so record
            both.
          </p>
          <h3>2. Research the IMEI in more than one place</h3>
          <p>
            Start with CTIA’s free{" "}
            <span className="inline-flex items-center">Stolen Phone Checker</span>{" "}
            (for US consumers), which uses GSMA Device Check
            data to show whether the IMEI has been reported lost or stolen.
            Then use the original carrier’s eligibility tool or support team for
            network and finance restrictions. Run the IMEI through the{" "}
            <a href="/imei-checker">SafeOrStolen IMEI checker</a> for
            SafeOrStolen reports, public web results, AI analysis, and device
            details. SafeOrStolen does not currently query carrier blacklists.
          </p>
          <h3>3. Review the listing and seller</h3>
          <p>
            Reverse-image search the listing photos, compare the seller’s other
            listings, and save screenshots. Ask for the original receipt or
            order record; it is useful context but does not by itself prove
            ownership.
          </p>
          <h3>4. Confirm the exact model</h3>
          <p>
            Ask for storage, model number, carrier, color, battery condition,
            repair history, and included accessories. Compare those details with
            the IMEI device information and the physical phone.
          </p>
          <h2>At the meeting</h2>
          <h3>5. Choose a public location</h3>
          <p>
            Meet in a well-lit public place. Some police departments offer
            exchange areas, but availability varies; confirm through the
            department’s official website or phone number.
          </p>
          <h3>6. Match the IMEI yourself</h3>
          <p>
            Dial <code>*#06#</code> and compare the result with Settings, the
            box, and the SIM tray where applicable. Stop if any identifier
            conflicts.
          </p>
          <h3>7. Remove account locks and begin setup</h3>
          <p>
            For iPhone, the seller should turn off Find My, sign out, erase the
            phone, and let you begin setup. Do not buy if setup requests the
            previous owner’s Apple Account. On Android, have the seller remove
            their Google account before reset and confirm setup does not request
            the prior credentials.
          </p>
          <h3>8. Test cellular service and hardware</h3>
          <p>
            With the seller’s permission, test your SIM or eSIM, make a call,
            send a message, connect to Wi-Fi, and test cameras, microphones,
            speakers, biometrics, charging, buttons, display, and battery
            information. A successful call is useful, but it does not guarantee
            the device will never be restricted later.
          </p>
          <h3>9. Review repair and parts information</h3>
          <p>
            Check available battery-health, parts, and service-history screens.
            Warnings do not necessarily mean theft, but they should match what
            the seller disclosed.
          </p>
          <h2>Payment and records</h2>
          <h3>10. Use a protected payment method</h3>
          <p>
            Use the marketplace’s official checkout or another method whose
            current terms cover the transaction. Read the provider’s rules and
            avoid gift cards, wires, cryptocurrency, or friends-and-family
            payments to strangers.
          </p>
          <h3>11. Write down the transaction</h3>
          <p>
            Keep the listing, message thread, seller details, IMEI, receipt, and
            payment confirmation. A simple bill of sale can record the item,
            identifier, price, date, and parties, but legal requirements vary.
          </p>
          <h3>12. Let the seller show a verification record</h3>
          <p>
            A seller can share a SafeOrStolen Proof of Clean Purchase after a
            clean check. Verify the shared link and match the identifier
            yourself. The record is timestamped verification context—not a
            title, guarantee, or legal document.
          </p>
          <h2>If you already bought a problem phone</h2>
          <p>
            Do not resell, erase, or try to bypass a lock. Preserve the phone
            and evidence, then follow{" "}
            <a href="/what-to-do-if-you-bought-something-stolen">
              the stolen-purchase response guide
            </a>
            .
          </p>
        </>
      }
      faqs={[
        {
          question: "What is the most important used-phone check?",
          answer:
            "There is no single decisive check. Match the IMEI, verify carrier and finance status, remove account locks, test the device, and review seller records before paying.",
        },
        {
          question: "Does a clean IMEI guarantee the phone is safe?",
          answer:
            "No. A phone may be unreported, financed, later restricted, or still tied to an owner account.",
        },
        {
          question: "What should I bring?",
          answer:
            "Bring your SIM or eSIM details, a charging cable, headphones if needed, and a payment method whose buyer-protection terms cover the transaction.",
        },
        {
          question: "What if the seller refuses these checks?",
          answer:
            "Do not buy the phone. A legitimate transaction should allow you to identify, reset, activate, and test the exact device before paying.",
        },
      ]}
    />
  );
}
