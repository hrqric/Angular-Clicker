import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  private _contador = new BehaviorSubject<number>(0);
  contador$ = this._contador.asObservable();

  incrementar() {
    this._contador.next(this._contador.value + 1);
  }

  get valorAtual() {
    return this._contador.value;
  }
}