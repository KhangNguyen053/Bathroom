import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {ProductModel} from "./models/product.model";
import {StoreService} from "./services/store.service";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {TotalcostComponent} from "./components/totalcost/totalcost.component";
import {CartComponent} from "./components/cart/cart.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, NavbarComponent, ProductCardComponent, TotalcostComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'first_project';
  constructor(public storeService: StoreService) {
  }

}

