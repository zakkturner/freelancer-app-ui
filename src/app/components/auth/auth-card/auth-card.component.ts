import { Component, OnInit, ElementRef } from '@angular/core';
import gsap, { Power2, TweenMax } from 'gsap';

@Component({
  selector: 'app-auth-card',
  templateUrl: './auth-card.component.html',
  styleUrls: ['./auth-card.component.css'],
})
export class AuthCardComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  onInputFocus(labelElement: Element): void {
    gsap.to(labelElement, 0.3, { y: -35, ease: Power2.easeOut });
  }
  onInputFocusOut(labelElement: Element): void {
    gsap.to(labelElement, 0.3, { y: 0, ease: Power2.easeOut });
  }
  ngOnInit(): void {}
}
