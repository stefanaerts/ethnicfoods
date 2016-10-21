export class Product {
  $key: string;
  type: string;
  name: string;
  description: string;
  iconurl: string;
  prize: number;
  prize_small: number;
  prize_large: number;
  typeOfBread: string;
  options: string[];
  orderId: string;
  itemId: string;
static fromJson({$key, type, name, description, iconurl,  prize , prize_small, prize_large, typeOfBread, options, orderId , itemId}) {
    return new Product($key,type, name, description, iconurl, prize, prize_small, prize_large, typeOfBread, options,  orderId, itemId);
  }
  static fromJsonArray(json: any[]): Product[] {
    return json.map(Product.fromJson);
  }
  constructor($key: string,
  type: string,
    name: string,
    description: string,
    iconurl: string,
    prize: number,
    prize_small: number,
    prize_large: number,
    typeOfBread: string,
    options: string[],
    orderId: string,
    itemId: string
    ) {
      this.$key = $key;
      this.type = type;
      this.name = name;
      this.description = description;
      this.iconurl = iconurl;
      this.prize = prize;
      this.orderId = orderId;
      this.itemId = itemId;
      this.prize_large = prize_large;
      this.prize_small = prize_small;
      this.typeOfBread = typeOfBread;
      this.options = options;
    }
  }
