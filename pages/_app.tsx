import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Client, HydrationProvider } from "react-hydration-provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HydrationProvider>
      <Client>
        <Component {...pageProps} />
      </Client>
    </HydrationProvider>
  );
}

export default MyApp;
