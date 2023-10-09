import { Component, OnInit } from '@angular/core';
import { UserdataService } from './services/usersdata.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  createProduct!: FormGroup;
  signup!: FormGroup;
  productid: any;
  users: any;

  constructor(private userData: UserdataService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.refreshPage();
    this.createProduct = this.fb.group({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });
  }

  // Handle form submission
  onSubmit(form: NgForm) {
    console.log(form);
  }

  // Edit product
  update: boolean = true;

  editProduct(edit: any) {
    this.update = false;
    this.createProduct.reset();
  }

  // Cancel editing
  deleteData() {
    this.update = true;
  }

  // Update product data
  updateData() {
    let product = this.createProduct.value;
    const body = {
      "name": product.name,
      "price": product.price,
      "category": product.category,
      "brand": product.brand,
    };

    this.userData.updateData(body, this.productid).subscribe((res: any) => {
      console.log("response", res);
      setTimeout(() => {
        this.refreshPage();
      }, 1000);
    });
    this.createProduct.reset();
  }

  // Edit data
  async editData() {
    let product = this.createProduct.value;
    const body = {
      "name": product.name,
      "price": product.price,
      "category": product.category,
      "brand": product.brand,
    };

    await this.userData.addProduct(body).subscribe((res: any) => {
      console.log("response", res);
      setTimeout(() => {
        this.refreshPage();
      }, 1000);
    });

    this.resetForm();
  }

  // Reset form
  resetForm() {
    this.createProduct.reset();
  }

  // Refresh page data
  refreshPage() {
    this.userData.getProducts().subscribe((res) => {
      this.users = res;
    });
  }

  // Select a product for editing
  onSelect(user: any) {
    this.productid = user._id;
    this.createProduct.get('name')?.setValue(user.name);
    this.createProduct.get('brand')?.setValue(user.brand);
    this.createProduct.get('price')?.setValue(user.price);
    this.createProduct.get('category')?.setValue(user.category);
  }

  // Delete an item
  deleteItem(id: any) {
    this.userData.deleteData(id._id).subscribe((res) => {
      console.log("response", res);
      setTimeout(() => {
        this.refreshPage();
      }, 1000);
    });
  }

  // Sign up form handling (you may need to add this)
  signupUser() {
    // Handle signup form submission here
  }
}
