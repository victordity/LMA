import { ProductsComponent } from './products/products.component';
import { AppComponent } from './app.component';
import { PresentationSectionComponent } from './home/presentation-section/presentation-section.component';

import {Routes, RouterModule} from '@angular/router'
import { ModuleWithProviders } from '@angular/core';


const APP_ROUTES: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: '', component: PresentationSectionComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);