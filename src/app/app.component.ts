import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HireMe';
  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
