import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { tap } from 'rxjs';
@Component({
  selector: 'app-root',
  imports: [RouterLink, ButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('remote-nf-primeng-kc-remote');
  readonly #http = inject(HttpClient);

  makeHttpRequest() {
    this.#http.get('https://pokeapi.co/api/v2/pokemon/ditto').pipe(tap(console.log)).subscribe();
  }
}
