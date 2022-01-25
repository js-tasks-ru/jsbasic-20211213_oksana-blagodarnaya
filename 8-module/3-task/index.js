export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
    
  }

  addProduct(product) {
    if (!!product) {
      let cartItem = this.cartItems.find(
        (cart) => cart.product.id == product.id
      );
      if (cartItem) {
        cartItem.count++;
      } else {
        cartItem = {
          product: product,
          count: 1,
        };
        this.cartItems.push(cartItem);
      }
      // console.log(this.cartItems);
      this.onProductUpdate(cartItem);
    }
  }

  updateProductCount(productId, amount) {
        
    let cartItem = this.cartItems.find((cart) => cart.product.id == productId);
    cartItem.count += amount;
    if (cartItem.count == 0) {
      this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
    }
    this.onProductUpdate(cartItem);
  }

  isEmpty() {
    if (this.cartItems.length === 0){
      return true;
    } else {
      return false;
    }
  }

  getTotalCount() {
    let count = 0;
    this.cartItems.forEach(item => {
      count = count + item.count
    });

    return count;
  }

  getTotalPrice() {
    let price = 0;
    this.cartItems.forEach(item => {
      price = price + item.product.price * item.count;
    });
    //console.log(price);
    return price;
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

