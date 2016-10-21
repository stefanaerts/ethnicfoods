import { Product } from './product';
export class Order {

  constructor(
    public painVegetarien: Product[],
    public painVolaille: Product[],
    public painViande: Product[],
   public painPoisson: Product[],
   public dessert: Product[],
   public platdujour: Product[],
   public formule: Product[],
   public petiteentree: Product[],
   public specialite: Product[],
   public salade: Product[],
   public totalPrize: number,
   public orderId: string
    ) {
  }
}
