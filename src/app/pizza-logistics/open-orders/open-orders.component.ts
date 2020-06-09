import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../../shared/services/pizza.service';
import { Order, Toppings, SelectedToppings } from '../../shared/interfaces/resource.interface';

@Component({
  selector: 'app-open-orders',
  templateUrl: './open-orders.component.html',
  styleUrls: ['./open-orders.component.scss']
})
export class OpenOrdersComponent implements OnInit {

  public toppings: Array<Toppings> = [];
  public orders: Array<Order> = [];

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.pizzaService.getToppings().subscribe(data => {
      this.toppings = data;
    });
    this.pizzaService.orderData.subscribe(data => {
      data = data.filter((item) => item.state === 0);
      this.orders = data;
    });
  }

  toppingsName(orderTopps: Array<SelectedToppings>): string {
    const arr = orderTopps.map((item) => {
      let toppName = '';
      this.toppings.forEach((topp) => {
        if (topp.id === item.id) {
          toppName = topp.name;
        }
      });
      return toppName.charAt(0).toUpperCase() + toppName.slice(1);
    });
    return arr.join(', ');
  }

  sendToKitchen(order: Order): void {
    order.state = 1;
    this.pizzaService.updateOrder(order);
  }
}
