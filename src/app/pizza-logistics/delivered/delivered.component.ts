import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../../shared/services/pizza.service';
import { Order, Toppings, SelectedToppings, Driver } from '../../shared/interfaces/resource.interface';

@Component({
  selector: 'app-delivered',
  templateUrl: './delivered.component.html',
  styleUrls: ['./delivered.component.scss']
})
export class DeliveredComponent implements OnInit {

  public toppings: Array<Toppings> = [];
  public orders: Array<Order> = [];
  public drivers: Array<Driver> = [];

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.pizzaService.getDrivers().subscribe(data => {
      this.drivers = data;
    });
    this.pizzaService.getToppings().subscribe(data => {
      this.toppings = data;
    });
    this.pizzaService.orderData.subscribe(data => {
      data = data.filter((item) => item.state === 2);
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

  driverName(order: Order): string {
    let driverName = '';
    this.drivers.forEach((driver) => {
      if (driver.id === order.driver) {
        driverName = driver.firstName + ' ' + driver.lastName;
      }
    });
    return driverName;
  }
}
