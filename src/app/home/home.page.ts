import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

declare const RadiantMP: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  elementID: string = 'rmpPlayer';
  rmp: any = null;

  constructor() {}

  ngOnInit() {
    const src = {
      mp4: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    };
    const settings = { 
      licenseKey: 'Y21xZ29vcWlrbSEqXyU0PStzMD0rczJ5ZWkyaTU/cm9tNWRhc2lzMzBkYjBBJV8q',
      src: src,
      width: '100%',
      height: 400,
      pathToRmpFiles: '../../assets/radiantmediaplayer/',
      skin: 's3',
      googleCast: true,
      googleCastCordova: true,
      contentMetadata: {
        poster: [
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
        ]
      }
    };
    const rmp = new RadiantMP(this.elementID);
    rmp.init(settings);
  }

  ionViewDidEnter() {
    if (this.rmp && this.rmp.getReady()) {
      this.rmp.play();
    }
  }

  ionViewWillLeave() {
    if (this.rmp && this.rmp.getReady()) {
      this.rmp.pause();
    }
  }
}
