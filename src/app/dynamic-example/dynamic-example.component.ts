import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-example',
  templateUrl: './dynamic-example.component.html',
  styleUrls: ['./dynamic-example.component.css']
})
export class DynamicExampleComponent implements OnInit  {

  public getJsonValue: any;
  public PostJsonValue: any;
  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.getMethod();
    this.postMethod();
  }

  public getMethod(){
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe((data) =>{
      console.log(data);
      this.getJsonValue = data;
    });
  }

  public postMethod(){
    const header = new HttpHeaders({
      contentType: 'application/json'
    })
    let body = {
      name: 'naved',
      class: 'bca',
      userId: 1,
    };
    this.http.post('https://jsonplaceholder.typicode.com/posts',body,{headers: header}).subscribe((data) =>{
      console.log(data);
      this.PostJsonValue = data;
    });
  }
}
