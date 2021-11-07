import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';


import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  get name(){
    return this.formAddS.get('name');   
  }

  get address(){
    return this.formAddS.get('address');   
  }

  get city(){
    return this.formAddS.get('city');   
  }

  get state(){
    return this.formAddS.get('state');   
  }

  public errorMessages = {
    name: [
      {type: 'required', message: 'Campo obligatorio'},
      {type: 'maxlenght', message: 'No mayor a 100 caracteres'}
    ],
    address: [
      {type: 'required', message: 'Campo obligatorio'},
      {type: 'maxlenght', message: 'No mayor a 200 caracteres'}
    ],
    city: [
      {type: 'required', message: 'Campo obligatorio'},
      {type: 'maxlenght', message: 'No mayor a 50 caracteres'}
    ],
    state: [
      {type: 'required', message: 'Campo obligatorio'},
    ]
  };

  constructor(private formBuilder: FormBuilder, private api: ApiService, private geolocation: Geolocation) {}

    formAddS = this.formBuilder.group({
       name:['', [Validators.required, Validators.maxLength(100)]],
       address:['', [Validators.required, Validators.maxLength(200)]],
       city:['', [Validators.required, Validators.maxLength(50)]],
       state:['', [Validators.required]],
       latitude:[''],
       longitude:['']
    });
  
    addSucursal(){
      this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((resp) => {
        console.log(resp)
        //this.formAddS.setValue({latitude:resp.coords.latitude,longitude:resp.coords.longitude})
        this.formAddS.patchValue({latitude:resp.coords.latitude,longitude:resp.coords.longitude});
        console.log(this.formAddS.value);
        this.api.agregar(this.formAddS.value).subscribe(r=>{
          this.formAddS.reset();
          console.log(r)
        
        })
        
      




        }).catch((error) => {


            alert("Error getting location");

            console.log('Error getting location', error);

        });
      
      //console.log(this.formAddS.value);
    }
}
