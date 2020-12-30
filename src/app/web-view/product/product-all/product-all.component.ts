import { identifierModuleUrl, ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/Product';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.component.html',
  styleUrls: ['./product-all.component.css']
})
export class ProductAllComponent implements OnInit {

  products: Array<Product>;
  productsReceived: Array<Product>;

  cartProducts: any = [
    // {id: 4, name: "jeans", retrievedImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD…i6YCKx4LdDAAwBFvJAIDjDYD2UrAwIA8mZDQAEBDZf9Qj/9k=", supplier: "gucci", price: "1000"}
  ];

  cartTotal: number;

  customerName: string ;
  email: string;
  phone: string;
  address: string;


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
    };
    
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
      productwithRetrievedImageField.quantity = product.quantity;
      this.products.push(productwithRetrievedImageField);
    }
  }
  
  addToCart(productId) {
    //retrieve product from products array using the product id
    let product = this.products.find(product => {
      return product.id === +productId;
    });
    let cartData = [];
    this.cartTotal = 0;
    //retrieve cart data from local storage
    let data = localStorage.getItem('cart');
    cartData = !!data ? JSON.parse(data) : [];
    // add the selected product to cart data
    
    this.addProductToCart(cartData, product);
    cartData.forEach(item => {
      this.cartTotal += (item.quantity * item.price)
    })
    console.log(product);
    //updated the cartProducts
    this.updateCartData(cartData);
    //save the updated cart data in local storage
    localStorage.setItem('cart', JSON.stringify(cartData));
    //make the isAdded field of the product added to cart as true
    product.isAdded = true;
    
    
  }

  addProductToCart(cart: any[], product: Product) {
      let existedItem = cart.find(item => item.id === product.id);
      if (existedItem) {
        existedItem.quantity = existedItem.quantity ? ++existedItem.quantity : 1;
      } else {
        product.quantity = 1;
        cart.push(product);
      }
  }

  createOrder() {
    const data = localStorage.getItem('cart');
    let cartData : any[] = JSON.parse(data);
    let products = [];
    cartData.forEach(item => {
      products.push({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        supplier: item.supplier
      })
    });
    this.httpClientService.createOrder({
      customerName: this.customerName,
      email: this.email,
      phone: this.phone,
      address: this.address,
      items: JSON.stringify(products)
    }).subscribe(
      res => alert("Created order successfully!"),
      err => alert("Error to create order")
    )
  }

  updateCartData(cartData) {
    this.cartProducts = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  gotoOrders() {
    this.router.navigate(['admin/orders'])
  }

  emptyCart() {
    this.cartProducts = [];
    localStorage.clear();
    this.cartTotal = 0
  }

  deleteCart(index) {
    if (index) {
      console.log(index);
      this.cartProducts.splice(index);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }

}
