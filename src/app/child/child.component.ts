import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  childMessage!: string;
  
  // Per trasferire dati dal figlio al padre avrò bisogno del decorator @Output
  // Per creare eventi, importo il EventEmitter e lo inizializzo nella classe component figlia
  @Output()
  messageEvent = new EventEmitter<string>();
  ngOnInit(): void {
  }
  // Creo un metodo per mandare un messaggio dal child
  sendMessage()
  {
   this.messageEvent.emit('Hello from child'); 
  }
}
