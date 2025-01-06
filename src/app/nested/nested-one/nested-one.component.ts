import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nested-one',
  imports: [],
  templateUrl: './nested-one.component.html',
  styleUrl: './nested-one.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NestedOneComponent {

}
