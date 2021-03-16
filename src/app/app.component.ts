import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  /**
   * Estrutura de arquivos:
   * https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7
   */
  /**
   * Implementando bootstrap 5:
   * https://medium.com/@aniruddhadas9/bootstrap-5-in-angular-10-without-jquery-45723598440c
   */

  currentUrl = '';
  subscriptions$: Subscription[] = [];

  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.getCurrentUrl();
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach((subscription) => subscription.unsubscribe());
  }

  getCurrentUrl(): void {
    const router$ = this.router.events.subscribe({
      next: () => {
        this.currentUrl = this.location.path();
      },
    });

    this.subscriptions$.push(router$);
  }

  showHeader(): boolean {
    return this.currentUrl !== '';
  }
}
