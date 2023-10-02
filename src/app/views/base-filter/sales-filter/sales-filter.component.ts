import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, UntypedFormBuilder} from "@angular/forms";
import {BehaviorSubject, map, Observable, take, tap} from "rxjs";
import {IOption} from "@coreui/angular-pro";
import {FilterPreformService} from "../filter-preform.service";

@Component({
    selector: 'app-sales-filter',
    templateUrl: './sales-filter.component.html',
    styleUrls: ['./sales-filter.component.scss'],
    providers: [FilterPreformService]
})
export class SalesFilterComponent {
    filterDataForm = new FormGroup({
        itmGrp: new FormControl<string[]>([]),
        itmProp: new FormControl<string[]>([]),
        itmPropVal: new FormControl<string[]>([]),
        itm: new FormControl<string[]>([]),
        dlgt: new FormControl<string[]>([]),
        atv: new FormControl<string[]>([]),
        invTyp: new FormControl<string[]>([]),
        costCenter: new FormControl<string[]>([]),
        cstGrp: new FormControl<string[]>([]),
        cstName: new FormControl<string[]>([]),
        prj: new FormControl<string[]>([]),
        curr: new FormControl<string[]>([]),
        sysCurr: new FormControl<string[]>([]),
        itmGrpTyp: new FormControl({}),
        itmPropTyp: new FormControl({}),
        itmTyp: new FormControl({}),
        currTyp: new FormControl({}),
        dlgtTyp: new FormControl({}),
        atvTyp: new FormControl({}),
        invTypTyp: new FormControl({}),
        costCenterTyp: new FormControl({}),
        cstTyp: new FormControl({}),
        prjTyp: new FormControl({}),
    });

    filterSubmitted = false;
    @Input() modalVisible = false;
    errMsg: string | undefined;
    visibleError = false;
    date = new Date();
    startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 11);
    endDate = new Date(this.date.getFullYear(), this.date.getMonth(), 17);
    options$: Observable<IOption[]>;
    readonly searchValue$ = new BehaviorSubject<string>('');
    readonly loading$ = new BehaviorSubject<boolean>(true);


    searchFn = (option: IOption, searchValue: string): boolean =>
        option.label?.toLowerCase().startsWith(searchValue.trimStart().toLowerCase()) ?? true;
    loading=false;

    handleModalVisible(event: boolean): boolean {
        this.modalVisible = event;
        return this.modalVisible;
    }

    constructor(
        private optionsService: FilterPreformService,
        private formBuilder: UntypedFormBuilder
    ) {
        this.options$ = this.optionsService
            .search(this.searchValue$)
            .pipe(
                tap(() => {
                    this.loading$.next(true);
                }),
                take(1),
                map(next => {
                    return next.map(option => {
                        const value = option.id.toString().trim();
                        const label = option.last_name;
                        const text = `${option.last_name} [${value}]`;
                        const disabled = option.id === '6';
                        return {value, label, text, disabled};
                    });
                }),
                tap(() => {
                    this.loading$.next(false);
                })
            );
    }

    onValidateFilterData() {
        this.filterSubmitted = true;
        // stop here if form is invalid
        return this.filterDataForm.status === "VALID";
    }

    toggleModalVisible(): void {
        this.errMsg = undefined
        this.visibleError = false
        this.modalVisible = false;

    }

    filterEvent() {
        if (this.onValidateFilterData()) {
            const dataFiltered = []

        }
    }

    setRadioValue(key: string, value: string) {
        this.filterDataForm.get(key)?.setValue(value);

    }

}
