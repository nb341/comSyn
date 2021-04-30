import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Item } from '../shared/Item';
import { Items } from '../shared/Items';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
  getItems(): Observable<Item[]> {
    return of(Items).pipe(delay(1500));
  }
}
