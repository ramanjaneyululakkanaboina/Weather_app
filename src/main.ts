import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [HttpClient] // Add HttpClientModule here
}).catch((err) => console.error(err));
