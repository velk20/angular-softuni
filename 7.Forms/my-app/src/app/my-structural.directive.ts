import {Directive, Input, OnChanges, Optional, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMyStructural]',
  exportAs: 'appMyStructural'
})
export class MyStructuralDirective implements OnChanges {
  @Input() appMyStructural: boolean = false;
  @Input() myTmpRef: TemplateRef<any> | undefined;

  constructor(
    @Optional() private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) {
    console.log(templateRef);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges', this.appMyStructural)
    const template = this.templateRef || this.myTmpRef;
    if (this.appMyStructural) {
      this.viewContainerRef.createEmbeddedView(template, {
        myCustomValue: 'This is my message!',
        $implicit: 'Default'
      })
    } else {
      this.viewContainerRef.clear()
    }
  }
}
