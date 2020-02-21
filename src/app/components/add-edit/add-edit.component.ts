import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Customer } from 'src/app/Models/customer';
import { ServiceAllService } from 'src/app/services/service-all.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  product: Product[] = [];
  orderForm: FormGroup;
  customerList: Customer[] = [];

  constructor(public service: ServiceAllService, private route: Router) { }

  ngOnInit() {
    this.orderForm = new FormGroup({
      orderId: new FormControl(0),
      amount: new FormControl('', Validators.required),
      customer: new FormControl('', Validators.required),
      orderDate: new FormControl(new Date(), Validators.required),
      product: new FormControl('', Validators.required),
      status: new FormControl(''),
      total: new FormControl(0)

    });
    this.service.getProduct().subscribe(res => {
      //  res.map(val => {
      //     return {
      //       ...val, productDesc: null

      //     }
      //   }); 
      // ลบข้อมูล ใน Array ออกจาก table เพื่อให้ข้อมูลตรงก่อนก่อนเข้า patchvalue
      res.forEach(val => { delete val.productDesc; });
      this.product = res;
      console.log(res);

    });
    this.service.getCustomer().subscribe(res => {
      // ลบข้อมูล ใน Array ออกจาก table เพื่อให้ข้อมูลตรงก่อนก่อนเข้า patchvalue
      res.forEach(val => {
        delete val.email;
        delete val.tel;
        delete val.address;
      });
      this.customerList = res;
    });




    const selectorder = this.service.order;
    if (selectorder) {
      this.service.getOrderById(selectorder.orderId.toString()).subscribe(res => {
        console.log(res);
        this.orderForm.patchValue({
          ...res, orderDate: new Date
            (res.orderDate), status: res.status === 'Y' ? true : false
          // , amount: res.amount,
          // customer: {
          //   customerId: res.customer.customerId,
          //   fullName: res.customer.fullName,

          // },
          // orderId: res.orderId,
          // product: {
          //   price: res.product.price,
          //   productId: res.product.productId,
          //   productName: res.product.productName,
          //   productDesc: res.product.productDesc
          // },
          // total: res.total

        });

        // this.orderForm.get('product').setValue(this.service.order.product);
        // this.orderForm.get('customer').setValue(this.service.order.customer);

      });



    }

    this.testConst();
  }
  testConst() {
    const x = { test: '555' };

    const y = { ...x, name: 'Hallo' };
    console.log(y);
    
  }
  onSumit(form: FormGroup) {

    if (form.valid) {
      let data = form.getRawValue();
      data = { ...data, status: data.status ? 'Y' : 'N' };
      if (this.service.order) {
        console.log(data);
        this.service.editOrder(data).subscribe(res => {
          console.log('testEdit', res)
          window.alert('แก้ไขเรียบร้อยแล้ว');
          // window.location.reload();
          this.resetForm();
        });
      } else {
        this.service.addOrder(data).subscribe(res => {
          console.log('testAdd', res);
          window.alert('บันทึกสำเเร็จ');
          // window.location.reload();
          this.resetForm();
        });
      }


    }


  }
  resetForm() {
    this.orderForm.reset();
  }


}
