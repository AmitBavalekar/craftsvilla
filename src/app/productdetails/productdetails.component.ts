import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../shared/index';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
	// We can acheive this by passing object directly but I havent got that much of time
	// to analysis so passed one by one from component
	productDetails : any;
	imgUrl : string;
	discountPercentage : string;
	regularPrice : string;
	productName : string;
	discountedPrice : string;

	constructor(private _productlistService: ProductlistService, private route: ActivatedRoute) {
	}

  	ngOnInit() {
	  let id = this.route.snapshot.params['id'];
	  this._productlistService.config.subscribe((observer) => {
	    this.productDetails = JSON.parse(observer._body).products[id];
	   	this.imgUrl = this.productDetails.imgUrl;
	    this.discountPercentage = this.productDetails.discountPercentage;
	    this.regularPrice = this.productDetails.regularPrice;
	    this.productName = this.productDetails.productName;
	    this.discountedPrice = this.productDetails.discountedPrice;
	  });
  	}
}
