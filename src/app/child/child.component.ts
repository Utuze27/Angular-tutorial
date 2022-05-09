import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  // Con l'url vado a riprendermi il file css separato in cui posso graficare la pagina web
  styleUrls: ['./child.component.css'],
  // Vado ad inserire un nuovo attributo della component per graficare un elemento del html template
  // styles: ['h2 {color: red}']
  encapsulation: ViewEncapsulation.None // in questo modo andiamo a ""togliere" l'incapsulamento e possiamo vedere i nostri stili in maniera globale
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

  // Proviamo il terzo metodo per far comunicare le components, con la viewchild

  message = 'message from child comp';
}
