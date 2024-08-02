import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'first_project';

  products = [
    {
      id: 1,
      imgURL: "../assets/h1.png",
      name: 'Xà Phòng',
      price: 10000,
      inStock: 10,
    },
    {
      id: 2,
      imgURL: "../assets/h2.png",
      name: 'Khăn Tắm',
      price: 20000,
      inStock: 5,
    },
    {
      id: 3,
      imgURL: "../assets/h3.png",
      name: 'Dầu Xả',
      price: 15000,
      inStock: 7,
    },
    {
      id: 4,
      imgURL: "../assets/h4.png",
      name: 'Dầu Gội',
      price: 25000,
      inStock: 15,
    },
  ];

  cart: any[] = [];
  totalPrice: number = 0;

  addToCart(index: number) {
    if (this.products[index].inStock > 0) {
      let productInCart = this.cart.find((item) => item.id === this.products[index].id);
      if (productInCart) {
        productInCart.quantity += 1;
      } else {
        this.cart.push({
          id: this.products[index].id,
          name: this.products[index].name,
          price: this.products[index].price,
          quantity: 1,
        });
      }
      this.products[index].inStock -= 1;
      this.updateTotalPrice();
    }
  }

  removeFromCart(index: number) {
    let productInCart = this.cart[index];
    if (productInCart) {
      let product = this.products.find((item) => item.id === productInCart.id);
      if (productInCart.quantity > 1) {
        productInCart.quantity -= 1;
      } else {
        this.cart.splice(index, 1);
      }
      if (product) {
        product.inStock += 1;
      }
      this.updateTotalPrice();
    }
  }

  updateTotalPrice() {
    this.totalPrice = this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
}


// import { NgFor, NgIf } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, FormsModule, NgFor, NgIf],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss',
// })
// export class AppComponent {
//   title = 'first_project';

//   products = [
//     {
//       id: 1,
//       imgURL:"../assets/h1.png",
//       name: 'Xà Phòng',
//       price: 10000,
//       inStock: 10,
//     },
//     {
//       id: 2,
//       imgURL:"../assets/h2.png",
//       name: 'Khăn Tắm',
//       price: 20000,
//       inStock: 5,
//     },
//     {
//       id: 3,
//       imgURL:"../assets/h3.png",
//       name: 'Dầu Xả',
//       price: 15000,
//       inStock: 7,
//     },
//     {
//       id: 4,
//       imgURL:"../assets/h4.png",
//       name: 'Dầu Gội',
//       price: 25000,
//       inStock: 15,
//     },
//   ];

//   cart: any[] = [];

//   addToCart(index: number) {
//     let findIndex = this.cart.findIndex((element) => {
//       return element.id == this.products[index].id;
//     }); // Đi tìm trong giỏ hàng có tồn tại sp mà mình muốn thêm hay không
//     if (findIndex != -1) {// Nếu tồn tại (index != -1)
//       this.cart[findIndex].quantity += 1;
//       if(this.products[index].inStock <= 0){
//         return;
//       }else{
//         this.products[index].inStock--;
//       } // Tăng số lượng lên 1
//     } else {// Nếu không tồn tại
//       this.cart.push({// Thêm sp mới đó vào
//         id: this.products[index].id,
//         name: this.products[index].name,
//         price: this.products[index].price,
//         quantity: 1,
//       });
//       this.products[index].inStock--;
//     }
//     console.log(this.cart);
//   }
// }
