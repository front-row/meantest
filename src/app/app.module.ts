import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { EmployeeModule } from './employee/employee.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SignInComponent } from './components/signin/signin.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
	SignInComponent,
    MainMenuComponent,
    EmployeeDetailComponent,
    ProductListingComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
	ReactiveFormsModule,
    HttpClientModule,
    BooksModule,
    EmployeeModule,
	AppRoutingModule,
	BrowserModule,
	BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
