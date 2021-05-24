import { ProductDecorator } from './product-decorator';

export class CustomProductDecorator extends ProductDecorator {
  private increase = 50;

  getPrice(): number {
    return this.product.getPrice() + this.increase;
  }

  getName(): string {
    return `Custom ${this.product.getName()}`;
  }
}
