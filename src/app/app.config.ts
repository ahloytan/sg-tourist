import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideGoogleAnalytics} from '@hakimio/ngx-google-analytics';
import { routes } from './app.routes';
import { environment } from '../environments/environment';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideGoogleAnalytics(environment.gaMeasurementId)
  ]
};
