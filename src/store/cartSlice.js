import {produce} from 'immer';

export const createCartSlice = set => ({
  CartList: [],
  CartPrice: 0,
  addToCart: (item, sizeDetails) =>
    set(
      produce(state => {
        let found = false;
        state.CartList.forEach(element => {
          if (element.id === item.id) {
            found = true;
            let sizeExist = false;
            element.quantity?.forEach(q => {
              if (q.size === sizeDetails.size) {
                sizeExist = true;
                q.quantity++;
              }
            });
            if (!sizeExist) {
              element.quantity.push({
                size: sizeDetails.size,
                quantity: 1,
                price: parseFloat(sizeDetails.price),
                currency: sizeDetails.currency,
              });
              element.quantity.sort((a, b) => (a.size < b.size ? 1 : -1));
            }
          }
        });
        if (!found) {
          item.quantity.push({
            size: sizeDetails.size,
            quantity: 1,
            price: parseFloat(sizeDetails.price),
            currency: sizeDetails.currency,
          });
          state.CartList.push(item);
        }
      }),
    ),
  removeItemFromCart: (item, size) =>
    set(
      produce(state => {
        let mainPosition = -1;
        state.CartList.forEach((element, mainIndex) => {
          if (element.id === item.id) {
            let position = -1;
            element.quantity.forEach((q, index) => {
              if (q.size === size) {
                q.quantity--;
                if (q.quantity === 0) position = index;
              }
            });
            if (position > -1) {
              element.quantity.splice(position, 1);
            }
          }
          if (element.quantity.length === 0) {
            mainPosition = mainIndex;
          }
        });
        if (mainPosition > -1) {
          state.CartList.splice(mainPosition, 1);
        }
      }),
    ),
  calculatePrice: () =>
    set(
      produce(state => {
        let price = 0;
        state.CartList.forEach(item => {
          item.quantity.forEach(element => {
            price += element.quantity * element.price;
          });
        });
        state.CartPrice = price.toFixed(2);
      }),
    ),
  removeGroupFromCart: id =>
    set(
      produce(state => {
        let position = -1;
        state.CartList.forEach((cart, index) => {
          if (cart.id === id) position = index;
        });
        if (position > -1) {
          state.CartList.splice(position, 1);
        }
      }),
    ),
});
