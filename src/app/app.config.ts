import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import ROUTES_ROOT from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(ROUTES_ROOT), // Resuelve las rutas
    provideAnimationsAsync(),   // Resuelve dependencias de Angular Material
    provideHttpClient(),        // Resuelve dependencias para peticiones HTTP
  ],
};
