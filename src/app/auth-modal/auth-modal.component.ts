import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthModalComponent implements OnInit {
  hidePassword = true;
  authForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AuthModalComponent>,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      userName: ['', Validators.required],
      userEmail: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(150)],
      ],
      userPassword: ['', [Validators.required, Validators.maxLength(150)]],
    });
  }

  public onClose() {
    this.dialogRef.close();
  }

  public onSave() {
    if (this.authForm.valid) {
      this.userService.login();
      this.dialogRef.close();
    }
  }
}
