import {Component, OnInit} from '@angular/core';
import {NavbarItem} from './home-page/models/navbar-item';
import {NavbarItemsService} from './home-page/services/navbar-items.service';
import {WorkOffices} from '../work-offices';
import {WorkOfficesService} from './contacts-page/services/work-offices.service';
import {AppComponent} from '../app.component';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-public-main',
  templateUrl: './public-main.component.html',
  styleUrls: ['./public-main.component.scss']
})
export class PublicMainComponent implements OnInit {

  private navbarItems: NavbarItem[];
  private workOffices: WorkOffices[];
  isDataAvailable: boolean;

  loading = true;

  env = this.appComponent.env;

  constructor(private router: Router, private navbarItemService: NavbarItemsService, private workOfficesService: WorkOfficesService,
              private appComponent: AppComponent) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
      window.scrollTo(0, 0);
    });
    this.workOffices = this.workOfficesService.workOffices;
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      setTimeout(() => { // here
        this.loading = false;
      }, 2000);
    }
    if (event instanceof NavigationError) {
      setTimeout(() => { // here
        this.loading = false;
      }, 2000);
    }
  }

  getNavbarItems() {
    this.navbarItemService.getNavbarItems(this.env.apiUrl).subscribe(
      data => { this.navbarItems = data;  this.isDataAvailable = true; },
      err => console.error(err)
    );
  }

  ngOnInit() {
    this.getNavbarItems();
  }

}
