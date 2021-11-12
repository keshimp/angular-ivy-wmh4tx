import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiPerson } from '../../models/people';
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

  constructor(private peopleResource: PeopleResource<ApiPerson>) {
    this.SearchForm = new FormGroup({
      search: new FormControl('', Validators.maxLength(128)),
    });
  }
}
