import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'//seletor da diretiva
})
export class RedDirective {
  //Construtor recebe elemento nativo
  constructor(private el: ElementRef) {
    //adicionando cor ao elementp
    el.nativeElement.style.color ='#e35e6b'
  }

}
