import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";

import LenisScroll from "@/components/LenisScroll";
import { AuthProvider } from "@/context/AuthContext";
// import Header from "@/components/common/Header";

export default function App({ Component, pageProps }) {
  return (
    <LenisScroll>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </LenisScroll>
  );
}
