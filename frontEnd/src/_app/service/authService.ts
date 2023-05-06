import { LocalStorageService } from "./localStorageService";

export const USER_LOGGED = "user_logged";

export class AuthService {
  static isUserAuthenticated() {
    const userLoggedThisMoment =
      LocalStorageService.getItemLocalStorage(USER_LOGGED);
    return userLoggedThisMoment && userLoggedThisMoment.id;
  }

  static removeUserAuthenticated() {
    LocalStorageService.removeUserKeyLocalStorage(USER_LOGGED);
  }
}
