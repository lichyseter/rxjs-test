import {Component} from '@angular/core';
import {combineLatest, interval, Subscription} from 'rxjs';
import {take, tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'rxjs-test';
  testSubscription: Subscription = new Subscription;


  handleStart() {
    const firstTimer = interval(1000).pipe(tap((t) => console.log("fist:" + t)), take(1));
    const secondTimer = interval(500).pipe(tap((t) => console.log("second:" + t)), take(1));
    this.testSubscription = combineLatest([firstTimer, secondTimer]).subscribe((value: any) => {
      console.log(value);
    });
  }

  handleEnd() {
    this.testSubscription.unsubscribe();
  }
}
