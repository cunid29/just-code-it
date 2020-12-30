import { HttpClientService } from 'src/app/service/http-client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any[] = [];

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.httpClientService.getOrders()
      .subscribe(res => this.orders = res, err => alert("Error to get orders"));
  }

  getProductNames(order) {
    const strItems = order.items;
    let items: any[] = JSON.parse(strItems);
    return items.map(item => item.name).join("\r\n");
  }

  getPrices(order) {
    const strItems = order.items;
    let items: any[] = JSON.parse(strItems);
    return items.map(item => item.price).join("\n\r");
  }

  getQuantities(order) {
    const strItems = order.items;
    let items: any[] = JSON.parse(strItems);
    return items.map(item => item.quantity).join("\n\r");
  }

  getSuppliers(order) {
    const strItems = order.items;
    let items: any[] = JSON.parse(strItems);
    return items.map(item => item.supplier).join("\n\r");
  }

  getTotalAmount(order) {
    const strItems = order.items;
    let items: any[] = JSON.parse(strItems);
    let amount = 0;
    items.forEach(item => amount += +item.price * +item.quantity);
    return amount;
  }

  remove(orderId) {
    this.httpClientService.removeOrder(orderId)
      .subscribe( _ => this.loadOrders(), _ => alert("Error to delete"));
  }
}
