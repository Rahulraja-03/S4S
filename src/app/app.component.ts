import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Meta,Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 's4s';
  color="#f5ad42";
  contactFormDirective: any;

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
  }


onSubmit(){
  console.log(this.contactForm.value)
  this.contactForm.reset()
}

contactForm = new FormGroup({

firstName: new FormControl('',[Validators.required,Validators.maxLength(12),Validators.pattern("^[a-zA-Z]+$")]), 
email: new FormControl({
  value: '',
  disabled:false},[Validators.required,Validators.maxLength(20),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]
),
phone: new FormControl('',[Validators.required])
})

constructor(
 private meta :Meta , private titleService: Title ){
this.titleService.setTitle("Sigma4Solutions");
this.meta.addTag({name:'description', content:'Sigma4Solutions'});
this.meta.addTag({name:'keywords',content:'accessibility services,data annotation,about data annotation,digital publishing companies,accessibility reviews,e publishing,karaikudi,karaikudi it companies website,sigma,sigma 4,sigma solution,sigma4solutions karaikudi,sigma4solutions,software services,what is data annotation,software services & consultancy,what is data annotation,software services company'});
  
}
ngOnInit(): void {
  
}

}