import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    title: 'Dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m =>
      m.DashboardComponent),
  },
  {
    path: 'dashed-path-experiment',
    title: 'Dashed path experiment',
    loadComponent: () => import('./dashed-path-experiment/dashed-path-experiment.component').then(m =>
      m.DashedPathExperimentComponent),
  },
  {
    path: 'nested',
    title: 'Nested',
    loadComponent: () => import('./nested/nested.component').then(m =>
      m.NestedComponent),
    loadChildren: () => import('./nested/nested-child.routes').then(m =>
      m.nestedChildRoutes),
  },
];
