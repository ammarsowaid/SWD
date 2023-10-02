import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';

import {IconSetService} from '@coreui/icons-angular';
import {Title} from '@angular/platform-browser';
import {LanguageService} from "./language.service";
import {LocalService} from "./local.service";
import {iconSubset} from "./icons/icon-subset";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  title = 'SwRprMngSys';

  constructor(
    private router: Router,
    titleService: Title,
    private langService: LanguageService,
    private local: LocalService,
    private iconSetService: IconSetService
  ) {
    console.log("app: " + this.local.getData(this.local.flagName.langName));
    if (this.local.getData(this.local.flagName.langName) && this.local.getData(this.local.flagName.langName) !== "")
      this.langService.switchLanguage(this.local.getData(this.local.flagName.langName));
    else
      this.langService.switchLanguage(this.langService.translate.defaultLang);

    titleService.setTitle(this.title);

    iconSetService.icons = {...iconSubset};
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }

}
