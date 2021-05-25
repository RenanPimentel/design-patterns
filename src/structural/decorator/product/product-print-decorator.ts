import { ProductDecorator } from './product-decorator';

export class ProductPrintDecorator extends ProductDecorator {
  private increase = 10;

  getPrice(): number {
    return this.product.getPrice() + this.increase;
  }

  getName(): string {
    return `Printed ${this.product.getName()}`;
  }
}
