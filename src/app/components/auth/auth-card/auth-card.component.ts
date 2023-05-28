import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
}
