import { create } from "zustand";
import { Product } from "../types";

type CartItem = Product & {
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
  actions: {
    addItem: (item: Product, quantity: number) => void;
    removeItem: (itemId: string) => void;
    updateQuantity: (itemId: string, quantity: number) => void;
  };
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  dialogOpen: false,
  setDialogOpen: (open) => set({ dialogOpen: open }),
  actions: {
    addItem: (item: Product, quantity: number) =>
      set((state) => {
        const existingItem = state.items.find((i) => i.id === item.id);

        if (existingItem) {
          return {
            items: state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + (quantity || 1) } : i,
            ),
          };
        }

        return {
          items: [...state.items, { ...item, quantity: quantity || 1 }],
        };
      }),

    removeItem: (itemId) =>
      set((state) => ({
        items: state.items.filter((item) => item.id !== itemId),
      })),

    updateQuantity: (itemId, quantity) =>
      set((state) => ({
        items: state.items.map((item) => (item.id === itemId ? { ...item, quantity } : item)),
      })),
  },
}));
