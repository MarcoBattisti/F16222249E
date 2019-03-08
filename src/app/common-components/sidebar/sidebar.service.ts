import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = false;
  menus = [
    {
      title: 'Generali',
      type: 'header'
    },
    {
      title: 'Dashboard',
      icon: 'fas fa-tachometer-alt',
      active: true,
      type: 'simple',
    },
    {
      title: 'Calendario',
      icon: 'fa fa-calendar',
      active: false,
      type: 'simple'
    },
    {
      title: 'Note',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
    },
    {
      title: 'Pagine',
      type: 'header'
    },
    {
      title: 'Home',
      icon: 'fas fa-home',
      active: false,
      type: 'simple',
    },
    {
      title: 'News',
      icon: 'fas fa-newspaper',
      active: false,
      type: 'simple',
    },
    {
      title: 'About me',
      icon: 'fas fa-user-circle',
      active: false,
      type: 'simple',
    },
    {
      title: 'About my work',
      icon: 'fas fa-briefcase',
      active: false,
      type: 'simple',
    },
    {
      title: 'Contact',
      icon: 'fas fa-envelope',
      active: false,
      type: 'simple',
    },
  ];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
