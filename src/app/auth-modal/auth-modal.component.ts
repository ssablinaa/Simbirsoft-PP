import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthModalComponent {
  hidePassword = true;

  authForm: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    userEmail: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(150),
    ]),
    userPassword: new FormControl('', [
      Validators.required,
      Validators.maxLength(150),
    ]),
  });

  constructor(
    private dialogRef: MatDialogRef<AuthModalComponent>,
    private userService: UserService,
  ) {
    this.onreInitForm();
  }

  onClose(): void {
    this.dialogRef.close();
  }
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
  onSave() {
    if (this.authForm.valid) {
      this.userService.login();
      this.dialogRef.close();
    }
  }

  onreInitForm() {
    this.authForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      userEmail: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(150),
      ]),
      userPassword: new FormControl('', [
        Validators.required,
        Validators.maxLength(150),
      ]),
    });
  }
}
