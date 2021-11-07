import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://192.168.1.68:80/strack-peSAP/';

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get(`${this.url}list.php`);
  }

  agregar(data){
    return this.http.post(`${this.url}agregar.php`, JSON.stringify(data));
  }

  pr(){
            var p=new Promise((resolve,reject)=>{

                this.http.get<any>(this.url + '/virtual_device').subscribe(data=>{

                    console.log("aqui");

                    //alert(JSON.stringify(data));

                    resolve(data);

                },error=>{

                    reject();

                });  

            })    

            return p;
  }
}
