import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {UntypedFormBuilder} from '@angular/forms';

import {HeaderComponent, IBreadcrumbItem} from "@coreui/angular-pro";
import {LocalService} from "../../../local.service";
import {cifSa, cifUs, cilAccountLogout, cilLocationPin, cilUser} from "@coreui/icons";
import {ActivatedRouteSnapshot, NavigationEnd, Router} from "@angular/router";
import {LanguageService} from "../../../language.service";
import { Subscription} from "rxjs";
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss'],

})

export class DefaultHeaderComponent extends HeaderComponent implements OnInit, OnDestroy {
  myDate = new Date();
  @Input() sidebarId: string = "sidebar";
  icons = {cilUser, cilLocationPin, cilAccountLogout, cifUs, cifSa};
  btnRadioLang = this.formBuilder.group({
    selectedLang: this.formBuilder.control({value: 'en'})
  });

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)
  username: any;
  branch: any;
  breadcrumbs!: IBreadcrumbItem[];
  routerSubscription!: Subscription;

  constructor(public local: LocalService,
              private router: Router,
              private formBuilder: UntypedFormBuilder,
              public langServices: LanguageService,
  ) {
    super();
    this.branch = this.local.getData('brnName');
    this.username = this.local.getData('userName');
    console.log(this.langServices.translate.currentLang)
    if (this.langServices.translate.currentLang && this.langServices.translate.currentLang !== "")
      this.btnRadioLang.setValue({selectedLang: this.langServices.translate.currentLang})
    else
      this.btnRadioLang.setValue({selectedLang: LanguageService.LANG_DATA.en.name})

   this.reGenerateRoutesTitle();
  }

  setRadioValue(value: string): void {
    this.switchLanguage(value)
    this.btnRadioLang.setValue({selectedLang: value});

  }

  switchLanguage(langName: string) {
    this.langServices.switchLanguage(langName);

  }

  logout() {
    this.local.clearLoginData()
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.langServices.translate.onLangChange.subscribe(() => {
      this.reGenerateRoutesTitle();
      console.log(this.langServices.translate.currentLang)
    });
  }


  reGenerateRoutesTitle(): void {


    this.routerSubscription = this.router.events.subscribe(
      (event)=> {

        if (event instanceof NavigationEnd){

          this.breadcrumbs = this.getBreadcrumbs(
            this.router.routerState.snapshot.root, true);
        }

      }
  )
  }

  ngOnDestroy(): void {

    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  getBreadcrumbs(
    route: ActivatedRouteSnapshot,
    isRoot: boolean,
    url = '',
    breadcrumbs: IBreadcrumbItem[] = []): IBreadcrumbItem[] {
    if (route) {
      const children: ActivatedRouteSnapshot[] = route.children;

      if (isRoot && children[0].data['title']) {
        const breadcrumbLabel = children[0].data['title'];
        breadcrumbs.push({label: breadcrumbLabel, url: url});
      }


      for (const child of children) {
        if (!child.routeConfig || !child.routeConfig.path) {
          this.getBreadcrumbs(child, false, url, breadcrumbs);
          continue;
        }

        const routeUrl: string = child.routeConfig.path;
        url += `/${routeUrl}`;

        if (child.data && child.data['title']) {
          const breadcrumbLabel = child.data['title']
          breadcrumbs.push({label: breadcrumbLabel, url});

          console.log(url);
        }


        this.getBreadcrumbs(child, false, url, breadcrumbs);

        url = url.replace(`/${routeUrl}`, '');
      }
    }

    return breadcrumbs;
  }
}
