import { Component, OnInit,OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
}
