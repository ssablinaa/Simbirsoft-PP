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

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss',
})
export class AuthModalComponent {
  users: any[] = [];

  onClicked = new EventEmitter<string>();

  authForm: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPhone: new FormControl('', Validators.pattern('[0-9]{11}')),
  });

  // formFields = [
  //   {
  //     label: 'Имя',
  //     id: 'id_userName',
  //     name: 'userName',
  //     type: 'text',
  //     errorMessage: 'Неверно указано имя!',
  //   },
  //   {
  //     label: 'Email',
  //     id: 'id_userEmail',
  //     name: 'userEmail',
  //     type: 'email',
  //     errorMessage: 'Неверно указан email!',
  //   },
  //   {
  //     label: 'Телефон',
  //     id: 'id_userPhone',
  //     name: 'userPhone',
  //     type: 'number',
  //     errorMessage: 'Неверно указан номер телефона!',
  //   },
  // ];

  constructor() {
    this.onreInitForm();
  }

  click(value1: string, value2: string, value3: string) {
    this.onClicked.emit('Вы ввели ' + value1 + value2 + value3);
  }

  onSubmit_authForm() {
    this.users.push(this.authForm.getRawValue());
  }

  onreInitForm() {
    this.authForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPhone: new FormControl('', Validators.pattern('[0-9]{11}')),
    });
  }
}
