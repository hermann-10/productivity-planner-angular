import { Component /*,inject*/ } from '@angular/core';
import { environment } from '../environments/environment';
import { RouterOutlet } from '@angular/router';
//import { AuthService } from './core/auth.service';
//import { switchMap } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

   //readonly #authenticationService = inject(AuthService);
   isProductionEnvironment = environment.production;
   firebaseProjectId = environment.firebaseConfig.projectId;


  //  onLogin(){
  //   const email = "john.doe@gmail.com";
  //   const password = "azerty";

  //   this.#authenticationService
  //     .login(email, password)
  //     .pipe(
  //       switchMap((response) =>{
  //         console.log(response);
  //         const { email, localId, idToken} = response;
  //         return this.#authenticationService.save(email, localId, idToken);
  //       })
  //     )
  //     .subscribe((response) => console.log(response));
  //  }

  //  onRegister(){
  //   console.log('onRegister');
  //   const email = "john.doe@gmail.com";
  //   const password = "azerty";

  //   this.#authenticationService
  //     .register(email, password).subscribe(console.log);
  //  }
}
