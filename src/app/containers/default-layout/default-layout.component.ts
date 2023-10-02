import {Component} from '@angular/core';

import {getNavItems} from './_nav';

import {cilZoom} from "@coreui/icons";

import {LanguageService} from "../../language.service";
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {
  icons = {cilZoom}


  public navItems ;


  vars={'cui-sidebar-nav-group-items-padding-x': 2};
  constructor( translateService:TranslateService,
              private languageService: LanguageService) {

    this.navItems = getNavItems(languageService.translate);


  }


  ngOnInit() {
    this.languageService.translate.onLangChange.subscribe(() => {
      // Update your component's properties or perform any necessary actions
      this.navItems = getNavItems(this.languageService.translate);
    });
  }


}
