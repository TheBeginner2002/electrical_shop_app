import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuyingProductModel } from 'src/app/model/buying-product-model';

@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent {
  isNotification: boolean = true;
  info: any;
  products: BuyingProductModel[] = [];
  dateNow = new Date();

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      const data = JSON.parse(params['data']);
      this.info = data.info;
      this.products = data.infoProducts;
    });
  }

  changeNotification() {
    this.isNotification = false;
  }

  getAddress() {
    return `${this.info.addressNumber}, ${this.info.addressCommune}, ${this.info.addressDistrict}, ${this.info.addressProvince}`;
  }

  getDateShipping() {
    const date = new Date();
    date.setDate(this.dateNow.getDate() + 6);
    return date;
  }
}
