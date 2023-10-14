import { Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownShowDirective {
  isShown = false;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {
  }

  //To close dropdown from any document click event [Viewchild not works here]
  @HostListener('document:click', ['$event.target'])
  toggleOpen(targetElement: HTMLElement) {
    if(this.el.nativeElement.nextSibling.contains(targetElement.nextSibling)) {
      this.isShown = !this.isShown;
    } else {
      this.isShown = false;
    }
    this.setOrRemoveClass();
  }

  //For native host event listener
  // @HostListener('click')
  // onClick() {
  //   this.isShown = !this.isShown;
  //   this.setOrRemoveClass();
  // }

  private setOrRemoveClass() {
    if(this.isShown) {
      this.renderer.addClass(this.el.nativeElement.nextSibling, 'show');
    } else {
      this.renderer.removeClass(this.el.nativeElement.nextSibling, 'show');
    }
  }
}
