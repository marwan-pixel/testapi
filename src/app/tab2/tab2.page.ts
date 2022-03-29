import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  public selectionOption: string;
  npm: number;
  name: string;
  class: string;
  major: string;
  studyprogram: string;
  public postData: any;

  constructor(private http: HttpClient, private toast: ToastController) {}

  submit() {

    if(this.npm != null && this.name != null && this.major != null && this.studyprogram != null 
      && this.class != null) {

      this.postdata();
      console.log(this.npm,this.name,this.major,this.studyprogram,this.class);
      this.npm = null;
      this.name = "";
      this.class = "";
      this.major = null;
      this.studyprogram = null;

      alert('Create Data Successfully');

    }else{
      alert('There are some null datas!')
    }
  }

  postdata(){
    let data: Observable<any>;
    data = this.http.get("http://localhost/CodeIgniter_API-master/index.php/api/postdata/" 
    + this.npm + '/' + this.name + '/' + this.major + '/' + this.studyprogram + '/' + this.class);
    data.subscribe(result => {
      this.postData = result;
      console.log(result);
    })

  }
}
