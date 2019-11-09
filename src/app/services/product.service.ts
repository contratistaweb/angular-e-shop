import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: AngularFireList<any>;
  selectedProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) { }

  getProduct(){
    this.productList = this.firebase.list('products');
  }
  insertProduct(product: Product){
    this.productList.push({
      name: product.name,
      price: product.price,
      unds: product.unds,
      location: product.location
    })
  }
  updateProduct(product: Product){
    this.productList.update(product.$key, {
      name: product.name,
      price: product.price,
      unds: product.unds,
      location: product.location
    });
  }
  deleteProduct($key: string){
    this.productList.remove($key);
  }
  
}
