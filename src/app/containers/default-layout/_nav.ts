import {INavData} from "@coreui/angular-pro";


import {TranslateService} from '@ngx-translate/core';
import {INavAttributes} from "@coreui/angular-pro/lib/breadcrumb/breadcrumb-item/breadcrumb-item";

export function getNavItems(translate: TranslateService): INavData[] {


  return [
    {
      name: translate.instant('dashboard'),
      url: '/dashboard',
      iconComponent: {name: 'cil-home'},
      attributes: {"class":" py-2"},
    },
    {
      name: translate.instant('rptSales'),
      url: '/rptSales',
      iconComponent: {name: 'cil-user'},
      attributes: {"class":"mt-1 py-2"},
      children: [
        {
          name: translate.instant('byCst'),
          url: '/rptSales/byCst',
          iconComponent: {name: 'cil-user-follow'},
          attributes: {"class":"ms-2 mt-1"}
        },
        {
          name: translate.instant('approvalLvl'),
          url: '/mngSys/approvalLvl',
          iconComponent: {name: 'cil-user-follow'},
          attributes: {"class":"ms-2 mt-1"}
        },
        {
          name: translate.instant('linkPrj'),
          url: '/mngSys/linkPrj',
          iconComponent: {name: 'cil-user-follow'},
          attributes: {"class":"ms-2 mt-1"}
        },


      ]

    },

    /*
    {
      name: translate.instant('configSys'),
      url: '/configSys',
      iconComponent: {name: 'cil-user-follow'},
      attributes: {"class":"py-2 mt-1"},
      children: [
        {
          name: translate.instant('cnfCst'),
          url: '/configSys/cnfCst',
          iconComponent: {name: 'cil-user-follow'},
          attributes: {"class":"ms-2 mt-1"}
        },
        {
          name: translate.instant('cnfSrv'),
          url: '/configSys/cnfSrv',
          iconComponent: {name: 'cil-user-follow'},
          attributes: {"class":"ms-2 mt-1"}
        },
        {
          name: translate.instant('cnfLimit'),
          url: '/configSys/cnfLimit',
          iconComponent: {name: 'cil-user-follow'},
          attributes: {"class":"ms-2 mt-1"}
        },
        {
          name: translate.instant('cnfFees'),
          url: '/configSys/cnfFees',
          iconComponent: {name: 'cil-user-follow'},
          attributes: {"class":"ms-2 mt-1"}
        },

        {
          name: translate.instant('cnfMsg'),
          url: '/configSys/cnfMsg',
          iconComponent: {name: 'cil-user-follow'},
          attributes: {"class":"ms-2 mt-1"}
        },
        {
          name: translate.instant('cnfMarketing'),
          url: '/configSys/cnfMarketing',
          iconComponent: {name: 'cil-user-follow'},
          attributes: {"class":"ms-2 mt-1"},
          children: [
            {
              name: translate.instant('cnfNews'),
              url: '/configSys/cnfMarketing/cnfNews',
              iconComponent: {name: 'cil-user-follow'},
              attributes: {"class":"ms-4 mt-1"}
            }
          ]

        },
        {
          name: translate.instant('cnfPayments'),
          url: '/configSys/cnfPayments',
          iconComponent: {name: 'cil-user-follow'},
          attributes: {"class":"ms-2 mt-1"}
        },
        {
          name: translate.instant('cnfBlackList'),
          url: '/configSys/cnfBlackList',
          iconComponent: {name: 'cil-user-follow'},
          attributes: {"class":"ms-2 mt-1"}
        },
        {
          name: translate.instant('cnfOthers'),
          url: '/configSys/cnfOthers',
          iconComponent: {name: 'cil-user-follow'},
          attributes: {"class":"ms-2 mt-1"}
        },

      ]

    },

    {
      name: translate.instant('customers'),
      url: '/customer',
      iconComponent: {name: 'cil-user'},
      attributes: {"class":"py-2 mt-1"},
      children: [
        {
          name: translate.instant('openCustomerAccount'),
          url: '/customer/opnCustAcc',
          iconComponent: {name: 'cil-user-follow'},
          attributes: {"class":"ms-2 mt-1"},
        },
        {
          name: translate.instant('customerData'),
          url: '/customer/custData',
          iconComponent: {name: 'cil-user-follow'},
          attributes: {"class":"ms-2 mt-1"},

        },

        {
          name: translate.instant('cstOperation'),
          url: '/customer/cstOpr',
          iconComponent: {name: 'cil-user-follow'},
          attributes: {"class":"ms-2 mt-1"},

        },

      ]

    },*/

  ];
}
