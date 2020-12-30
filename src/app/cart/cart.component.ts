import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Array<Product>;
  productsReceived: Array<Product>;

  cartProducts: any;

  constructor(private router: Router, private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getProducts().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    //from local storage retrieve the cart item
    let data = localStorage.getItem('cart');
    //if this is not null convert it to JSON else initialize it as empty
    if (data !== null) {
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }
  }

  // we will be taking the products response returned from the database
  // and we will be adding the retrieved   
  handleSuccessfulResponse(response) {
    this.products = new Array<Product>();
    //get products returned by the api call
    this.productsReceived = response;
    for (const product of this.productsReceived) {

      const productwithRetrievedImageField = new Product();
      productwithRetrievedImageField.id = product.id;
      productwithRetrievedImageField.name = product.name;
      //populate retrieved image field so that product image can be displayed
      productwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + product.picByte;
      productwithRetrievedImageField.supplier = product.supplier;
      productwithRetrievedImageField.price = product.price;
      productwithRetrievedImageField.picByte = product.picByte;
      this.products.push(productwithRetrievedImageField);
    }
  }
  
  addToCart(productId) {
    //retrieve product from products array using the product id
    let product = this.products.find(product => {
      return product.id === +productId;
    });
    let cartData = [];
    //retrieve cart data from local storage
    let data = localStorage.getItem('cart');
    //prse it to json 
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    // add the selected product to cart data
    cartData.push(product);
    //updated the cartProducts
    this.updateCartData(cartData);
    //save the updated cart data in local storage
    localStorage.setItem('cart', JSON.stringify(cartData));
    //make the isAdded field of the product added to cart as true
    product.isAdded = true;
  }

  updateCartData(cartData) {
    this.cartProducts = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  emptyCart() {
    this.cartProducts = [];
    localStorage.clear();
  }

}
