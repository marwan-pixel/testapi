import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-updateordelete',
  templateUrl: './updateordelete.page.html',
  styleUrls: ['./updateordelete.page.scss'],
})
export class UpdateordeletePage implements OnInit {
  id: any;
  npm: number;
  name: string;
  class: string;
  major: string;
  studyprogram: string;
  public getSiswa: any;
  public updateSiswa: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      this.getDataWhere(this.id);
    });
  }

  getDataWhere(id) {
    let data: Observable<any>;
    data = this.http.get(
      'http://localhost/CodeIgniter_API-master/index.php/api/getdatawhere/' + id
    );
    data.subscribe((result) => {
      this.getSiswa = result;
      this.npm = this.getSiswa[0].npm;
      this.name = this.getSiswa[0].name;
      this.major = this.getSiswa[0].major;
      this.studyprogram = this.getSiswa[0].studyprogram;
      this.class = this.getSiswa[0].class;
    });
  }

  submit() {
    if (
      this.npm != null &&
      this.name != null &&
      this.major != null &&
      this.studyprogram != null &&
      this.class != null
    ) {
      this.updateData(this.id);
      console.log(
        this.npm,
        this.name,
        this.major,
        this.studyprogram,
        this.class
      );
      alert('Update Data Successfully');
    } else {
      alert('There are some null datas!');
    }
  }
  updateData(idA) {
    let data: Observable<any>;
    data = this.http.get(
      'http://localhost/CodeIgniter_API-master/index.php/api/putdata/' +
        idA +
        '/' +
        this.npm +
        '/' +
        this.name +
        '/' +
        this.major +
        '/' +
        this.studyprogram +
        '/' +
        this.class
    );
    data.subscribe((result) => {
      this.updateSiswa = result;
      console.log(result);
    });
  }
  ngOnInit() {}
}
