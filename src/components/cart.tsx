import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { MinusIcon, PlusIcon, ShoppingBagIcon, TrashIcon, XIcon } from "lucide-react";
import { useCartStore } from "../stores/cart";

export function Cart() {
  const {
    items,
    dialogOpen,
    setDialogOpen,
    actions: { removeItem, updateQuantity },
  } = useCartStore();

  console.log(items);

  return (
    <Dialog open={dialogOpen} onOpenChange={(open) => setDialogOpen(open)}>
      <DialogTrigger asChild>
        <button className="ml-auto flex cursor-pointer items-center gap-1">
          <ShoppingBagIcon className="h-6 w-6" />
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black">
            <p className="text-base font-bold text-white">{items.length}</p>
          </div>
        </button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80">
          <DialogContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right fixed inset-y-0 right-0 z-50 h-full w-3/4 gap-4 border-l bg-white p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 sm:max-w-sm">
            <DialogTitle className="mb-4 text-lg font-bold">Your Cart</DialogTitle>
            <DialogClose className="absolute top-4 right-4 rounded-full p-1 text-2xl hover:bg-black/30 focus:outline-none">
              <XIcon className="text-black" />
            </DialogClose>
            <div className="flex flex-col gap-4">
              {items.length === 0 && (
                <p className="text-center text-gray-600">Your cart is empty</p>
              )}
              {items.length > 0 &&
                items.map((item) => (
                  <div key={item.id} className="mb-4 items-center gap-4">
                    <div className="flex gap-4">
                      <img src={item.image} alt={item.title} className="h-12 w-12 rounded" />
                      <div>
                        <p className="text-lg font-bold">{item.title}</p>
                        <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <div className="flex items-center gap-2">
                        <button onClick={() => removeItem(item.id)}>
                          <TrashIcon className="h-5 w-5" />
                        </button>
                        <div className="flex">
                          <button>
                            <MinusIcon className="h-5 w-5" />
                          </button>
                          <p className="text-lg">{item.quantity}</p>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            <PlusIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="mt-auto">
              <p className="text-lg font-bold">
                Total Price: $
                {items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
              </p>
            </div>
          </DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  );
}
