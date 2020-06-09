import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { PizzaLogisticsRoutingModule } from './pizza-logistics-routing.module';
import { PizzaLogisticsComponent } from './pizza-logistics/pizza-logistics.component';
import { HttpClientModule } from '@angular/common/http';
import { NewOrderComponent } from './new-order/new-order.component';
import { OpenOrdersComponent } from './open-orders/open-orders.component';
import { ReadyForDeliveryComponent } from './ready-for-delivery/ready-for-delivery.component';
import { DeliveredComponent } from './delivered/delivered.component';

@NgModule({
  declarations: [
    PizzaLogisticsComponent,
    NewOrderComponent,
    OpenOrdersComponent,
    ReadyForDeliveryComponent,
    DeliveredComponent,
  ],
  imports: [
    CommonModule,
    PizzaLogisticsRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule
  ],
})
export class PizzaLogisticsModule { }
