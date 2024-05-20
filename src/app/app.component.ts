import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ProductsItem } from './type/Product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShoppingItemComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-3';
  isSpecial = true;
  isInteresting = true;
  headingVisible = true;

  productList: ProductsItem[] = [
    {
      name: 'Iphone 15 Pro Max',
      img: 'https://shop.apcom.eu/public/content-images/ms/product/iphone-15-blue-pro-max-01_big.png',
      price: '3500₾',
      model: 'Apple',
      id: 1,
    },
    {
      name: 'Samsung Galaxy S24 Ultra',
      img: 'https://images.samsung.com/is/image/samsung/p6pim/uk/2401/gallery/uk-galaxy-s24-ultra-491396-sm-s928bztheub-539464148?$650_519_PNG$',
      price: '3000₾',
      model: 'Samsung',
      id: 2,
    },
    {
      name: 'Google Pixel 8 Pro',
      img: 'https://lh3.googleusercontent.com/KaLIFYVg9298b8jv33H3pagRaAz4lCQxrQz-goMEsiTuCmUf2Ood9ktkzgjpotkMuRcAMimOV2RfN7vBZVmnInf5wcwUNsRZpw',
      price: '2599₾',
      model: 'Google',
      id: 3,
    },
    {
      name: 'One Plus 12',
      img: 'https://oasis.opstatics.com/content/dam/oasis/page/2023/cn/12/12-green.png',
      price: '2499₾',
      model: 'One +',
      id: 4,
    },
  ];

  filteredProductList: ProductsItem[] = [...this.productList];

  onDeleteFromList(id: number) {
    this.productList = this.productList.filter((item) => item.id !== id);
  }

  searchkey = '';

  // ინფუთში ჩაწერილი ტექსტის მიხედვით მეთოდი onKeyUp გაფილტრავს პროდუქტების მასივს სახელის ან მოდელის მიხედვით

  onKeyUp(filterKey: string) {
    this.productList = this.filteredProductList.filter(
      (product) =>
        product.name.toLowerCase().includes(filterKey) ||
        product.model.toLowerCase().includes(filterKey)
    );
  }
}
