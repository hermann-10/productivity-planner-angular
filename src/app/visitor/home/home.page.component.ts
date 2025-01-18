import { Component } from '@angular/core';
import { HomeBannerDumbComponent } from './home-banner/home-banner.dumb.component';

@Component({
    imports: [HomeBannerDumbComponent],
    templateUrl: './home.page.component.html',
    styleUrl: './home.page.component.scss'
})
export class HomePageComponent {

  //onXYZ
  onBannerClicked() {
    console.log('Banner clicked');
  }

}