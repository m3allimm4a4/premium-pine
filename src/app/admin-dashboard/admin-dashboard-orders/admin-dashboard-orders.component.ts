import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { OrderService } from 'src/app/checkout/order.service';
import { Order } from 'src/app/shared/models/order.interface';

@Component({
  selector: 'app-admin-dashboard-orders',
  templateUrl: './admin-dashboard-orders.component.html',
  styleUrls: ['./admin-dashboard-orders.component.scss'],
})
export class AdminDashboardOrdersComponent implements OnInit {
  faCircleInfo = faCircleInfo;
  public orders: Order[] = [];

  constructor(public activatedRoute: ActivatedRoute, private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(orders => {
      this.orders = orders;
    });
  }
}
