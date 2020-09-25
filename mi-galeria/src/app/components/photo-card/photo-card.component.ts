import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from '../../model/photo.model';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css']
})
export class PhotoCardComponent implements OnInit {

  @Input()
  public photo: Photo;

  constructor(private router: Router){}

  ngOnInit(): void {}

  public getUrl(): string {
    return this.router.url;
  }
}
