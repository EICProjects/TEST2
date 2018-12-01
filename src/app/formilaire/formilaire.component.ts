import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formilaire',
  templateUrl: './formilaire.component.html',
  styleUrls: ['./formilaire.component.css']
})
export class FormilaireComponent implements OnInit {

  valid():void {
    
        
    var a =document.forms["formu"].elements['field1'].value;
    var b =document.forms["formu"].elements['field2'].value;
    var c =document.forms["formu"].elements['field3'].value;
   
    alert("nom : "+a +"\n prenom : "+b +"\n message : "+c );    
    
}
  constructor() { }

  ngOnInit() {
  }

}
