import {Directive, ElementRef, OnDestroy, OnInit, Renderer2} from '@angular/core';

type MyVoid = () => void;

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit, OnDestroy {
  unsubFromEventsArray: MyVoid[] = [];

  constructor(private elRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit(): void {
    console.log(this.elRef.nativeElement);

    //! Bad practice
    // this.elRef.nativeElement.style.background = 'orange';

    //* Good practice
    this.renderer.setStyle(this.elRef.nativeElement, 'background', 'orange')

    const mouseClick = this.renderer.listen(this.elRef.nativeElement, 'click', this.mouseEnterClick.bind(this));

    const mouseDClick = this.renderer.listen(this.elRef.nativeElement, 'dblclick', this.mouseDoubleClick.bind(this))

    this.unsubFromEventsArray.push(mouseClick);
    this.unsubFromEventsArray.push(mouseDClick);
  }

  mouseDoubleClick(e: MouseEvent): void {
    // this.renderer.removeStyle(this.elRef.nativeElement, 'background');
    this.renderer.removeClass(this.elRef.nativeElement, 'highlight');
  }

  mouseEnterClick(e: MouseEvent): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'orange');
    this.renderer.addClass(this.elRef.nativeElement, 'highlight');
  }

  ngOnDestroy(): void {
    console.log('On Destroy')
    console.log(this.unsubFromEventsArray);

    //unsubscribing from event functions
    this.unsubFromEventsArray.forEach(eventFn => eventFn());

  }

}
