
import {Component} from '@angular/core';

@Component({
    selector: 'students',
    template: '<h2>{{getTitle()}}</h2> <h2>{{getCurrentDate()}}</h2>',
   
})

export class StudentsComponent{
    title = "My List of Students";
    date = new Date();


    getTitle(){
        return `${this.title} ${this.date} `;
    }

    getCurrentDate(){
        return this.date.toLocaleDateString();
    }
}