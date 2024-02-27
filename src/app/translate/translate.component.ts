import { Component,OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-translate',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,FormsModule,RouterLink],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.css'
})
export class TranslateComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
