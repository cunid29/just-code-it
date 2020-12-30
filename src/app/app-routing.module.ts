// import { OrdersComponent } from './orders/orders.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ProductsComponent } from './admin/products/products.component';
import { UsersComponent } from './admin/users/users.component';
import { CartComponent } from './cart/cart.component';
import { CustomerManagerComponent } from './dashboard/customer-manager/customer-manager.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductManagerComponent } from './dashboard/product-manager/product-manager.component';
import { UserManagerComponent } from './dashboard/user-manager/user-manager.component';
import { AccountComponent } from './web-view/account/account.component';
import { ForgotPassComponent } from './web-view/account/forgot-pass/forgot-pass.component';
import { LoginRegisterComponent } from './web-view/account/login-register/login-register.component';
import { BlogComponent } from './web-view/blog/blog.component';
import { ContactComponent } from './web-view/contact/contact.component';
import { FAQComponent } from './web-view/faq/faq.component';
import { HomeComponent } from './web-view/home/home.component';
import { Page404Component } from './web-view/page404/page404.component';
import { ProductAllComponent } from './web-view/product/product-all/product-all.component';
import { ProductByCategoryComponent } from './web-view/product/product-by-category/product-by-category.component';
import { ProductDetailsComponent } from './web-view/product/product-details/product-details.component';
import { ProductComponent } from './web-view/product/product.component';
import { WebViewComponent } from './web-view/web-view.component';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardHomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'products',
        component: ProductsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'orders',
        component: OrdersComponent,
        canActivate: [AuthGuard]
      },
    ]
  },
  {
    path: '',
    component: WebViewComponent,
    children: [
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'product',
        component: ProductComponent,
        children:[
          {
            path:'',
            component: ProductAllComponent
          },
          {
            path:'product-category',
            component: ProductByCategoryComponent
          },
          {
            path:'product-details',
            component: ProductDetailsComponent
          }
        ]
      },
      {
        path:'my-account',
        component:AccountComponent,
        children:[
          {
            path: '',
            component:LoginRegisterComponent,
            canActivate: [IsLoggedInGuard]
          },
          {
            path: 'forgot-password',
            component:ForgotPassComponent
          }
        ]
      },
      {
        path:'blog',
        component:BlogComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'FAQs',
        component:FAQComponent
      },
      {
        path:'cart',
        component:CartComponent
      },
      {
        path:'order',
        component:OrdersComponent
      },
      {
        path:'**',
        component:Page404Component
      }
    ]
  },
  {
    path:'cart',
    component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
