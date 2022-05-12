import { Component, OnInit,OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // Attribute Binding: da usare quando non puoi utilizzare la prop. binding nel seguente modo:
  template:'<p [attr.attribute-you-are-targeting] ="expression"></p>'
  // Event binding = leggo una risposta ad un'azione dell'utente
  
})

// implemento la classe con il l'hook per inizializzare
export class AppComponent implements OnInit, OnDestroy {
  // fatto ciò devo creare un metodo che vada ad utilizzarmi l'inizializzazione
  intervalSub: any; //creo un intervallo di valori di tipo any
  ngOnInit() { //richiamo il Init
      this.intervalSub = setInterval(() => {
        console.log('Hello from ngOnInit');
      }, 1000);
       // setto l'intervallo in modo da farmi stampare una frase   
  }
  ngOnDestroy() { // Se non creo il metodo Destroy, continuerò a stampare l'intervallo anche quando questo non servirà più
    if(this.intervalSub){
      clearInterval(this.intervalSub);
    }
      
  }
  title = "Hello World";

  getMin(a: number,b: number)
  {
    if(a < b)
      return a;
    else
      return b;
  }

  // Template statement: utile quando voglio aggiornare le proprietà di una classe
  showText = false; //creo un boolean

  toggleText(event: any): void { //un metodo che al momento non ritorna nulla
    this.showText = this.showText; // useremo il metodo per vedere il valore in ogni nostra call
    console.log(event);
  }

  // Pipes
  // funzioni che accettano qualsiasi tipo di dato in input e tornato dei dati formattati

  todayDate = new Date();

  // Property Binding
  itemImageUrl = "../assets/avatar_icon.png";

  isUnchanged = true;

  // Attribute Binding

}
