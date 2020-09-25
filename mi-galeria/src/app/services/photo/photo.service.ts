import { Injectable } from '@angular/core';
import { Photo } from '../../model/photo.model';
import { PHOTOS } from './PHOTOS.const';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private photos: Photo[];
  constructor() {
    this.photos = PHOTOS;
   }

   public getAllPhotos(): Photo[]{
     return this.photos;
   }

   public getPhotoById(id: number | string){
    return this.photos.find((photo: Photo) => photo._id.toString() === id);
   }
}
