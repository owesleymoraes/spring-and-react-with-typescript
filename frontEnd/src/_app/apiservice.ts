import axios from "axios";
import jwt from "jsonwebtoken";

const httpClient = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

export class ApiService {
  readonly apiurl: string;

  constructor(apiurl: string) {
    this.apiurl = apiurl;
  }

  static registrarToken(token: string) {
    if (token) {
      httpClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
     
    }
  }

  post(url: string, object: {}) {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.post(requestUrl, object);
  }

  put(url: string, object: {}) {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.put(requestUrl, object);
  }

  delete(url: string) {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.delete(requestUrl);
  }

  get(url: string) {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.get(requestUrl);
  }
}
