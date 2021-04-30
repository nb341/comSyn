  
import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/Item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items: Item [];
  constructor(private itemService: ItemService) { }
 
  ngOnInit(): void {
    this.itemService.getItems()
    .subscribe(items => this.items = items);
  }
}
