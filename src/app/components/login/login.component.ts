import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginStatus: boolean = false;
  @Output() status = new EventEmitter<boolean>();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  isFormValid(): boolean {
    return this.loginForm.valid;
  }

  onLogin() {
    this.loginStatus = true;
    this.status.emit(this.loginStatus);
  }


}
