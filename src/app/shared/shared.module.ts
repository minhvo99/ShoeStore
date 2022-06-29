import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BaseComponent } from './components/base.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InnerMsgDirective } from './directives/inner-msg.directive';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const declarations: any[] = [
  BaseComponent,
  InnerMsgDirective,
  HeaderComponent,
  FooterComponent
];

const imports = [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule,];

@NgModule({
  imports: [
    ...imports
  ],
  declarations: [
    ...declarations,
  ],
  exports: [
    ...imports,
    ...declarations
  ]
})
export class SharedModule { }
