import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/usersdata.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  createProduct!: FormGroup;
  products: any[] = [];
  user!: any;
  singup!: FormGroup;
  productid!: any;
  update: boolean = true;
  firstName!: any;
  lastName!: any;
  id!: any;
  _id!: any;
  searchText: string = '';
  masterArray: any = [];

  constructor(
    private UserData: UserdataService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Initialize component variables and retrieve data from local storage
    this.firstName = localStorage.getItem('fName');
    this.lastName = localStorage.getItem('lName');
    this._id = localStorage.getItem('userId');

    // Form creation
    this.createProduct = this.fb.group({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });

    // Get Products
    this.getProducts();
  }

  // Search Item
  searchResults: any[] = [];
  searchedName = '';

  onSearch(searched: any) {
    this.searchResults = [];
    this.searchedName = searched.value;

    this.products.forEach((element: any) => {
      if (element.category == this.searchedName) {
        this.searchResults.push(element);
      }
    });

    if (this.searchResults.length !== 0) {
      this.products = [...this.searchResults];
    } else {
      this.products = [...this.masterArray];
    }
  }

  // Update Data
  updateData() {
    this.update = true;
    let product = this.createProduct.value;
    const body = {
      "name": product.name,
      "price": product.price,
      "category": product.category,
      "brand": product.brand,
    };

    this.UserData.updateData(body, this.productid).subscribe((res: any) => {
      console.log("response", `${res}`);
    });

    this.getProducts();
    this.settime();
    this.createProduct.reset();
  }

  // Navigate to Signin Page
  goToSignin() {
    this.router.navigate(['']);
  }

  // Handle Category Selection
  onSelected(value: any) {
    console.log(value);
    this.UserData.mobileCategory(value).subscribe((res: any) => {
      this.products = res['data'];
    });
  }

  // Page Refresh
  settime() {
    setTimeout(() => {
      this.getProducts();
    }, 1000);
  }

  // Show Create Product Form
  showbtn() {
    this.getProducts();
    this.update = false;
    this.letFinish();
  }

  // Add Products
  async addProduct() {
    let product = this.createProduct.value;
    const body = {
      "name": product.name,
      "price": product.price,
      "category": product.category,
      "brand": product.brand,
      "creator_id": this._id,
    };

    const data = await this.UserData.addProduct(body).subscribe((res: any) => {
      console.log("response", res);
    });

    this.createProduct.reset();
    this.settime();
  }

  // Get Products
  getProducts() {
    this.UserData.getProducts().subscribe((res:any) => {
      this.products = res;
      this.masterArray = [...this.products];
    });
  }

  // Delete Product
  deleteUser(id: any) {
    this.UserData.deleteData(id._id).subscribe((id) => {
      console.log("response", id);
      this.getProducts();
    });
  }

  // Reset Create Product Form
  deleteData() {
    this.update = true;
    this.createProduct.reset();
  }

  // Edit Data (Fake)
  async editData() {
    this.deleteData();
    let product = this.createProduct.value;
    const body = {
      "name": product.name,
      "price": product.price,
      "category": product.category,
      "brand": product.brand,
    };

    await this.UserData.addProduct(body).subscribe((res: any) => {
      console.log("response", res);
    });

    setTimeout(() => {
      this.getProducts();
    }, 1000);
  }

  // Set Form Values When Selecting a Product
  onSelect(user: any) {
    this.productid = user._id;
    this.createProduct.get('name')?.setValue(user.name);
    this.createProduct.get('brand')?.setValue(user.brand);
    this.createProduct.get('price')?.setValue(user.price);
    this.createProduct.get('category')?.setValue(user.category);
  }

  // Reset Create Product Form
  letFinish() {
    this.createProduct.reset();
  }
}
