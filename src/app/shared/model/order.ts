import  {PainVegetarien} from './pain_vegetarien';
export class Order {

  constructor(
    public painVegetarien: PainVegetarien,
  //  public name: string,
  //   public description: string,
     public type: string,
     public size: string,
    public totalprize: number) {
  }
}
