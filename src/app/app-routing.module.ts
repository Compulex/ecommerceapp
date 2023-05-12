import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrdersComponent } from './pages/orders/orders.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "orders", component: OrdersComponent},
  {path: "", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
