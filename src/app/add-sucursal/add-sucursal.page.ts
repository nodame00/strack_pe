import { Component,  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-sucursal',
  templateUrl: './add-sucursal.page.html',
  styleUrls: ['./add-sucursal.page.scss'],
})
export class AddSucursalPage{

  /*ngOnInit() {
  }*/

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

  
  constructor(private formBuilder: FormBuilder,) {}

  formAddS = this.formBuilder.group({
      name:['', [Validators.required, Validators.maxLength(100)]],
      address:['', [Validators.required, Validators.maxLength(200)]],
      city:['', [Validators.required, Validators.maxLength(50)]],
      state:['', [Validators.required]]
  });

 addSucursal(){
   
   console.log(this.formAddS.value);
 }

}
