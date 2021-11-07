import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'http://127.0.0.1:80/strack-peSAP/';

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get(`${this.url}list.php`);
  }
}
