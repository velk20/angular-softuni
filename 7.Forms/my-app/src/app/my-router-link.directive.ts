import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {Router} from "@angular/router";

@Directive({
  selector: '[appMyRouterLink]'
})
export class MyRouterLinkDirective implements OnInit {
  @Input() appMyRouterLink: string = '';

  constructor(private elRef: ElementRef, private router: Router, private renderer2: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer2.listen(this.elRef.nativeElement, 'click', this.clickHandler.bind(this));
  }

  clickHandler(e: MouseEvent) {
    this.router.navigate([this.appMyRouterLink]);
  }
}
