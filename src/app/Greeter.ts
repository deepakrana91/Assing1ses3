
//Class definition
export class Greeter {

    message:string;

    constructor(message:string) {

        this.message=message;
    }
  //message returning function 
    greet():string {
      
     return `Here is your message "${this.message}"`
    }
}