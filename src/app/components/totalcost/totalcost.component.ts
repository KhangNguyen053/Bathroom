import {Component, Input} from '@angular/core';
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-totalcost',
  standalone: true,
  imports: [],
  templateUrl: './totalcost.component.html',
  styleUrl: './totalcost.component.scss'
})
export class TotalcostComponent {
  @Input() total!: number;

  constructor(public storeService: StoreService) {
  }

}
