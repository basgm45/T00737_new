import { Component, OnInit, Input } from '@angular/core';
import { ServiceAllService } from 'src/app/services/service-all.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  @Input() orderList = [];
  constructor(private service: ServiceAllService, private route: Router ) { }

  ngOnInit() {
  }
  goToEdit(load) {
    this.service.order = load;
    this.route.navigate(['/edit']);
  }
  delete(id) {
    // const index = this.orderList.findIndex(id);
    // console.log(index);
    console.log(id);

    this.service.deleteOrder(id).subscribe(res => {
      this.orderList.splice(id, 1)
    })
  }
  goToadd() {
    this.service.order = null;
    this.route.navigate(['/add']);
  }

}
