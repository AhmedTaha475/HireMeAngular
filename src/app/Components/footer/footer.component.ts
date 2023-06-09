import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/Services/auth.service';
declare var $: any;
declare var Snackbar: any;
declare var google: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(  public translate: TranslateService,  public AuthService:AuthService){
    const langItem = localStorage.getItem('Lang');
    if (langItem != null) {
      translate.use(langItem);
    }
  }
  ngOnInit(): void {
    // Snackbar for user status switcher
    $('#snackbar-user-status label').click(function () {
      Snackbar.show({
        text: 'Your status has been changed!',
        pos: 'bottom-center',
        showAction: false,
        actionText: 'Dismiss',
        duration: 3000,
        textColor: '#fff',
        backgroundColor: '#383838',
      });
    });

    //Google Autocomplete
    // function initAutocomplete() {
    //   var options = {
    //     types: ['(cities)'],
    //     // componentRestrictions: {country: "us"}
    //   };

    //   var input = document.getElementById('autocomplete-input');
    //   var autocomplete = new google.maps.places.Autocomplete(input, options);
    // }

    // Autocomplete adjustment for homepage
    // if ($('.intro-banner-search-form')[0]) {
    //   setTimeout(function () {
    //     $('.pac-container').prependTo('.intro-search-field.with-autocomplete');
    //   }, 300);
    // }

    // // Autocomplete adjustment for homepage
    // if ($('.intro-banner-search-form')[0]) {
    //   setTimeout(function () {
    //     $('.pac-container').prependTo('.intro-search-field.with-autocomplete');
    //   }, 300);
    // }
  }
  logOut()
  {
this.AuthService.logout();
  }
}
