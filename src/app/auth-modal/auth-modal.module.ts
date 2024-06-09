import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModalComponent } from './auth-modal.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AuthModalComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatIconModule],
  exports: [AuthModalComponent],
})
export class AuthModalModule {}
