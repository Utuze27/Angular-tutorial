import { Pipe, PipeTransform } from '@angular/core'; // in automatico importa l'interfaccia pipe

@Pipe({ // decorator del pipe con all'interno il suo nome
  name: 'greetingsPipe'
})

export class GreetingsPipePipe implements PipeTransform { //la "classe" con l'interfaccia implementata

  //metodo di default per la trasformazione dei dati
  //gli chiediamo un valore in stringa con input e anche come output finale
  transform(value: string, ...args: unknown[]): string {
    return "Hello $(value)"; 
    //ora possiamo tornare sul template del root e richiamare la pipe appena fatta
  }

}
