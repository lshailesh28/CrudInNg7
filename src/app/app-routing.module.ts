import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './component/list-products/list-products.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';

const routes: Routes = [
  {path: 'add-product', component: AddProductComponent},
  {path: 'edit-product', component: EditProductComponent},
  {path: '', component: ListProductsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
