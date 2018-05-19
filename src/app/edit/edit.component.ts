import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  menuName: string
  constructor(
    private route: ActivatedRoute
  ) { 
    this.menuName = route.root.firstChild.snapshot.data['menuName'];
  }
  ngOnInit() {
  }

}
