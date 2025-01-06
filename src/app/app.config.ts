import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  provideExperimentalCheckNoChangesForDebug,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideExperimentalCheckNoChangesForDebug({
      interval: 10_000,
      exhaustive: true,
      // useNgZoneOnStable: true,
    }),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
