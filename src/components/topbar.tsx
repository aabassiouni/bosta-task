import { Cart } from "./cart";

export function Topbar() {
  return (
    <div className="mx-auto my-8 md:w-1/3 rounded-xl border border-red-400 bg-red-200 px-12 py-4">
      <div className="flex gap-4 h-full w-full items-center justify-center">
        <p className="text-2xl font-bold">BostaStore</p>
        <Cart />
      </div>
    </div>
  );
}
