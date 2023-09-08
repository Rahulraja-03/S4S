import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 's4s';
  color="#f5ad42";

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
  }


onSubmit(){
  console.log(this.contactForm.value)
  
}

contactForm = new FormGroup({

firstName: new FormControl('',[Validators.required,Validators.maxLength(12),Validators.pattern("^[a-zA-Z]+$")]), 
email: new FormControl({
  value: '',
  disabled:false},[Validators.required,Validators.maxLength(20),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]
),
phone: new FormControl('',[Validators.required])
})
}
