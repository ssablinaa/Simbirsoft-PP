import { NgModule } from '@angular/core';
import { AuthModalComponent } from './auth-modal.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthModalComponent],
  imports: [FormsModule, ReactiveFormsModule],
  exports: [AuthModalComponent],
})
export class AuthModalModule {}
