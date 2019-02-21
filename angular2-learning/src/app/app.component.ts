import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.service';
import { appService } from './app.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  //template: '<h1>Hello {{name}}</h1>',
  templateUrl: 'app/app.component.html',
  providers: [ProductService],
})
export class AppComponent { 
  products: IProduct[]; 
  appTitle: string = 'Hello-world-app';
  name: string = 'World'; 
  appStatus: boolean = true;
  appList: any[] = [
    {
      'id': '1', 
      'url': 'app/img/01.png'
    },
    {
      'id': '2', 
      'url': 'app/img/02.png'
    }
  ];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }
}

