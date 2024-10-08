import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { errorHandlerInterceptor } from './core/interceptors/error.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    // providers for toasted
    provideAnimations(),
    provideToastr({ timeOut: 2500, preventDuplicates: true }),

    // providres for routers
    provideRouter(routes),
    provideClientHydration(),

    // providers for http client , modern fetch and interceptors
    provideHttpClient(withFetch(), withInterceptors([errorHandlerInterceptor])),
  ],
};

// with fecth ---> modern api to capture data
