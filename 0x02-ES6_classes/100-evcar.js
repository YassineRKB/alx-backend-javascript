import Car from './10-car';

export default class EVCar extends Car {
  /* eslint-disable no-underscore-dangle */
  constructor(brand, motor, color, range) {
    super();
    this._brand = brand;
    this._motor = motor;
    this._range = range;
    this._color = color;
  }
}
