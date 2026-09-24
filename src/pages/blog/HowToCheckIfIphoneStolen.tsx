import { DefinitiveItemGuide } from '@/components/guides/DefinitiveItemGuide';
import { IPHONE_GUIDE } from '@/data/definitiveGuides';

export default function HowToCheckIfIphoneStolen() {
  return <DefinitiveItemGuide {...IPHONE_GUIDE} />;
}