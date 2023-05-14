import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { hybridCommon } from '@hybrid/common';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'hybrid-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hybrid';
  test = hybridCommon()
}
