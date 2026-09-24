import { DefinitiveItemGuide } from '@/components/guides/DefinitiveItemGuide';
import { PHONE_GUIDE } from '@/data/definitiveGuides';

export default function HowToCheckIfPhoneStolenPage() {
  return <DefinitiveItemGuide {...PHONE_GUIDE} />;
}