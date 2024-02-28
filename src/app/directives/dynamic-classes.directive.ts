import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDynamicClasses]'
})
export class DynamicClassesDirective implements OnInit {
  @Input() visibleClass: string;
  private observer: IntersectionObserver;
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, this.visibleClass)
        } else {
          this.renderer.removeClass(this.el.nativeElement, this.visibleClass)
        }
      })
    })
    this.observer.observe(this.el.nativeElement);
  }



}
