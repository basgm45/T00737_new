import { Component, OnInit } from '@angular/core';
import { ServiceAllService } from 'src/app/services/service-all.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  saleForm: FormGroup;
  productList: Product[] = [];
  orderList = [];
  constructor(private service: ServiceAllService) { }

  ngOnInit() {
    this.saleForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      productId: new FormControl(null)
    });
    this.service.getProduct().subscribe(res => {
      this.productList = res;
      console.log(res);
    });
  }
  onSearch(form: FormGroup) {
    let condition = form.getRawValue();
    // console.log(condition);
    condition = { ...condition, ...condition.productId };
    // console.log(condition);

    this.service.getOrder(condition).subscribe(res => {
      console.log(res);

      this.orderList = res;
    });
  }
  resetForm() {
    this.saleForm.reset();
  }

}
