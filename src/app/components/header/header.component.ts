import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input() isAuthorized: boolean;
  @Output() signOut = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }


  onSignOut22(): void {
    this.signOut.emit();
  }

}
