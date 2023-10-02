import {Injectable} from '@angular/core';
import {ActivatedRoute, RouterStateSnapshot, TitleStrategy} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class TranslateTitleStrategyService extends TitleStrategy {

  constructor(private translateService: TranslateService,
              private readonly title: Title) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    if (title) {
      this.translateService.get(title).subscribe((translatedTitle) => {

        this.title.setTitle(translatedTitle);
      })
    } else {
      this.title.setTitle('SwRprMngSys');
    }
  }
}
