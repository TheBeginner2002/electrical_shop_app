import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BuyingProductModel } from 'src/app/model/buying-product-model';

@Component({
  selector: 'app-info-registration-page',
  templateUrl: './info-registration-page.component.html',
  styleUrls: ['./info-registration-page.component.scss']
})
export class InfoRegistrationPageComponent {
  totalPrice:number = 0;
  form: FormGroup = this.formBuilder.group({});
  selectedProducts: BuyingProductModel[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,
    private router: Router,
  ) { }
  
  increment(quantity:number, index:number) {
    quantity++;
    this.selectedProducts[index].quantity = quantity;
    const product:FormArray = this.fb['products'] as FormArray;
    product.controls[index].value.quantity = quantity;
    this.getTotalPrice();
  }

  decrement(quantity:number, index:number) {
    if(quantity > 0) {
      quantity--;
      this.selectedProducts[index].quantity = quantity;
      const product:FormArray = this.fb['products'] as FormArray;
      product.controls[index].value.quantity = quantity;
      this.getTotalPrice();
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const data = JSON.parse(params['data']);
      this.selectedProducts = data.selectedProducts;
    });
    this.form = this.formBuilder.group({
      name: '',
      phoneNumber: '',
      addressNumber: '',
      addressDistrict: '',
      addressProvince: '',
      addressCommune: '',
      note: '',
      totalPrice: '',
      products: this.formBuilder.array([])
    });
    this.addProduct()
    this.getTotalPrice();
  }

  get fb() {
    return this.form?.controls;
  }

  addProduct() {
    const products = this.form.get('products') as FormArray;
    for (let i = 0; i < this.selectedProducts.length; i++) {
      products.push(this.formBuilder.group({
        name: this.selectedProducts[i].product.title ,
        quantity: this.selectedProducts[i].quantity,
        price: this.selectedProducts[i].product.price
      }));
    }
  }

  getTotalPrice() {
    let total = 0;
    const products = this.form.get('products') as FormArray;
    for (let i = 0; i < products.length; i++) {
      total += products.controls[i].value.price * products.controls[i].value.quantity;
    }
    this.fb['totalPrice'].setValue(total);
    this.totalPrice = total;
  }

  onSubmit() {
    const data = { info: this.form.value, infoProducts: this.selectedProducts }
    const queryParams = { data: JSON.stringify(data) }
    this.router.navigate(['/bill'], { queryParams });
  }
}
