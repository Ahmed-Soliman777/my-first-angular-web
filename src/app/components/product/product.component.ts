import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  ClientName: string = 'Emad Ali';  ProductList: IProduct[] = [
    {ID:1, Name: 'iPhone 13 Pro, 256GB, Graphite - Unlocked (Renewed Premium)',Quantity: 1, Price:856,Img: "https://m.media-amazon.com/images/I/61eDXs9QFNL._AC_UY327_FMwebp_QL65_.jpg",CategoryID:1},
    {ID:25, Name: 'Apple iPhone 12 Pro Max, 128GB, Pacific Blue - Unlocked (Renewed Premium)',Quantity: 3, Price:682,Img:"https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_UY327_FMwebp_QL65_.jpg" ,CategoryID:1},
    {ID:51, Name: 'Apple iPhone 11 Pro, US Version, 256GB, Gold - Unlocked (Renewed)',Quantity: 5, Price:428.99,Img:"https://m.media-amazon.com/images/I/51ysUFqccxS._AC_UY327_FMwebp_QL65_.jpg" ,CategoryID:1},
    {ID:159, Name: 'Apple 2022 MacBook Pro M2 Chip',Quantity: 10, Price:999,Img:"https://m.media-amazon.com/images/I/61L5QgPvgqL._AC_UY327_FMwebp_QL65_.jpg" ,CategoryID:2},
    {ID:515, Name: 'Apple 2022 MacBook Air M2 Chip',Quantity: 15, Price:999,Img:"https://m.media-amazon.com/images/I/719C6bJv8jL._AC_UY327_FMwebp_QL65_.jpg" ,CategoryID:2},
    {ID:189, Name: 'Apple Late 2021 MacBook Pro M1 Pro chip 10-core CPU',Quantity: 2, Price:1234,Img:"https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_UY327_FMwebp_QL65_.jpg" ,CategoryID:2},
    {ID:7659, Name: 'Hisense A4 Series 40-Inch Class FHD',Quantity: 4, Price:159,Img:"https://m.media-amazon.com/images/I/815f4IXTLCL._AC_UY327_FMwebp_QL65_.jpg" ,CategoryID:3},
    {ID:1254, Name: 'Insignia 50-inch Class F30 Series LED 4K UHD',Quantity: 25, Price:182,Img:"https://m.media-amazon.com/images/I/81DM+ZzL8rL._AC_UY327_FMwebp_QL65_.jpg" ,CategoryID:3},
    {ID:1562, Name: 'TCL 32" Class 3-Series HD',Quantity: 35, Price:124,Img:"https://m.media-amazon.com/images/I/61lRv6LZlHL._AC_UY327_FMwebp_QL65_.jpg" ,CategoryID:3}

  ];
  Discount: string = '10%'; 
  IsPurchased: boolean = false;

  togglePurchase() {
    this.IsPurchased = !this.IsPurchased;
  }
}