import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { FooterComponent } from "./layout/footer/footer.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import {ToastModule} from "primeng/toast";
import { ToastService } from './layout/toast.service';
import { MessageService } from 'primeng/api';

// import { }


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [MessageService],
    imports: [RouterOutlet, 
      ButtonModule, 
      FontAwesomeModule, 
      FooterComponent, 
      NavbarComponent,
      ToastModule]
})
export class AppComponent implements OnInit{
  faIconLibrary :FaIconLibrary = inject(FaIconLibrary);
  isListingView = true;
  toastService = inject(ToastService);
  messageService = inject(MessageService)

  ngOnInit(): void {
    this.initFontAwesome();
  }
  private initFontAwesome(): void {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
  private listenToastService() {
    this.toastService.sendSub.subscribe({
      next: newMessage => {
        if(newMessage && newMessage.summary !== this.toastService.INIT_STATE) {
          this.messageService.add(newMessage);
        }
      }
    })
  }
  
}
