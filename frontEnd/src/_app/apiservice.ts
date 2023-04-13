import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:8080",
});

export class ApiService {
  readonly apiurl: string;

  constructor(apiurl: string) {
    this.apiurl = apiurl;
  }

  post(url: string, object: {}) {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.post(requestUrl, object);
  }

  put(url: string, object: {}) {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.post(requestUrl, object);
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
