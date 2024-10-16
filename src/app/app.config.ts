import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import ROUTES_ROOT from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ErrorApiInterceptor } from './interceptors/error-api.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(ROUTES_ROOT), // Resuelve las rutas
    provideAnimationsAsync(),   // Resuelve dependencias de Angular Material
    provideHttpClient(withInterceptors([ErrorApiInterceptor])),        // Resuelve dependencias para peticiones HTTP
  ],
};
