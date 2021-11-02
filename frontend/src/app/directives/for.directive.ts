import {
  Directive,
  OnInit,
  Input,
  ViewContainerRef,
  TemplateRef,
} from "@angular/core";

@Directive({
  selector: '[myFor]'
})

//implementa cilco de vida de inicialização
//sempre quando há alteração ele chama de novo a Diretiva

export class ForDirective implements OnInit{
  //pega o que vem depois da palavra "EM"
  @Input("myForEm") numbers!: number[]

  constructor(
    private container: ViewContainerRef, 
    private  template: TemplateRef<any>
  ) { 

  }

  ngOnInit(): void{
    //percorre o Array
    for(let number of this.numbers){
      this.container.createEmbeddedView(
        //pega o li e seu conteúdo (o número)
        this.template,{$implicit: number}
      );
    }
    
  }

}
