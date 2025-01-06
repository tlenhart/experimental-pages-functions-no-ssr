import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  public getStatus: WritableSignal<'ready' | 'sending' | 'failed' | 'success'> = signal('ready');
  private readonly http: HttpClient = inject(HttpClient);

  public callWorkerFnGet(): void {
    this.getStatus.set('sending');

    // TODO: HTTP calls with service worker.
    this.http.get('/api/helloworld')
      .subscribe({
        next: (response: unknown) => {
          console.log('helloworld response: ', response);
          this.getStatus.set('success');
        },
        error: (err: unknown) => {
          console.error('Error calling helloworld', err);
          this.getStatus.set('failed');
        },
      });
  }
}
