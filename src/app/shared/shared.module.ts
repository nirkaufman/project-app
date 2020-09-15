import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [CardComponent],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule {
}
