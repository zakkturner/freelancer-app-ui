import { Component, OnInit, ElementRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import gsap, { Power2, TweenMax } from 'gsap';

@Component({
  selector: 'app-auth-card',
  templateUrl: './auth-card.component.html',
  styleUrls: ['./auth-card.component.css'],
})
export class AuthCardComponent implements OnInit {
  authForm!: FormGroup;
  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private fb: FormBuilder
  ) {}

  onInputFocus(labelElement: Element): void {
    gsap.to(labelElement, 0.3, { y: -35, ease: Power2.easeOut });
  }
  // onInputFocusOut(labelElement: Element): void {

  //   gsap.to(labelElement, 0.3, { y: 0, ease: Power2.easeOut });
  // }

  isRegisterRoute(): boolean {
    return this.router.url === '/register';
  }

  isLoginRoute(): boolean {
    return this.router.url === '/login';
  }

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    if (this.isRegisterRoute()) {
      this.authForm = this.fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
      });
    } else {
      this.authForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      });
    }
  }

  onSubmit() {
    if (this.authForm.valid && this.isRegisterRoute()) {
      console.log('Register: ', this.authForm.value);
      //Send obj to database
    } else if (this.authForm.valid && this.isLoginRoute()) {
      console.log('Login: ', this.authForm.value);
    } else {
      //throw error
      this.validateAllFormFields(this.authForm);
      console.log('Not valid');
    }
  }

  // Loop through object and if invalid throw error for the field
  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
