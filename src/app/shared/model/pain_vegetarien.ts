export class PainVegetarien{
  constructor(public $key: string,
    public name: string,
    public description: string,
    public iconurl: string,
    public prize_demi: string,
    public prize_entier: string,
    ) {

  }
  static fromJson({$key, name, description,iconurl,prize_demi,prize_entier}) {
    return new PainVegetarien($key, name, description,iconurl,prize_demi,prize_entier);
  }
}
