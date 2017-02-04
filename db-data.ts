import { Constants } from './src/app/shared/constants';

export const dbData = {
  "users": [
    {
      "firstName": "Stefan",
      "lastName": "Aerts",
      "account": {
        "email": "aerts.stefan@gmail.com",
        "phone": "+32478604846"
      },
      "deliveryAddress": {
        "street": "Steendreef",
        "postcode": "1982",
        "city": "Elewijt",
        "number": "14 A"
      },
      "address": {
        "street": "Steendreef",
        "postcode": "1982",
        "city": "Elewijt",
        "number": "14 A"
      }
    },
  ],
  /*"drinks": [
    {
      "name": "Agrum Schweppes 33cl",
      "prize": "1.50",
      "type": Constants.DRINKS
    },
    {
      "name": "Lipton Ice Tea 33cl",
      "prize": "1.50",
      "type": Constants.DRINKS
    },
    {
      "name": "Fanta 33cl",
      "prize": "1.50",
      "type": Constants.DRINKS
    },
    {
      "name": "Coca Light 50cl",
      "prize": "2.00",
      "type": Constants.DRINKS
    },
    {
      "name": "Coca-Cola 50cl",
      "prize": "2.00",
      "type": Constants.DRINKS
    },
    {
      "name": "Coca-Light 33cl",
      "prize": "1.50",
      "type": Constants.DRINKS
    },
    {
      "name": "Coca-Cola 33cl",
      "prize": "1.50",
      "type": Constants.DRINKS
    },
    {
      "name": "Coke Zero 33cl",
      "prize": "1.50",
      "type": Constants.DRINKS
    },
    {
      "name": "Bru 50cl",
      "prize": "2.00",
      "type": Constants.DRINKS
    },
    {
      "name": "Spa flat 50cl",
      "prize": "1.50",
      "type": Constants.DRINKS
    },
    {
      "name": "Spa pétillant 33cl",
      "prize": "1.50",
      "type": Constants.DRINKS
    },
    {
      "name": "Perrier 50cl",
      "prize": "1.75",
      "type": Constants.DRINKS
    },
  ],
  "desserts": [
    {
      "name": "Tiramisu au spéculoos",
      "description": "Tiramisu au spéculoos",
      "prize": "3.50",
      "iconUrl": "https://ethnicfoods.stevegravy.com/wp-content/uploads/2016/01/PNI_4335-2.jpg",
      "type": Constants.DESSERTS
    },
    {
      "name": "Tarte normande",
      "description": "Tarte normande",
      "prize": "3.50",
      "iconUrl": "https://ethnicfoods.stevegravy.com/wp-content/uploads/2016/08/PNI_4475-2.jpg",
      "type": Constants.DESSERTS
    }
  ],
  "salades": [
    {
      "name": "Salade végétarienne aux saveurs du sud",
      "description": "Assortiment de légumes grillés, tomates nature et parmesan",
      "prize": "6.95",
      "iconUrl": "https://ethnicfoods.stevegravy.com/wp-content/uploads/2016/08/PNI_4475-2.jpg",
      "type": Constants.SALADES
    },
    {
      "name": "Poulet grillé",
      "description": "parfumé au thym",
      "prize": "6.95",
      "iconUrl": "https://ethnicfoods.stevegravy.com/wp-content/uploads/2016/08/PNI_4475-2.jpg",
      "type": Constants.SALADES
    }
  ],
  "spécialités":
  [
    {
      "name": "Onglet de boeuf facon tandoori",
      "description": "avec pleurottes poêlées, riz basmati, sushi su, cacahuétètes grillées, germes de soja",
      "prize": "8.95",
      "iconUrl": "https://ethnicfoods.stevegravy.com/wp-content/uploads/2016/08/PNI_4475-2.jpg",
      "type": Constants.SPECIALITES
    },
    {
      "name": "Brochette de scampis",
      "description": "avec riz sauvage, légumes wok poêlées aux herbes",
      "prize": "8.95",
      "iconUrl": "https://ethnicfoods.stevegravy.com/wp-content/uploads/2016/08/PNI_4475-2.jpg",
      "type": Constants.SPECIALITES
    }
  ],
  "Pains_garnis_required":
  [{
    "name": "Blanc"
  },
  {
    "name": "Gris"
  },
  {
    "name": "tomates séchées"
  },
  // {
  //   "name": "chili"
  // },
  {
    "name": "olives noires"
  },
  {
    "name": "noix de pécan rasins"
  },
  {
    "name": "ciabatta au choix"
  }
  ],
  "Pains_garnis_options":
  [
    {
      "name": "Carottes râpées",
      "prize": "0.50"
    },
    {
      "name": "Maïs",
      "prize": "0.50"
    },
    {
      "name": "Jalapenos",
      "prize": "0.50"
    },
    {
      "name": "Dés de tomates",
      "prize": "0.50"
    },
    {
      "name": "Tomates séchées",
      "prize": "0.50"
    },
    {
      "name": "Légumes grillés",
      "prize": "1.00"
    },
    {
      "name": "Parmesan",
      "prize": "0.50"
    },
    {
      "name": "Guacamole",
      "prize": "0.50"
    },
    {
      "name": "Beurre",
      "prize": "0.20"
    },
    {
      "name": "Noix de pécan",
      "prize": "0.50"
    },
    {
      "name": "Poulet grillé",
      "prize": "1.00"
    },
  ],
  "Pain_Végétariens":
  [
    {
      "name": "Gouda",
      "description": "Beurre, gouda, parmesan, cressonnette",
      "prize_small": "1.95",
      "prize_large": "3.75",
      "type": Constants.PAINVEGETARIEN
    },
    {
      "name": "Melun",
      "description": "Brie, vinaigrette de mangue, noix de pécan, roquette",
      "prize_small": "2.95",
      "prize_large": "5.25",
      "type": Constants.PAINVEGETARIEN
    }
  ],
  "Pain_Volailles":
  [
    {
      "name": "Ethnicfoods",
      "description": "Poulet grillé au thym, légumes grillés aux herbes",
      "prize_small": "3.25",
      "prize_large": "5.95",
      "type": Constants.PAINVOLAILLE
    },
    {
      "name": "Bombay",
      "description": "Blanc de poulet, sauce tandoori, comcombre, salade",
      "prize_small": "2.95",
      "prize_large": "5.50",
      "type": Constants.PAINVOLAILLE
    }
  ],
  "Pain_Viandes":
  [
    {
      "name": "Bourgogne",
      "description": "Boeuf rôti au romarin, rémoulade de céleri-rave, parmesan, cressonnette",
      "prize_small": "2.95",
      "prize_large": "5.50",
      "type": Constants.PAINVIANDE
    },
    {
      "name": "Venis",
      "description": "Carpaccio de boeuf, huile de truffe noire, parmesan, roquette, dés de tomates nature",
      "days-avaiable": "uniquement le jeudi et vendredi",
      "prize_small": "2.95",
      "prize_large": "5.25",
      "type": Constants.PAINVIANDE
    }
  ],
  "Pain_Poissons":
  [
    {
      "name": "Nice",
      "description": "Thon, huile d'olive, anchois, trio de poivrons, olives noires, salade verte",
      "prize_small": "3.25",
      "prize_large": "5.95",
      "type": Constants.PAINPOISSON
    },
    {
      "name": "Knokke",
      "description": "Salade de crevettes grises, tomates confites, vinaigre balsamique, vinaigrette de tomate, cressonnette",
      "prize_small": "3.25",
      "prize_large": "5.95",
      "type": Constants.PAINPOISSON
    }
  ],
  "Plat_du_jour":
  [
    {
      "name": "Selon les produits frais du marché",
      "prize": "9.95",
      "type": Constants.PLATDUJOUR
    }
  ],
  "Petites_entrées_avec_potages":
  [
    {
      "name": "Potage du jour, pain,beurre, croûton",
      "prize": "3.95",
      "type": Constants.PETITEENTREE
    },
    {
      "name": "Samosa végétarien, poulet tikka, boeuf",
      "prize": "1.00",
      "type": Constants.PETITEENTREE
    }, {
      "name": "Börek",
      "prize": "1.00",
      "type": Constants.PETITEENTREE
    }
  ],
  "Formules":
  [
    {
      "name": "Potage + demi-pain garni de votre choix",
      "prize": "6.25",
      "type": Constants.FORMULES
    },
    {
      "name": "Lunch: Potage + plat du jour + dessert",
      "prize": "14.95",
      "type": Constants.FORMULES
    },
    {
      "name": "Quiche du jour et potage du jour",
      "prize": "7.95",
      "type": Constants.FORMULES
    }, {
      "name": "Quiche du jour sans accompagnement",
      "prize": "4.95",
      "type": Constants.FORMULES
    }, {
      "name": "Quiche du jour avec salade",
      "prize": "6.95",
      "type": Constants.FORMULES
    }
  ]*/
};

