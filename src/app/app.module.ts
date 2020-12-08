import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './admin/users/users.component';
import { AdduserComponent } from './admin/users/adduser/adduser.component';
import { ViewuserComponent } from './admin/users/viewuser/viewuser.component';
import { HeaderComponent } from './web-view/header/header.component';
import { FooterComponent } from './web-view/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './web-view/home/home.component';
import { Page404Component } from './web-view/page404/page404.component';
import { PopularCategoryComponent } from './web-view/home/popular-category/popular-category.component';
import { PopularProductComponent } from './web-view/home/popular-product/popular-product.component';
import { RecentProductComponent } from './web-view/home/recent-product/recent-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagerComponent } from './dashboard/user-manager/user-manager.component';
import { WebViewComponent } from './web-view/web-view.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { CustomerManagerComponent } from './dashboard/customer-manager/customer-manager.component';
import { ProductManagerComponent } from './dashboard/product-manager/product-manager.component';
import { FilterBarComponent } from './web-view/product/filter-bar/filter-bar.component';
import { ProductDetailsComponent } from './web-view/product/product-details/product-details.component';
import { ProductAllComponent } from './web-view/product/product-all/product-all.component';
import { ProductByCategoryComponent } from './web-view/product/product-by-category/product-by-category.component';
import { ProductComponent } from './web-view/product/product.component';
import { LoginRegisterComponent } from './web-view/account/login-register/login-register.component';
import { ForgotPassComponent } from './web-view/account/forgot-pass/forgot-pass.component';
import { AccountComponent } from './web-view/account/account.component';
import { ContactComponent } from './web-view/contact/contact.component';
import { BlogComponent } from './web-view/blog/blog.component';
import { OrderComponent } from './web-view/order/order.component';
import { FAQsComponent } from './web-view/faqs/faqs.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    AdduserComponent,
    ViewuserComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Page404Component,
    PopularCategoryComponent,
    PopularProductComponent,
    RecentProductComponent,
    DashboardComponent,
    UserManagerComponent,
    WebViewComponent,
    DashboardHomeComponent,
    CustomerManagerComponent,
    ProductManagerComponent,
    FilterBarComponent,
    ProductDetailsComponent,
    ProductAllComponent,
    ProductByCategoryComponent,
    ProductComponent,
    LoginRegisterComponent,
    ForgotPassComponent,
    AccountComponent,
    ContactComponent,
    BlogComponent,
    OrderComponent,
    FAQsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
