import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCardDirective } from './Models/product-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    ProductComponent,
    ProductCardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
