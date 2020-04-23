import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit{
  @Input('letter') letter;
  @Input('indexOfString') indexOfString;
  @ViewChild('span', { static: true }) span: ElementRef;

  ngOnInit() {
    if (this.letter === ' ') {
      this.letter = '\u00A0';
    }
    setTimeout(this.animate.bind(this), this.indexOfString * 500);
  }

  private animate(iteration = 100) {
    if (iteration < 0) {
      return;
    }
    Object.assign(this.span.nativeElement.style, {
      opacity: 1 - iteration / 100,
      transform: `scale(${iteration / 20 + 1}) translateZ(0px)`
    });
    setTimeout(this.animate.bind(this, iteration - 1), 10);
  }
}
