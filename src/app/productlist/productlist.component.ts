import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../shared/index';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  searchResults: any;
  constructor(private _productlistService: ProductlistService) { }

  ngOnInit() {
    this._productlistService.config.subscribe((observer) => {
      console.log('Subscribe in RobotUI component', JSON.parse(observer._body));
      this.searchResults = JSON.parse(observer._body).products;
    });
  }
}
