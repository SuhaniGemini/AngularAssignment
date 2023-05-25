import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  hide = false;
  counter: number =0;
  toggle() {
    this.hide = !this.hide;
    this.counter++;
    console.log(this.counter);
  }
  
  count:number =0;
  fetch(a:string){
    const heading = document.createElement("h3");
    heading.innerText = a;
    document.body.appendChild(heading)
    this.count++;
    if(this.count%5==0){
      heading.style.backgroundColor = "blue",
      heading.style.display="inline-block";
    }
  }
  
}
