import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { MatRadioModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MainNavComponent } from './home/main-nav/main-nav.component';
import { PresentationSectionComponent } from './home/presentation-section/presentation-section.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PresentationSectionComponent,
    ProductsComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    ScrollDispatchModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
