export interface Resource  {
  id: string | number;
}

export interface Toppings  {
  id: number;
  name: string;
  time: number;
}

export class ToppingsInit  {
  id: number;
  name: string;
  time: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.time = 0;
  }
}

export interface Driver  {
  id: number;
  firstName: string;
  lastName: string;
  state: number;
}

export class DriverInit  {
  id: number;
  firstName: string;
  lastName: string;
  state: number;

  constructor() {
    this.id  = 0;
    this.firstName = '';
    this.lastName  = '';
    this.state = 0;
  }
}

export interface Order  {
  id: number;
  customerName: string;
  toppings: Array<SelectedToppings> | Array<Toppings>;
  state: number | string;
  size: number;
  driver: number;
}

export class OrderInit  {
  id: number;
  customerName: string;
  toppings: Array<SelectedToppings>;
  state: number;
  size: number;
  driver: number;

  constructor() {
    this.id = 0;
    this.customerName = '';
    this.toppings = [];
    this.state = 0;
    this.size = 0;
    this.driver = 0;
  }
}

export interface SelectedToppings {
  id: number;
}
