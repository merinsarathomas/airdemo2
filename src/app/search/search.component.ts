import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  SearchForm!:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.SearchForm=new FormGroup({
     
      'to' : new FormControl("",[Validators.required]),
      'from' : new FormControl("",[Validators.required]),
      'departuredate' : new FormControl("",[Validators.required]),
      'arrivaldate' : new FormControl("",[Validators.required]),
        
  })
  }

}
