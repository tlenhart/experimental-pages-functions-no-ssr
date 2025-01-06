import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nested',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './nested.component.html',
  styleUrl: './nested.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NestedComponent {

}
