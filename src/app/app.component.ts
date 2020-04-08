import { Component,Inject } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  //------AtTRIBUTE BINDING------------------//
  bdr:number=1;
  col:number=3;
  //---------end AtTRIBUTE BINDING----------//

  public choose='';
  setvalue(drp:any){
  	this.choose=drp.target.value;
  }
  //-----------trackby---------
  students:any[];
  constructor(){
    this.students=[
    {
      studentId:1,
      name:'ajit',
      gender:'male',
      age:'24',
      course:'BCA'
    },
    {
      studentId:2,
      name:'Sharad',
      gender:'male',
      age:'24',
      course:'CA'
    },
    {
      studentId:3,
      name:'mayank',
      gender:'male',
      age:'22',
      course:'Btech'
    },
    {
      studentId:4,
      name:'abhishek',
      gender:'male',
      age:'23',
      course:'MCA'
    }
    ];
  }
  getmorestudents():void{
    this.students=[
    {
      studentId:1,
      name:'ajit',
      gender:'male',
      age:'24',
      course:'BCA'
    },
    {
      studentId:2,
      name:'Sharad',
      gender:'male',
      age:'24',
      course:'CA'
    },
    {
      studentId:3,
      name:'mayank',
      gender:'male',
      age:'22',
      course:'Btech'
    },
    {
      studentId:4,
      name:'abhishek',
      gender:'male',
      age:'23',
      course:'MCA'
    },
    {
      studentId:5,
      name:'Zamal khan',
      gender:'male',
      age:'223',
      course:'CCA'
    }
    ];

  }
  Students:any[]=[
  {
  	'name': 'rahul kumar'
  },
  {
  	'name': 'ajit kumar'
  },
  
  {
  	'name': 'abhishek kumar'
  },
  
  {
  	'name': 'anupam kumar'
  },
  {
  	'name': 'mayank kumar'
  },
  
  {
  	'name': 'asfaq kumar'
  }
  ];


  trackbystudentid(index:number,student:any):string{
    return student.studentId;
  }
  //----------TWO WAY DATA BINDING--------->
  data:string='ajit gupta'
  data1:string='abhishek'
  //----------END-TWO WAY DATA BINDING--------->

  //------------pipes-----//
  employees:any[]=[
  {
    id:'1',
    name:'ajit',
    city:'lucknow',
    age:'22'
  },
  {
    id:'2',
    name:'abhishek',
    city:'kanpur',
    age:'23'
  },
  {
    id:'3',
    name:'asfaq',
    city:'varanasi',
    age:'28'
  },
  {
    id:'4',
    name:'maurya',
    city:'allhabad',
    age:'26'
  },

  ];

};
