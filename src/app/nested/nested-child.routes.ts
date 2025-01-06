import { Routes } from '@angular/router';

export const nestedChildRoutes: Routes = [
  {
    path: 'nested-one',
    title: 'Nested -> Nested One',
    loadComponent: () => import('./nested-one/nested-one.component').then(m =>
      m.NestedOneComponent),
  },
];
