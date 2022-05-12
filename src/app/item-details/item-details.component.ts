import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
  template: '<button (click)= "delete()">Delete</button'
})
export class ItemDetailsComponent implements OnInit {

  @Output() deleteRequest = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(){
    this.deleteRequest.emit('item name');
  }

}
