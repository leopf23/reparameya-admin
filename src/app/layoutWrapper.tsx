"use client";
import { usePathname } from "next/navigation";
import HeaderUi from "@/component/molecules/headerUi";
import Footer from "@/component/molecules/footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const noLayoutRoutes = ["/login"];
  const withoutLayout = noLayoutRoutes.includes(pathname);

  return (
    <div className={withoutLayout ? "" : "px-7 md:px-20 xl:px-36 2xl:px-86"}>
      {!withoutLayout && <HeaderUi />}
      {children}
      {!withoutLayout && <Footer />}
    </div>
  );
}
