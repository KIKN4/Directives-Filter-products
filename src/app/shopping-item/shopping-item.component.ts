import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductsItem } from '../type/Product';

@Component({
  selector: 'app-shopping-item',
  standalone: true,
  imports: [],
  templateUrl: './shopping-item.component.html',
  styleUrl: './shopping-item.component.css',
})
export class ShoppingItemComponent {
  @Input() productia!: ProductsItem;
  @Output() deleteItem = new EventEmitter<number>();

  onDeleteItem() {
    this.deleteItem.emit(this.productia.id);
  }
}
