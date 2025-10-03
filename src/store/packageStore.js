import { create } from 'zustand';

const usePackageStore = create((set) => ({
  selectedPackageKey: '',
  usd: 0,
  rate: 0,
  totalRenewalSDG: 0,
  msg: '',
  setSelectedPackage: (key, data) => {
    const shipping = data.usd * 0.10;
    const subtotal = data.usd + shipping;
    const commission = subtotal * 0.05;
    set({
      selectedPackageKey: key,
      usd: data.usd,
      rate: data.rate,
      totalRenewalSDG: (subtotal + commission) * data.rate,
      msg: data.msg,
    });
  },
}));

export default usePackageStore;