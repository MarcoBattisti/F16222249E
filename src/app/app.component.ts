import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { Angulartics2GoogleGlobalSiteTag } from 'angulartics2/gst';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Lisa Battisti Psicologa';

  env = environment;

  // import Angulartics2GoogleGlobalSiteTag in root component
  constructor(angulartics: Angulartics2GoogleGlobalSiteTag) {
    angulartics.startTracking();
  }
}
