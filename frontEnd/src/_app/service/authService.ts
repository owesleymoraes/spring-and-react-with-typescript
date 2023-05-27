import jwt_decode from "jwt-decode";
export const USER_LOGGED = "user_logged";
import { LocalStorageService } from "./localStorageService";

export class AuthService {
  static isUserAuthenticated() {
    const userLoggedThisMoment = LocalStorageService.getItemLocalStorage(USER_LOGGED);
    const claims: { [key: string]: any } = userLoggedThisMoment && jwt_decode(userLoggedThisMoment);
    return userLoggedThisMoment && claims.userid;
  }

  static removeUserAuthenticated() {
    LocalStorageService.removeUserKeyLocalStorage(USER_LOGGED);
  }
}
