// import dynamic from 'next/dynamic';

import ScreenInfoClient from "./ScreenInfoClient";

// // Dynamically import client-only component without SSR
// const ScreenInfoClient = dynamic(() => import('./ScreenInfoClient'), {
//   ssr: false,
// });
export default function ScreenInfo() {
  return <ScreenInfoClient />;
}
