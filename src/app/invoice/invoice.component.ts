import { Product } from './../shared/model/product';
import { CounterService } from './../shared/counter/counter.service';
import { OrderService } from './../shared/model/order.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'jspdf';
import 'html2canvas';
declare let jsPDF;
declare let html2canvas;
import * as $ from 'jquery';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  //  boldvar="bold";
  // form: any;
  //   cache_width: any;
  //  a4: any;
  ethniccolor = '#CDDC39';

  /* tilesTo: any[] = [
     {
       title: 'FACTURE à', font10: '10px', font14: '14px', font12: '12px',
       name: '  Web/Mobile Developer S.A.', address: '  steendreef 14A, Elewijt(1982)',
       phone: '  +32 0478-604846', email: '  aerts.stefan@gmal.com', cols: 1, rows: 1, color: '#455A64'
     },
     //    {textInv1: 'Two',textInv2: 'Test', cols: 2, rows: 1, color: 'lightgreen'},
     //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
     //   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
   ];
   */
  tilesInvoiceTo: any[] = [
    { cols: 6, rows: 1 },
    {
      title: 'FACTURE à ', name: '  Web/Mobile Developer S.A.', address: '  steendreef 14A, Elewijt(1982)',
      phone: '  +32 0478-604846', email: '  aerts.stefan@gmail.com', fontsize: '8px', cols: 3, rows: 3, color: '#455A64'
    },
  ];
  tilesInvoiceTotal: any[] = [
    { text: 'FACTURE', fontsize: '18px', cols: 3, color: 'white', rows: 2, bgcolor: this.ethniccolor, boldvar: 'bold' },
    {
      text: 'Total Dû', total: this.orderService.getTotalPrizeWithTaxAsString() + ' €',
      fontsize: '10px', cols: 1, rows: 2, bgcolor: 'white', boldvar: 'bold'
    },
    { text: 'Date Facture', total: this.orderService.getDate(), fontsize: '10px', cols: 1, rows: 2, bgcolor: 'white', boldvar: 'bold' },
    { text: 'Num. Facture', total: '00015', fontsize: '10px', cols: 1, rows: 2, bgcolor: 'white', boldvar: 'bold' },
    { cols: 6, rows: 1 },
  ];

  tilesInvoiceDetailsTitle: any[] = [
    { description: 'Item Description', textalign: 'none', fontsize: '12px', cols: 3, color: '', rows: 2, boldvar: '', bgcolor: '#EEEEEE' },
    { unitPrice: 'Unit Price', fontsize: '12px', cols: 1, color: '', rows: 2, boldvar: '', bgcolor: '#EEEEEE' },
    { quantity: 'Quantity', fontsize: '12px', cols: 1, color: '', rows: 2, boldvar: '', bgcolor: '#EEEEEE' },
    { total: 'Total', fontsize: '12px', cols: 1, color: '', rows: 2, boldvar: '', bgcolor: '#EEEEEE' },
  ];

  tilesInvoiceDetailsPainVeg: any[] = new Array(this.orderService.getAllOrderedPainVegetarien().length);
  tilesInvoiceDetailsPainVol: any[] = new Array(this.orderService.getAllOrderedPainVolailles().length);
  tilesInvoiceDetailsPainViande: any[] = new Array(this.orderService.getAllOrderedPainViandes().length);
  tilesInvoiceDetailsPainPoisson: any[] = new Array(this.orderService.getAllOrderedPainViandes().length);



  tilesInvoiceDetailsDrinks: any[] = null;
  tilesInvoiceDetailsPlatDuJour: any[] = null;
  tilesInvoiceDetailsPetiteEntree: any[] = null;
  tilesInvoiceDetailsFormule: any[] = null;
  tilesInvoiceDetailsSalades: any[] = null;
  tilesInvoiceDetailsSpecialites: any[] = null;
  tilesInvoiceDetailsDesserts: any[] = null;





  // = new Array(this.orderService.getAllOrderedDrinks().length);


  tilesInvoiceTotalDetail: any[] = [
    //  { emptyBox: '', textalign: 'none', fontsize: '', cols: 3, color: '', rows: 2, boldvar: '', bgcolor: 'transparent' },
    { cols: 4, rows: 1.5 },
    {
      subTotalDescription: 'Sub Total:', textalign: 'none',
      fontsize: '14px', cols: 1, color: '', rows: 1, boldvar: 'bold', bgcolor: 'white'
    },
    {
      subTotal: this.orderService.getTotalPrizeAsString() + ' €',
      textalign: 'none', fontsize: '14px', cols: 1, color: '', rows: 1, boldvar: 'bold', bgcolor: 'white'
    },
    // { emptyBox: '', textalign: 'none', fontsize: '', cols: 4, color: '', rows: 2, boldvar: 'bold', bgcolor: 'transparent' },
    { taxDescription: 'Tax 6%:', textalign: 'none', fontsize: '14px', cols: 1, color: '', rows: 1, boldvar: 'bold', bgcolor: 'white' },
    {
      tax: this.orderService.getTotalTaxAsString() + ' €',
      textalign: 'none', fontsize: '14px', cols: 1, color: '', rows: 1, boldvar: 'bold', bgcolor: 'white'
    },
     { emptyBox: '', textalign: 'none', fontsize: '', cols: 4, color: '', rows: 2, boldvar: 'bold', bgcolor: 'transparent' },
    {
      totalDescription: 'Total:', textalign: 'none', fontsize: '14px',
      cols: 1, color: 'white', rows: 2, boldvar: 'bold', bgcolor: this.ethniccolor
    },
    {
      total: this.orderService.getTotalPrizeWithTaxAsString() + ' €',
      textalign: 'none', fontsize: '14px', cols: 1, color: 'white', rows: 2, boldvar: 'bold', bgcolor: this.ethniccolor
    },

  ];

  /*invoice = {
    number: 10,
    tax: 14,
    customer_info: {
      name: "Rohan Arihant",
      web_link: 'John Doe Designs Inc.',
      address1: '1 Infinite Loop',
      address2: 'Cupertino, California, US',
      postal: '90210'
    },
    items: [{
      description: "mangalu",
      quentity: 10,
      cost: 300

    }],
    company_info: {
      name: 'Metaware Labs',
      web_link: 'www.metawarelabs.com',
      address1: '123 Yonge Street',
      address2: 'Toronto, ON, Canada',
      postal: 'M5S 1B6'
    }
  };
  currency_symbol =
  [
    {
      name: 'CanadianDollar',
      currency: '$'
    },
    {
      name: 'USDollar',
      currency: '$'
    },
    {
      name: 'euro',
      currency: '€'
    },
    {
      name: 'norwegian_krone',
      currency: 'kr'
    },
    {
      name: 'Indian Rupee',
      currency: '₹'
    }
  ];
  // invoice = [
  //   {rows: 2, name: "Mal", human: "Jeremy", age: 5},
  //   {rows: 1, name: "Molly", human: "David", age: 5},
  //   { rows: 1, name: "Sophie", human: "Alex", age: 8},
  //   {rows: 2, name: "Taz", human: "Joey", age: '11 weeks'},
  //   { rows: 1, name: "Kobe", human: "Igor", age: 5},
  //   {rows: 2, name: "Porter", human: "Kara", age: 3},
  //   { rows: 1, name: "Stephen", human: "Stephen", age: 8},
  //   {rows: 1, name: "Cinny", human: "Jules", age: 3},
  //   { rows: 1, name: "Hermes", human: "Kara", age: 3},
  // ];
*/
  constructor(public router: Router, public orderService: OrderService, public counterService: CounterService) {

  }
  expdf() {
    //this.pdfSrc = window.document.getElementsByTagName("body")[0];
  }
  //this.doc.output("dataurlnewwindow");
  strcmp(a, b) {
    return (a < b ? -1 : (a > b ? 1 : 0));
  }
  ngOnInit() {

    //this.form.width(900);
    //    this.cache_width = this.form.width();
    //this.form.width((this.a4[0]*1.33333) -80).css('max-width','none');

    // this.pdfSrc = window.document.getElementsByTagName("body")[0];
    //  this.order = this.orderService.getOrder();
    this.orderService.getOrder().painVegetarien.sort(
      (leftSide, rightSide): number => {
        if (leftSide.name < rightSide.name) return -1;
        if (leftSide.name > rightSide.name) return 1;
        if (leftSide.name === rightSide.name) {
          if (leftSide.typeOfBread < rightSide.typeOfBread) return -1;
          if (leftSide.typeOfBread > rightSide.typeOfBread) return 1;
          if (leftSide.typeOfBread === rightSide.typeOfBread) {
            if (leftSide.prize < rightSide.prize) return -1;
            if (leftSide.prize > rightSide.prize) return 1;
          }
        }
        return 0;
      });

    this.orderService.getOrder().painVolaille.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) return -1;
      if (leftSide.name > rightSide.name) return 1;
      if (leftSide.name === rightSide.name) {
        if (leftSide.typeOfBread < rightSide.typeOfBread) return -1;
        if (leftSide.typeOfBread > rightSide.typeOfBread) return 1;
        if (leftSide.typeOfBread === rightSide.typeOfBread) {
          if (leftSide.prize < rightSide.prize) return -1;
          if (leftSide.prize > rightSide.prize) return 1;
        }
      }
      return 0;
    });
    this.orderService.getOrder().painViande.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) return -1;
      if (leftSide.name > rightSide.name) return 1;
      if (leftSide.name === rightSide.name) {
        if (leftSide.typeOfBread < rightSide.typeOfBread) return -1;
        if (leftSide.typeOfBread > rightSide.typeOfBread) return 1;
        if (leftSide.typeOfBread === rightSide.typeOfBread) {
          if (leftSide.prize < rightSide.prize) return -1;
          if (leftSide.prize > rightSide.prize) return 1;
        }
      }
      return 0;
    });
    this.orderService.getOrder().painPoisson.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) return -1;
      if (leftSide.name > rightSide.name) return 1;
      if (leftSide.name === rightSide.name) {
        if (leftSide.typeOfBread < rightSide.typeOfBread) return -1;
        if (leftSide.typeOfBread > rightSide.typeOfBread) return 1;
        if (leftSide.typeOfBread === rightSide.typeOfBread) {
          if (leftSide.prize < rightSide.prize) return -1;
          if (leftSide.prize > rightSide.prize) return 1;
        }
      }
      return 0;
    });
    this.orderService.getOrder().platdujour.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) return -1;
      if (leftSide.name > rightSide.name) return 1;
      if (leftSide.name === rightSide.name) {
        if (leftSide.typeOfBread < rightSide.typeOfBread) return -1;
        if (leftSide.typeOfBread > rightSide.typeOfBread) return 1;
        if (leftSide.typeOfBread === rightSide.typeOfBread) {
          if (leftSide.prize < rightSide.prize) return -1;
          if (leftSide.prize > rightSide.prize) return 1;
        }
      }
      return 0;
    });
    this.orderService.getOrder().drinks.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) return -1;
      if (leftSide.name > rightSide.name) return 1;
      if (leftSide.name === rightSide.name) {
        if (leftSide.typeOfBread < rightSide.typeOfBread) return -1;
        if (leftSide.typeOfBread > rightSide.typeOfBread) return 1;
        if (leftSide.typeOfBread === rightSide.typeOfBread) {
          if (leftSide.prize < rightSide.prize) return -1;
          if (leftSide.prize > rightSide.prize) return 1;
        }
      }
      return 0;
    });

    this.orderService.getOrder().dessert.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) return -1;
      if (leftSide.name > rightSide.name) return 1;
      if (leftSide.name === rightSide.name) {
        if (leftSide.typeOfBread < rightSide.typeOfBread) return -1;
        if (leftSide.typeOfBread > rightSide.typeOfBread) return 1;
        if (leftSide.typeOfBread === rightSide.typeOfBread) {
          if (leftSide.prize < rightSide.prize) return -1;
          if (leftSide.prize > rightSide.prize) return 1;
        }
      }
      return 0;
    });
    this.orderService.getOrder().petiteentree.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) return -1;
      if (leftSide.name > rightSide.name) return 1;
      if (leftSide.name === rightSide.name) {
        if (leftSide.typeOfBread < rightSide.typeOfBread) return -1;
        if (leftSide.typeOfBread > rightSide.typeOfBread) return 1;
        if (leftSide.typeOfBread === rightSide.typeOfBread) {
          if (leftSide.prize < rightSide.prize) return -1;
          if (leftSide.prize > rightSide.prize) return 1;
        }
      }
      return 0;
    });
    this.orderService.getOrder().specialite.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) return -1;
      if (leftSide.name > rightSide.name) return 1;
      if (leftSide.name === rightSide.name) {
        if (leftSide.typeOfBread < rightSide.typeOfBread) return -1;
        if (leftSide.typeOfBread > rightSide.typeOfBread) return 1;
        if (leftSide.typeOfBread === rightSide.typeOfBread) {
          if (leftSide.prize < rightSide.prize) return -1;
          if (leftSide.prize > rightSide.prize) return 1;
        }
      }
      return 0;
    });
    this.orderService.getOrder().salade.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) return -1;
      if (leftSide.name > rightSide.name) return 1;
      if (leftSide.name === rightSide.name) {
        if (leftSide.typeOfBread < rightSide.typeOfBread) return -1;
        if (leftSide.typeOfBread > rightSide.typeOfBread) return 1;
        if (leftSide.typeOfBread === rightSide.typeOfBread) {
          if (leftSide.prize < rightSide.prize) return -1;
          if (leftSide.prize > rightSide.prize) return 1;
        }
      }
      return 0;
    });
    this.orderService.getOrder().formule.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) return -1;
      if (leftSide.name > rightSide.name) return 1;
      if (leftSide.name === rightSide.name) {
        if (leftSide.typeOfBread < rightSide.typeOfBread) return -1;
        if (leftSide.typeOfBread > rightSide.typeOfBread) return 1;
        if (leftSide.typeOfBread === rightSide.typeOfBread) {
          if (leftSide.prize < rightSide.prize) return -1;
          if (leftSide.prize > rightSide.prize) return 1;
        }
      }
      return 0;
    });
    let teller = 0;
    this.orderService.getOrder().painVegetarien.forEach(element => {
      //  element.options.sort();
      this.tilesInvoiceDetailsPainVeg[teller] = [
        {
          name: element.name,
          textalign: 'none', fontsize: '12px', cols: 2, color: '', rows: 1, boldvar: 'bold', bgcolor: 'white'
        },
        {
          typeOfBread: '' + element.typeOfBread,
          textalign: 'none', fontsize: '8px', cols: 1, color: '', rows: 1, boldvar: '', bgcolor: 'white'
        },
        { unitPrice: element.prize, fontsize: '12px', cols: 1, color: '', rows: 3, boldvar: '', bgcolor: 'white' },
        { quantity: '1', fontsize: '12px', cols: 1, color: '', rows: 3, boldvar: '', bgcolor: 'white' },
        { total: element.prize, fontsize: '12px', cols: 1, color: '', rows: 3, boldvar: '', bgcolor: 'white' },
        {
          description: element.options.sort(),
          textalign: 'none', fontsize: '7px', cols: 3, color: '', rows: 2, boldvar: '', bgcolor: 'white'
        },
      ];
      teller = teller + 1;
    });
    teller = 0;
    this.orderService.getOrder().painVolaille.forEach(element => {
      //  element.options.sort();
      this.tilesInvoiceDetailsPainVol[teller] = [
        {
          name: element.name,
          textalign: 'none', fontsize: '12px', cols: 2, color: '', rows: 1, boldvar: 'bold', bgcolor: 'white'
        },
        {
          typeOfBread: '' + element.typeOfBread,
          textalign: 'none', fontsize: '7px', cols: 1, color: '', rows: 1, boldvar: '', bgcolor: 'white'
        },
        { unitPrice: element.prize, fontsize: '12px', cols: 1, color: '', rows: 3, boldvar: '', bgcolor: 'white' },
        { quantity: '1', fontsize: '12px', cols: 1, color: '', rows: 3, boldvar: '', bgcolor: 'white' },
        { total: element.prize, fontsize: '12px', cols: 1, color: '', rows: 3, boldvar: '', bgcolor: 'white' },
        {
          description: element.options.sort(),
          textalign: 'none', fontsize: '7px', cols: 3, color: '', rows: 2, boldvar: '', bgcolor: 'white'
        },
      ];
      teller = teller + 1;
    });
    teller = 0;
    this.orderService.getOrder().painViande.forEach(element => {
      //  element.options.sort();
      this.tilesInvoiceDetailsPainViande[teller] = [
        {
          name: element.name,
          textalign: 'none', fontsize: '12px', cols: 2, color: '', rows: 1, boldvar: 'bold', bgcolor: 'white'
        },
        {
          typeOfBread: '' + element.typeOfBread,
          textalign: 'none', fontsize: '7px', cols: 1, color: '', rows: 1, boldvar: '', bgcolor: 'white'
        },
        { unitPrice: element.prize, fontsize: '12px', cols: 1, color: '', rows: 3, boldvar: '', bgcolor: 'white' },
        { quantity: '1', fontsize: '12px', cols: 1, color: '', rows: 3, boldvar: '', bgcolor: 'white' },
        { total: element.prize, fontsize: '12px', cols: 1, color: '', rows: 3, boldvar: '', bgcolor: 'white' },
        {
          description: element.options.sort(),
          textalign: 'none', fontsize: '7px', cols: 3, color: '', rows: 2, boldvar: '', bgcolor: 'white'
        },
      ];
      teller = teller + 1;
    });
    teller = 0;
    this.orderService.getOrder().painPoisson.forEach(element => {
      //  element.options.sort();
      this.tilesInvoiceDetailsPainPoisson[teller] = [
        {
          name: element.name,
          textalign: 'none', fontsize: '12px', cols: 2, color: '', rows: 1, boldvar: 'bold', bgcolor: 'white'
        },
        {
          typeOfBread: '' + element.typeOfBread,
          textalign: 'none', fontsize: '7px', cols: 1, color: '', rows: 1, boldvar: '', bgcolor: 'white'
        },
        { unitPrice: element.prize, fontsize: '12px', cols: 1, color: '', rows: 3, boldvar: '', bgcolor: 'white' },
        { quantity: '1', fontsize: '12px', cols: 1, color: '', rows: 3, boldvar: '', bgcolor: 'white' },
        { total: element.prize, fontsize: '12px', cols: 1, color: '', rows: 3, boldvar: '', bgcolor: 'white' },
        {
          description: element.options.sort(),
          textalign: 'none', fontsize: '7px', cols: 3, color: '', rows: 2, boldvar: '', bgcolor: 'white'
        },
      ];
      teller = teller + 1;
    });

this.tilesInvoiceDetailsPlatDuJour = this.summarizeProduct(this.orderService.getOrder().platdujour);
this.tilesInvoiceDetailsPetiteEntree = this.summarizeProduct(this.orderService.getOrder().petiteentree);
this.tilesInvoiceDetailsFormule = this.summarizeProduct(this.orderService.getOrder().formule);
this.tilesInvoiceDetailsDrinks = this.summarizeProduct(this.orderService.getOrder().drinks);
this.tilesInvoiceDetailsSalades = this.summarizeProduct(this.orderService.getOrder().salade);
this.tilesInvoiceDetailsSpecialites = this.summarizeProduct(this.orderService.getOrder().specialite);
this.tilesInvoiceDetailsDesserts = this.summarizeProduct(this.orderService.getOrder().dessert);

}
// this.tilesInvoiceDetailsFormule
summarizeProduct(productArray: Product[])
{
 let displayArray: any[];
 displayArray = new Array();
    productArray.forEach(element => {

      if (displayArray.length === 0) {
        displayArray.push([
          {
            name: element.name,
            textalign: 'none', fontsize: '12px', cols: 3, color: '', rows: 1, boldvar: 'bold', bgcolor: 'white'
          },
            { unitPrice: element.prize, fontsize: '12px', cols: 1, color: '', rows: 1, boldvar: '', bgcolor: 'white' },
          { quantity: element.$key, fontsize: '12px', cols: 1, color: '', rows: 1, boldvar: '', bgcolor: 'white' },
          { total: (element.prize), fontsize: '12px', cols: 1, color: '', rows: 1, boldvar: '', bgcolor: 'white' },
        ]);
      } else if (displayArray.length > 0) {
          if (
          this.strcmp((displayArray[displayArray.length - 1][0].name).toString(),
            element.name.toString()) !== 0) {
          displayArray.push([
            {
              name: element.name,
              textalign: 'none', fontsize: '12px', cols: 3, color: '', rows: 1, boldvar: 'bold', bgcolor: 'white'
            },
            { unitPrice: element.prize, fontsize: '12px', cols: 1, color: '', rows: 1, boldvar: '', bgcolor: 'white' },
            { quantity: element.$key, fontsize: '12px', cols: 1, color: '', rows: 1, boldvar: '', bgcolor: 'white' },
            { total: element.prize, fontsize: '12px', cols: 1, color: '', rows: 1, boldvar: '', bgcolor: 'white' },

          ]);


        } else {
          displayArray.pop();
          displayArray.push([
            {
              name: element.name,
              textalign: 'none', fontsize: '12px', cols: 3, color: '', rows: 1, boldvar: 'bold', bgcolor: 'white'
            },
            { unitPrice: element.prize, fontsize: '12px', cols: 1, color: '', rows: 1, boldvar: '', bgcolor: 'white' },
            { quantity: element.$key, fontsize: '12px', cols: 1, color: '', rows: 1, boldvar: '', bgcolor: 'white' },
            {
              total: (element.prize * this.counterService.getCount(element.$key)),
              fontsize: '12px', cols: 1, color: '', rows: 1, boldvar: '', bgcolor: 'white'
            },

          ]);
        }
      }
    });
    return displayArray;
}



  createPDF() {

    this.exportPDF();


    //   this.form.width(this.cache_width);

    //     this.form.width(this.cache_width);
  }
  exportPDF() {
    let form = $("#mainContainer");
  //  let cache_width = form.width();
 //   let a4 = [595.28, 841.89];  // for a4 size paper width and height

    // $(window).scrollTop(0);

    this.getCanvas().then(function (canvas) {
      let img = canvas.toDataURL("image/png"),
        doc = new jsPDF({
          unit: 'px',
          format: 'a4'
        });

      doc.addImage(img, 'JPEG', 20, 20);
      //   doc.output('save', 'filename.pdf');
      //blob:http://localhost:4200/1b71e601-9055-4143-8a02-722d7c32dc84
      try {
        //       doc.save('ethnicfoodsInvoice.pdf');

        // doc.output('dataurlnewwindow') ;
        //   var string = doc.output('datauristring');
        var blob = doc.output("blob");
        window.open(URL.createObjectURL(blob));
        //doc.save('techumber-html-to-pdf.pdf');
    //    form = $("#mainContainer");
   //     form.width(cache_width);
        window.history.back();
        //location.reload(true);
      } catch (e) {
        alert('problem in generating pdf(contact aerts.stefan@gmail.com) :' + e);
      }
    });
  }
  // create canvas object
  getCanvas() {
    let form = $("#mainContainer");
  //  let a4 = [595.28, 841.89];  // for a4 size paper width and height
  //  form.width((a4[0] * 1.33333) - 80).css('max-width', 'none');
    return html2canvas(form, {
      imageTimeout: 2000,
      removeContainer: true
    });
  }
  goHome() {
    window.location.href = '/invoice';

  }
}
