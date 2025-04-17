import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LadoDireitoComponent } from './components/lado-direito/lado-direito.component';
import { LadoEsquerdoComponent } from './components/lado-esquerdo/lado-esquerdo.component';
import { ContadorService } from './services/contagem.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, LadoDireitoComponent, LadoEsquerdoComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  corLayout = '#f0f4f8';
  private som: HTMLAudioElement | null = null;
  private isBrowser: boolean;

  constructor(private contadorService: ContadorService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
      }

  ngOnInit() {
    if(this.isBrowser){
      this.som = new Audio('assets/som-clique.wav');
      this.som.load();
    }

    this.contadorService.contador$.subscribe(cliques => {
      const novaCor = this.getCorPorClique(cliques);
      if (novaCor !== this.corLayout){
        this.tocarSom();
        this.corLayout = novaCor;
      }
    })
  }



  getCorPorClique(cliques: number): string {
    if(cliques <= 10) return '#dfe6e9';
    if(cliques < 20) return '#dee6e7';
    if(cliques < 30) return '#e3e5e8';
    if(cliques < 40) return '#dae6e9';
    if(cliques < 50) return '#e5e5e5';
    if(cliques < 60) return '#e3e3e3';
    if(cliques < 70) return '#e0eeee';
    if(cliques < 80) return '#d6eae8';
    if(cliques < 90) return '#d1edee';
    if(cliques < 100) return '#dfeed2';
    if(cliques < 120) return '#84c299';
    if(cliques < 150) return '#76a973';
    if(cliques < 170) return '#7accb8';
    if(cliques < 180) return '#84c299';
    if(cliques < 190) return '#ccffc2';
    if(cliques < 200) return '#a3ccc9';
    if(cliques < 250) return '#3cbcfc';
    if(cliques < 300) return '#005791';

      return '#fab1a0'
  }


  tocarSom(){
    if(this.isBrowser && this.som){
      this.som.currentTime = 0;
      this.som.play().catch(e => console.warn('erro ao tocar som', e));
    }
  }
}


