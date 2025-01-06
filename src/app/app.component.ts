import { ChangeDetectionStrategy, Component, inject, signal, WritableSignal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public readonly title = 'experimental-pages-functions-no-ssr';
  public readonly currentRoute: WritableSignal<string> = signal('/');
  public readonly router: Router = inject(Router);

  constructor() {
    this.router.events.subscribe((routerEvent) => {
      // this.currentRoute.set(routerEvent);
      this.currentRoute.set(this.router.lastSuccessfulNavigation?.finalUrl?.toString() ?? `url: ${this.router.url}`);
    });
  }
}
