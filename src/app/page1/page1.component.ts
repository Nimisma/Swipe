import { Component, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})




export class Page1Component {

  ts = new Point(-1, -1);
  te = new Point(-1, -1);


  constructor(private router: Router) {}

  @HostListener('window:touchstart', ['$event'])
  handleDown(event: TouchEvent) {
    this.ts.x = event.touches[0].clientX;
    this.ts.y = event.touches[0].clientY;
  }

  @HostListener('document:touchend', ['$event'])
  handleUp(event: TouchEvent) {
    this.te.x = event.changedTouches[0].clientX;
    this.te.y = event.changedTouches[0].clientY;

    if (Math.abs(this.ts.y-this.te.y)>Math.abs(this.ts.x-this.te.x)) return;  // use up and down
    if(this.ts.x > this.te.x+5){
      this.slide_left();
   }else if(this.ts.x < this.te.x-5){
      this.slide_right();
   }
    
  }

  @HostListener('document:touchmove', ['$event'])
  handleMove(event: TouchEvent) {

  }

  @HostListener('document:touchcancel', ['$event'])
  handleCancel(event: TouchEvent) {
  }

  slide_right() {
    this.router.navigateByUrl('3');
  }
  
  slide_left() {
    this.router.navigateByUrl('2');
  }

}


class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
  }
}