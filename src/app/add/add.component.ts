import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  menuName: string;

  constructor(
    private route: ActivatedRoute
  ) { 
    this.menuName = route.root.firstChild.snapshot.data['menuName'];
  }

  ngOnInit() {
  }

}
