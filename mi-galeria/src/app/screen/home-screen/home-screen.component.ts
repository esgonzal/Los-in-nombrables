import { Component, OnInit } from '@angular/core';
import { Photo } from '../../model/photo.model';
import { PhotoService } from '../../services/photo/photo.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  public photos: Photo[];

  constructor(private photoService: PhotoService){}
  
  ngOnInit(): void {
    this.photos = this.photoService.getAllPhotos();
  }

}
