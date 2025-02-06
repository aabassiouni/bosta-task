import { Topbar } from "../topbar";

export function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col bg-red-100">
      <Topbar />
      <div className="flex flex-1 p-4">{children}</div>
    </div>
  );
}
