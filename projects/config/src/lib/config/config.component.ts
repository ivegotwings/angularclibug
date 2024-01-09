import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorCodeMap } from '@requireundefined/schema'

const errorCode: ErrorCodeMap = {
  EOK: 0,
  EPERMS: 1,
  EBADINPUT: 2,
  ENOTFOUND: 3,
  EEXISTS: 4,
  EUNKNOWN: 5,
  ESERIALIZE: 6,
  EINTERNAL: 7,
  EPARTIAL: 8,
}

@Component({
  selector: 'requireundefined-config',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './config.component.html',
  styleUrl: './config.component.css',
})
export class ConfigComponent {
  code = errorCode.EBADINPUT;
}
