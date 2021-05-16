export abstract class ProductComponent {
  abstract getPrice(): number;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  add(product: ProductComponent): this {
    return this;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(product: ProductComponent): this {
    return this;
  }
}

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  add(product: ProductComponent): this {
    this.children.push(product);
    return this;
  }

  remove(product: ProductComponent): this {
    const productIndex = this.children.findIndex(
      (child) => JSON.stringify(child) === JSON.stringify(product),
    );

    if (productIndex !== -1) this.children.splice(productIndex, 1);

    return this;
  }

  getPrice(): number {
    return this.children.reduce((acc, child) => acc + child.getPrice(), 0);
  }
}

const tShirt = new ProductLeaf('Camiseta', 40);
const smartphone = new ProductLeaf('Celular', 1_000);
const pen = new ProductLeaf('Caneta', 2);

const productBox = new ProductComposite().add(tShirt).add(smartphone).add(pen);

console.log(productBox.getPrice());
productBox.remove(smartphone);
console.log(productBox.getPrice());
productBox.remove(new ProductLeaf('Caneta', 2));
console.log(productBox.getPrice());

const tablet = new ProductLeaf('Tablet', 2_000);
const kindle = new ProductLeaf('Kindle', 300);

const anotherProductBox = new ProductComposite().add(tablet).add(kindle);
productBox.add(anotherProductBox);

console.log(productBox.getPrice());
