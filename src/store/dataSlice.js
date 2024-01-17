import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';
import PaymentModesData from '../data/PaymentData';

export const createDataSlice = get => ({
  CoffeeList: CoffeeData,
  BeanList: BeansData,
  PaymentModesList: PaymentModesData,
});
