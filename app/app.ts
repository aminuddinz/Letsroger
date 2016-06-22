import {ionicBootstrap, Platform} from 'ionic-angular';
import {Component} from '@angular/core';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
// import {Home} from './pages/home/home';


@Component({
    template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
    rootPage:any = TabsPage;

    constructor(platform:Platform) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }
}
ionicBootstrap(MyApp, [], {}); // http://ionicframework.com/docs/v2/api/config/Config/