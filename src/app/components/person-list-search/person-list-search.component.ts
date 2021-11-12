import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged, take } from 'rxjs';
import { ApiPerson, ApiResponse } from '../../models/people';
import { PeopleResource } from '../../resources/people.resource';

@Component({
  selector: 'app-person-list-search',
  templateUrl: './person-list-search.component.html',
})
export class PersonListSearchComponent {
  /**
   * A list of people returned by the SWApi
   */
  SearchResults: ApiPerson[] = [];

  /**
   * Form used to allow search to the SWApi
   */
  SearchForm: FormGroup;

  constructor(private peopleResource: PeopleResource<ApiResponse>) {
    this.SearchForm = new FormGroup({
      search: new FormControl('', Validators.maxLength(128)),
    });

    this.SearchForm.controls.search.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((searchParams) => {
        if (searchParams.length) {
          this.peopleResource
            .SearchPeople(searchParams)
            .pipe(take(1))
            .subscribe((results) => {
              console.log(results);
              this.SearchResults = results.results.sort((a, b) =>
                a.name < b.name ? -1 : 1
              );
              console.log(results);
            });
        }
      });
  }
}
