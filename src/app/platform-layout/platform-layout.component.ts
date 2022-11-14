import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-platform-layout',
  templateUrl: './platform-layout.component.html',
  styleUrls: ['./platform-layout.component.scss']
})
export class PlatformLayoutComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
