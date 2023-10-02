import { TestBed } from '@angular/core/testing';

import { TranslateTitleStrategyService } from './translate-title-strategy.service';
import {TranslateModule, TranslateService} from "@ngx-translate/core";

describe('TranslateTitleStrategyService', () => {
  let service: TranslateTitleStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        TranslateService,
        TranslateTitleStrategyService
      ]
    });
    service = TestBed.inject(TranslateTitleStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
