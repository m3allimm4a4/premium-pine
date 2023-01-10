import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/checkout/order.service';
import { Order } from 'src/app/shared/models/order.interface';

@Component({
  selector: 'app-admin-dashboard-orders-details',
  templateUrl: './admin-dashboard-orders-details.component.html',
  styleUrls: ['./admin-dashboard-orders-details.component.scss'],
})
export class AdminDashboardOrdersDetailsComponent implements OnInit {
  public order: Order = {} as Order;
  public shipping = 5;

  constructor(private activatedRoute: ActivatedRoute, private orderService: OrderService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (!id) return;
      this.orderService.getOrder(id).subscribe(order => {
        this.order = order;
      });
    });
  }
}
