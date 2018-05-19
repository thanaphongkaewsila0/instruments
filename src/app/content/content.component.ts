import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  menuName: string;
  constructor(
    private route: ActivatedRoute
  ) { 
    this.menuName = route.root.firstChild.snapshot.data['menuName'];
  }

  ngOnInit() {
  }

}
