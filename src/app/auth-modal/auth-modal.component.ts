import { Component } from '@angular/core';
import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss',
})
export class AuthModalComponent {
  users: any[] = [];
  hidePassword = true;

  onClicked = new EventEmitter<string>();

  authForm: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    userEmail: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(150),
    ]),
    userPassword: new FormControl('', [Validators.maxLength(150)]),
  });

  constructor(private dialogRef: MatDialogRef<AuthModalComponent>) {
    this.onreInitForm();
  }

  onSubmit_authForm() {
    this.users.push(this.authForm.getRawValue());
  }
  onClose(): void {
    this.dialogRef.close();
  }
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  onreInitForm() {
    this.authForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      userEmail: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(150),
      ]),
      userPassword: new FormControl('', [Validators.maxLength(150)]),
    });
  }
}
