import { Component } from '@angular/core';
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent{
    constructor(private apiService: ApiService) {

    }

  addTheme($event: MouseEvent, themName: string, postText: string) {
        $event.preventDefault();
        return this.apiService.createTheme(themName,postText).subscribe((data)=>{
          console.log(data);
        })
  }
}
