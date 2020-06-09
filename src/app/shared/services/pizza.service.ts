import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Toppings, Order, Driver } from '../../shared/interfaces/resource.interface';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  public baseUrl = 'http://localhost:4300/';
  public orderData: BehaviorSubject<Array<Order>> = new BehaviorSubject([]);
  public readyForDeliveryOrdersData: BehaviorSubject<Array<Order>> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.getOrders().subscribe(data => {
      this.orderData.next(data);
    });
  }

  getToppings(): Observable<Array<Toppings>> {
    return this.http.get<Array<Toppings>>(this.baseUrl + 'toppings');
  }

  getOrders(): Observable<Array<Order>> {
    return this.http.get<Array<Order>>(this.baseUrl + 'orders');
  }

  getDrivers(): Observable<Array<Driver>> {
    return this.http.get<Array<Driver>>(this.baseUrl + 'drivers');
  }

  placeOrder(newOrder: Order) {
    const previousOrders = this.orderData.value;
    newOrder.id = previousOrders.length + 1;
    const updatedOrders = [...previousOrders, newOrder];
    this.orderData.next(updatedOrders);

    return this.http.post<Order>(this.baseUrl + 'orders', newOrder);
  }

  updateOrder(order: Order) {
    const allOrders = this.orderData.value;
    allOrders.map((oldOrder) => {
      if (oldOrder.id === order.id) {
        oldOrder = order;
      }
      return oldOrder;
    });
    this.orderData.next(allOrders);
  }

}
