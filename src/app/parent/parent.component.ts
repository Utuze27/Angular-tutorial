import { Component, OnInit, Input, Output, EventEmitter,ViewChild,AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Metodo per ricevere il messaggio dal child
  receiveMessage(msg: any)
  {
    alert(msg);
  }

  //usiamo la viewchild come terzo metodo per far communicare le due components
  @ViewChild(ChildComponent)child: any; // Uso il decorator della view e vado ad inizilizzare un "oggetto" di tipo Child Component

  ngAfterViewInit()
  {
    alert(this.child.message);
  }
}
