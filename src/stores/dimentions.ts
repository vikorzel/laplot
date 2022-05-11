import { defineStore } from "pinia";
import type { Dimention } from "../ctypes/dimention";

export const DimentionsStore = defineStore({
  id: "dimentions",
  state: () => ({
    dimentionItems: new Map<string, Dimention>(),
  }),
  getters: {
    items: (state) => {
      return state.dimentionItems;
    },
  },
  actions: {
    addItem(description: string, keypath: string, id: string) {
      this.dimentionItems.set(id, {
        desription: description,
        is_selected: this.dimentionItems.size > 0 ? false : true,
        keypath: keypath,
      });
    },
    togleItem(id: string) {
      this.dimentionItems.forEach((dimention: Dimention, key: sting) => {
        dimention.is_selected = key == id;
      });
    },
  },
});
