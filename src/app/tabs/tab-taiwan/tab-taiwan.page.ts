import { Component, OnInit, NgZone } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { DataStoreService } from '../../core/services/data-store.service';

@Component({
  selector: 'app-tab-taiwan',
  templateUrl: './tab-taiwan.page.html',
  styleUrls: ['./tab-taiwan.page.scss'],
})
export class TabTaiwanPage implements OnInit {
  options: AnimationOptions = {
    // path: '/assets/lottie-animation.json',
    path: '/assets/lottie/rain.json',

  };
  optionsBG: AnimationOptions = {
    // path: '/assets/lottie-animation.json',
    path: '/assets/lottie/island.json',

  };
  arry: any;
  drip = 1;
  isDisabled=false;
  
  //  arry = this.dataStore.dailyRecords$ 
  private animationItem: AnimationItem;

  constructor(
    private ngZone: NgZone,
    public dataStore: DataStoreService,
  ) { }

  ngOnInit() {
  }
  // isDisabled(){
  //  return false;

  // }
  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  stop(): void {
    this.ngZone.runOutsideAngular(() => this.animationItem.stop());
  }

  play(days): void {
    this.drip = this.drip + 1
    console.log(days);
    if (days <= 0) {
      this.isDisabled = true;
    }else{
      this.isDisabled = false;
    }
    this.ngZone.runOutsideAngular(() => this.animationItem.play());
  }


}
