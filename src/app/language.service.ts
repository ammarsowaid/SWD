import {Injectable} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Observable} from "rxjs";
import {LocalService} from "./local.service";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public static LANG_DATA = {
    ar: {name: 'ar', id: "1"},
    en: {name: 'en', id: "2"}
  }

  constructor(private _translate: TranslateService,
              private local: LocalService) {
    if (this.local.getData(this.local.flagName.langName)
      && local.getData(local.flagName.langName) !== "") {

      _translate.setDefaultLang(local.getData(local.flagName.langName));
    } else
      _translate.setDefaultLang(LanguageService.LANG_DATA.en.name);


  }


  get translate(): TranslateService {
    return this._translate;
  }

  switchLanguage(language: string) {
    this.local.saveData(this.local.flagName.langName, language);
    this.local.saveData(this.local.flagName.langNo, language === LanguageService.LANG_DATA.en.name
      ? LanguageService.LANG_DATA.en.id : LanguageService.LANG_DATA.ar.id);

    this._translate.use(language);
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language === 'ar' ? 'ar' : 'en');

  }

  translateText(key: string): Observable<string> {
    return this._translate.get(key);
  }
}
