import { Country } from '../../interfaces/country';
import { CountriesService } from './../../services/country.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries :Country[] = [];
constructor(private countriesService: CountriesService ) {}


searchByCapital(term : string): void{
 // console.log("by capital" , {term});
  this.countriesService.searchCapital(term).subscribe( coutries => {
    this.countries = coutries;
  }  );

  //console.log(this.countriesService.countries);
}


}
