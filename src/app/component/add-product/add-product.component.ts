import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private productService: ProductService) { }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
      this.addForm = this.formBuilder.group({
        _id: [],
        title: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', Validators.required],
        company: ['', Validators.required],
      });
  }

  onSubmit() {
    this.submitted = true;

    if (this.addForm.valid) {
      this.productService.addProduct(this.addForm.value).subscribe(data => {
        console.log(data);
        this.router.navigate(['']);
      });
    }
  }

  get f() {
    return this.addForm.controls;
  }
}
