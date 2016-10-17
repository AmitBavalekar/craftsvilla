import { Routes, RouterModule } from '@angular/router';


import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
const appRoutes: Routes = [
  { path: 'productlist', component: ProductlistComponent },
  { path: '', redirectTo: '/productlist', pathMatch: 'full' },
  { path: 'productDetails/:id', pathMatch: 'full', component: ProductdetailsComponent }

];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);