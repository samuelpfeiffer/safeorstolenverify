// React 19 moved JSX types to React.JSX; @react-three/fiber v8 only augments
// the legacy global JSX namespace. Bridge its intrinsic elements into React 19.
import type { ThreeElements } from "@react-three/fiber";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}
