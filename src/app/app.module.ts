import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {FormComponent} from './body/form/form.component';
import {FormsModule} from "@angular/forms";
import {HomeComponent} from './body/home/home.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'body/home', component: HomeComponent},
      {path: 'body/form', component: FormComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
