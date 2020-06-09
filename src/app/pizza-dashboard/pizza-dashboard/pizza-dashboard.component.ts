import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PizzaState } from '../../shared/enums/pizza-state.enum';
import { NavItem } from '../../shared/models/nav-item.model';
import { PizzaService } from '../../shared/services/pizza.service';

@Component({
  selector: 'app-pizza-dashboard',
  templateUrl: './pizza-dashboard.component.html',
  styleUrls: ['./pizza-dashboard.component.scss']
})
export class PizzaDashboardComponent implements OnInit {
  private subscriptions = new Subscription();
  public totalOrderCount = 0;
  public inKitchenCount = 0;
  public enRouteCount = 0;
  public deliveredCount = 0;

  public navItems: NavItem[] = [
    {
      displayName: 'Logistics',
      route: '/logistics',
    }
  ];

  constructor(private pizzaService: PizzaService) { }

  public ngOnInit(): void {
    this.pizzaService.orderData.subscribe(allOrders => {
      this.totalOrderCount = allOrders.length;

      this.inKitchenCount = (allOrders.filter((item) => item.state === 0)).length;
      this.enRouteCount = (allOrders.filter((item) => item.state === 1)).length;
      this.deliveredCount = (allOrders.filter((item) => item.state === 2)).length;

    });
  }
}
