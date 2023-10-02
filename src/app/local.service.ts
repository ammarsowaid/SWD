import {Injectable} from '@angular/core';
import CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class LocalService {
  key = "123";
  flagName = {
    uid: "uid",
    langNo: "langNo",
    langName: "langName",
    webVer: "webVer",
    devName: 'devName',
    osUser: 'osUser',
    accUnit: 'accUnit',
    userId:'userId',
    ipAddress:'ipAddress',
    userName:'userName',
    token:'token',
  };
  constructor() {
  }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, this.encrypt(value));

  }

  public getData(key: string) {
    let data = localStorage.getItem(key) || "";

    return this.decrypt(data);

  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
  public clearLoginData() {
  }

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }
}
