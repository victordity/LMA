import { ProductsComponent } from './products/products.component';
import { AppComponent } from './app.component';

import {Routes, RouterModule} from '@angular/router'
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    { path: '', component: AppComponent },
    { path: 'products', component: ProductsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);