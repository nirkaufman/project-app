import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [CardComponent, NavbarComponent, SpinnerComponent],
  exports: [
    CardComponent,
    NavbarComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class SharedModule {
}
