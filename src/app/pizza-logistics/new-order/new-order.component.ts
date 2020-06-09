import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../../shared/services/pizza.service';
import { Toppings, SelectedToppings, Order, OrderInit } from '../../shared/interfaces/resource.interface';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  public orderForm: FormGroup;
  public toppings: Array<Toppings> = [];

  constructor(private pizzaService: PizzaService,
              public formBuilder: FormBuilder) {
    this.orderForm = formBuilder.group({
      name: ['', Validators.required],
      toppings: [[], Validators.required],
      size: [0, Validators.required]
    });
  }

  public ngOnInit(): void {
    this.pizzaService.getToppings().subscribe(data => {
      this.toppings = data;
    });
  }

  placeOrder(): void {
    const toppingObjects: Array<SelectedToppings> = [];
    this.orderForm.value.toppings.forEach((item) => {
      toppingObjects.push({id: item});
    });
    const order: Order    = new OrderInit();
    order.customerName    = this.orderForm.value.name;
    order.size            = this.orderForm.value.size;
    order.toppings        = toppingObjects;
    order.state           = 0;
    this.pizzaService.placeOrder(order).subscribe(data => {
      alert('Order placed successfully!!');
      this.orderForm.reset();
    });
  }
}
