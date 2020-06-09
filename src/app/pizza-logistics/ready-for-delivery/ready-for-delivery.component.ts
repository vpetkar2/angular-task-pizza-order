import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../../shared/services/pizza.service';
import { Order, Toppings, SelectedToppings, Driver } from '../../shared/interfaces/resource.interface';

@Component({
  selector: 'app-ready-for-delivery',
  templateUrl: './ready-for-delivery.component.html',
  styleUrls: ['./ready-for-delivery.component.scss']
})
export class ReadyForDeliveryComponent implements OnInit {

  public selectedDriver: Driver;
  public orders: Array<Order> = [];
  public drivers: Array<Driver> = [];

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.pizzaService.getDrivers().subscribe(data => {
      this.drivers = data;
    });
    this.pizzaService.orderData.subscribe(data => {
      data = data.filter((item) => item.state === 1);
      this.orders = data;
    });
  }

  assign(order: Order, driver): void {
    order.state = 2;
    order.driver = driver.value;
    this.pizzaService.updateOrder(order);
  }

}
