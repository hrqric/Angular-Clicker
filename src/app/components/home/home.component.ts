import { Component } from '@angular/core';
import { LadoDireitoComponent } from '../lado-direito/lado-direito.component';
import { LadoEsquerdoComponent } from '../lado-esquerdo/lado-esquerdo.component';
import { ContadorService } from '../../services/contagem.service';

@Component({
  selector: 'app-home',
  imports: [LadoDireitoComponent, LadoEsquerdoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  constructor(public contadorService: ContadorService) {}

  incrementar(){
    this.contadorService.incrementar();
  }
}
