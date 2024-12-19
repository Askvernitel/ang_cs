import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate:TranslateService){
      translate.addLangs(['en', 'de', 'fr']);
      translate.setDefaultLang('en');
  }

  switchLanguage(lang:string){
    this.translate.use(lang);
  }
}
