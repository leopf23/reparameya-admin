import LayoutWrapper from "@/app/layoutWrapper";

export default function WithLayout({ children }: { children: React.ReactNode }) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
