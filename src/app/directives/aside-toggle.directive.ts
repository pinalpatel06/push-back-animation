import { Directive, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appAsideToggle]'
})
export class AsideToggleDirective implements OnChanges {

  @Input() type: string = 'child';

  constructor() {}

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
      $event.preventDefault();

      if(this.type === 'child') {
        document.querySelector('body')?.querySelector('app-root')?.querySelector('.master')?.classList.toggle('active');
        document.querySelector('body')?.querySelector('app-root')?.querySelector('.child')?.classList.toggle('active');
      }

      if(this.type === 'sub-child') {
        document.querySelector('body')?.querySelector('app-root')?.querySelector('.master')?.classList.toggle('sub-child');
        document.querySelector('body')?.querySelector('app-root')?.querySelector('.child')?.classList.toggle('sub-child');
        document.querySelector('body')?.querySelector('app-root')?.querySelector('.sub-child1')?.classList.toggle('active');
      }
  }

  ngOnChanges(changes: SimpleChanges) {
  }
}
