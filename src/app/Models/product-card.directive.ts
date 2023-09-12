import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCardDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.addShadowEffect();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeShadowEffect();
  }

  private addShadowEffect() {
    // Apply the rounded border and box shadow
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '10px');
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '5px 5px 10px rgba(0, 0, 0, 0.2)');
  }

  private removeShadowEffect() {
    // Remove the rounded border and box shadow
    this.renderer.removeStyle(this.el.nativeElement, 'border-radius');
    this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
  }
}