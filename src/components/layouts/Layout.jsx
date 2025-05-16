import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { useRouter } from "next/router";

export default function Layout({ menu, children }) {
  const router = useRouter();
  const hideHeaderFooter = router.pathname.startsWith("/satexam");

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <div className="">
        {children}
      </div>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}