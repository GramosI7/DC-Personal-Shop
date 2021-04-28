import { ReactElement } from "react";
import { AppProps } from "next/app";

import "@styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}
