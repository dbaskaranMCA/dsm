import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    
  }
  showFiller = false;
 
  globalHandle(){
    this.router.navigate(['components/global']);
  }

}