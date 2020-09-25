import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo/photo.service';
import { Photo } from '../../model/photo.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-detail-screen',
  templateUrl: './photo-detail-screen.component.html',
  styleUrls: ['./photo-detail-screen.component.css']
})
export class PhotoDetailScreenComponent implements OnInit {

  public id: number;
  public photo: Photo;

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
    ){
    this.id = activatedRoute.snapshot.params['id'];
  }
  
  ngOnInit(): void {
    this.photo = this.photoService.getPhotoById(this.id);
  }

}
