import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../../services/contagem.service';

@Component({
  selector: 'app-lado-direito',
  templateUrl: './lado-direito.component.html',
  styleUrls: ['./lado-direito.component.scss']
})
export class LadoDireitoComponent implements OnInit {
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