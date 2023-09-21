import "@styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import DefaultLayout from "@/components/layouts/default";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </RecoilRoot>
  );
}
