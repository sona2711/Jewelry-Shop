import { Component,OnInit } from '@angular/core';
import { FormControl , FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


import { MainService } from '../../services/main.service';



@Component({
  selector: 'app-blogs-item',
  templateUrl: './blogs-item.component.html',
  styleUrls: ['./blogs-item.component.scss']
})
export class BlogsItemComponent implements OnInit{
  comm:any =localStorage.getItem('comment') 
  selectedItem={
    id: 0,
    image:'',
    category:'',
    date:'',
    title:'',
    info:''
  }
  user:any={
    id:0,
    name:"",
    email:"",
    website:"",
    comment:"",
    time:"",
  }
  
  commentForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email:new FormControl('',Validators.email),
    website:new FormControl('',Validators.required),
    comment:new FormControl('',Validators.required) ,
    save:new FormControl('',Validators.required),
    time:new FormControl(''),
    }
  )
  comments = this.mainService.usersComment;
  commentArr :any=[]
  replySub = false;
  

constructor( 
  private mainService:MainService,
  private HttpClient:HttpClient){
   
}

ngOnInit(): void {
  this.selectedItem = this.mainService.selectedItem
  
}

saveComment(){
  if(this.commentForm.status === 'INVALID') return;
  localStorage.setItem('comment', JSON.stringify(this.commentArr))
  this.user =[]
  let val:any =this.commentForm.value
  if(val.save === true){
    localStorage.setItem('save',val.save)
  }
}
reply(){
  this.replySub =!this.replySub
  const index = this.mainService.usersComment.findIndex(x => x.id === this.user.id)
  console.log(index);
  
}

replyComment(){
  
}
}




