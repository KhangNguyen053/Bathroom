import {Component, Input} from '@angular/core';
import {StoreService} from "../../services/store.service";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  constructor(public storeService: StoreService) {
  }
  @Input() product!: ProductModel;

}
