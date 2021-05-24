import { CustomProductDecorator } from './product/custom-product-decorator';
import { ProductDecorator } from './product/product-decorator';
import { ProductPrintDecorator } from './product/product-print-decorator';
import { TShirt } from './product/t-shirt';

const tShirt = new TShirt();
const decorator = new ProductDecorator(tShirt);
const printedTShirt = new ProductPrintDecorator(tShirt);
const twicePrintedTShirt = new ProductPrintDecorator(printedTShirt);

const customTShirt = new CustomProductDecorator(tShirt);

console.log(`${tShirt.getName()} ${tShirt.getPrice()}`);
console.log(`${decorator.getName()} ${decorator.getPrice()}`);
console.log(`${printedTShirt.getName()} ${printedTShirt.getPrice()}`);
console.log(`${twicePrintedTShirt.getName()} ${twicePrintedTShirt.getPrice()}`);
console.log(`${customTShirt.getName()} ${customTShirt.getPrice()}`);
