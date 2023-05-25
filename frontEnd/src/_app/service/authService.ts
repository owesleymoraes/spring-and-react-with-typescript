import { LocalStorageService } from "./localStorageService";
import jwt_decode from "jwt-decode";

export const USER_LOGGED = "user_logged";
const claims: { [key: string]: any } = jwt_decode(
  LocalStorageService.getItemLocalStorage(USER_LOGGED)
);

export class AuthService {
  static isUserAuthenticated() {
    const userLoggedThisMoment = claims.userid;
    console.log(userLoggedThisMoment);

    return userLoggedThisMoment;
  }

  static removeUserAuthenticated() {
    LocalStorageService.removeUserKeyLocalStorage(USER_LOGGED);
  }
}
