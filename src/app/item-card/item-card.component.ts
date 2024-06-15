import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {


  @Input('item') item: any = {};
  @Output() editClicked: EventEmitter<number> = new EventEmitter();



  onEdit() {
    this.editClicked.emit(this.item.price)
  }

}
