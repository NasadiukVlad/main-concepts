import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  @Input() public someComponentText: string;
  @Output() public passDataToParent = new EventEmitter<string>();

  @Output() public secondEnteredDataChange = new EventEmitter<string>();
  @Input() public secondEnteredData: string;

  public enteredData: string;

  public passData() {
    this.passDataToParent.emit(this.enteredData);
  }

  public passSecondData(data: string) {
    this.secondEnteredDataChange.emit(data);
  }
}

