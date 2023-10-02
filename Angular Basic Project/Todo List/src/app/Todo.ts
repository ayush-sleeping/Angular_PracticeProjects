export class Todo {
   sno: number = 0; // Initialize sno with a default value (you can use any default value that makes sense)
   title: string = "";
   desc: string = "";
   active: boolean = false; // Initialize active with a default value
 
   constructor(sno: number, title: string, desc: string, active: boolean) {
     this.sno = sno; // Initialize sno in the constructor
     this.title = title;
     this.desc = desc;
     this.active = active;
   }
 }