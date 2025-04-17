import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../../services/contagem.service';

@Component({
  selector: 'app-lado-esquerdo',
  templateUrl: './lado-esquerdo.component.html',
  styleUrls: ['./lado-esquerdo.component.scss']
})
export class LadoEsquerdoComponent implements OnInit {
  cor = 'white';

  constructor(private contadorService: ContadorService) {}

  ngOnInit(): void {
    this.contadorService.contador$.subscribe(valor => {
      this.cor = this.getCor(valor);
    });
  }

  getCor(valor: number): string {
    if (valor % 5 === 0) return '#ffd700'; // dourado
    if (valor % 2 === 0) return '#add8e6'; // azul claro
    return '#ffb6c1'; // rosa claro
  }
}