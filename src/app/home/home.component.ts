import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ItemCardComponent } from '../item-card/item-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ItemCardComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  items: any[] = [
    { name: 'Item 1', description: 'Description 1', price: 100 },
    { name: 'Item 2', description: 'Description 2', price: 200 },
    { name: 'Item 3', description: 'Description 3', price: 300 },
    { name: 'Item 4', description: 'Description 4', price: 400 },
    { name: 'Item 5', description: 'Description 5', price: 500 }
  ];

  constructor(public authentication: AuthenticationService) { }
  ngOnInit(): void {
    this.onIndexChange.emit(this.index)
  }

  @Input('index') index: number = 0;
  @Output() onIndexChange: EventEmitter<number> = new EventEmitter<number>();

  src: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  width: number = 200;
  height: number = 200;

  currentPrice: number = 0;


  incrementNumber(): void {
    this.onIndexChange.emit(++this.index)
  }
}

