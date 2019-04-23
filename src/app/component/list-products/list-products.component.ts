import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/model/ProductModel';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: ProductModel[];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  addProduct(): void {
    this.router.navigate(['add-product']);
  }

  deleteProduct(product: ProductModel) {
    this.productService.deleteProduct(product._id).subscribe(data => {
      console.log(data);
      this.getAllProducts();
    });
  }

  updateProduct(product: ProductModel) {
    localStorage.removeItem('productId');
    localStorage.setItem('productId', product._id);
    this.router.navigate(['edit-product']);
  }
}
