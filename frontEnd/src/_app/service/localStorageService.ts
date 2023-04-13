import { AxiosResponse } from "axios";

export class LocalStorageService {
  static addItemLocalStorage(key: string, value: AxiosResponse) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getItemLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key)!);
  }
}
