import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // Emulated is the default and don't need to be specified,other options - None,Native
})
export class ServerElementComponent implements OnInit {
  @Input('serverElement') element: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit() {
  }

}
