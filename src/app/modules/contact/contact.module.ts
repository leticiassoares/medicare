import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';

import { ContactComponent } from './container/contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    ContactRoutingModule,
    CommonModule,
    RadioButtonModule,
    ButtonModule,
    InputTextareaModule,
    InputTextModule,
  ],
})
export class ContactModule {}
