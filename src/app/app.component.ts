import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-public-folder';

  constructor(private http: HttpClient) {}

  fromAssetsFolder: any;
  fromAssets2Folder: any;

  ngOnInit() {
    this.http.get('/assets/sample.json').subscribe(data => {
        this.fromAssetsFolder = data;
    });

    this.http.get('/assets2/sample.json').subscribe(data => {
      this.fromAssets2Folder = data;
    });
  }
}
