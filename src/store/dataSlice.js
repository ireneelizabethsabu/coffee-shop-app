import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';

export const createDataSlice = get => ({
  CoffeeList: CoffeeData,
  BeanList: BeansData,
});
