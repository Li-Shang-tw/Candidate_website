import { defineStore } from "pinia";

export const useDonateStore = defineStore("donate", {
  state: () => {
    return {
      numberPeopleOfPlan: {
        lv1: 9947,
        lv2: 2000,
        lv3: 999,
      },
      totalAmount: 987655873,
    };
  },
  getters: {},
  actions: {},
});
