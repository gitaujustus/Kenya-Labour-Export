'use client'
import Navbar from "./nav"
import Footer from "./Footer";
import { usePathname } from "next/navigation";
// import Footer from "@/components/footer";
import Nav from "@/components/gok/adminNav";

export default function ConditionalRenderNav({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  if (!isAdminRoute) {
    return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Nav />
        {children}
        <Footer />
      </>
    );
  }
}
