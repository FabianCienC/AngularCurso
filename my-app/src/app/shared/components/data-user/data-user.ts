import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User as IUser } from '../../data-types/user';
import { User as UserService } from '../../services/user';

@Component({
  selector: 'app-data-user',
  imports: [],
  templateUrl: './data-user.html',
  styleUrl: './data-user.scss',
})
export class DataUser {
  @Input() user: IUser | undefined;
  @Output() onItemClear: EventEmitter<void> = new EventEmitter();

  constructor(private userService: UserService) {
  }

  clearSelection() {
    this.user = undefined;
    this.onItemClear.emit()
  }
}
