import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api.service";
import {Theme} from "../../types/theme";
import {ActivatedRoute, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css']
})
export class CurrentThemeComponent implements OnInit
{
  themeId: string = '';
  theme: Theme = {} as Theme;
  constructor(private apiService: ApiService,
              private route:ActivatedRoute) {
  }
    ngOnInit(): void {
      this.route.params.subscribe(params=>{
        this.themeId = params['themeId'];
      });
      console.log(this.themeId);
      this.apiService.getTheme(this.themeId).subscribe((data)=>{
        console.log(data);
        this.theme = data;
      });
    }

}
