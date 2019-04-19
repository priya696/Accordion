import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	title:string="Accordian";
	data: { title: string, description: string, name: string }[] = [
		    { "title": "Angular", "description": "Angular 4 is a JavaScript framework for building web applications and apps in JavaScript, html, and TypeScript, which is a superset of JavaScript.", "name":"collapseOne" },
		    { "title": "React JS", "description": "React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps.", "name":"collapseTwo" },
		    { "title": "Vue JS", "description": "VueJS is a progressive JavaScript framework used to develop interactive web interfaces. Focus is more on the view part, which is the front end.", "name":"collapseThree" }
		];
}
