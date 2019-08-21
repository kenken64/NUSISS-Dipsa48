import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSizeComponent implements OnInit {
  @Input() message: string;
  @Output() onFontSize = new EventEmitter<number>();
  fontSize: string = '2em';

  constructor() { }

  ngOnInit() {
  }

  fontSizeChanged($event) {
    const fontSize = parseInt($event.target.value);
    this.fontSize = `${fontSize}em`;
    console.log(fontSize);
    this.onFontSize.next(fontSize);
  }

}
