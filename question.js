 class Question {
   constructor (id) {
     this.id = id
   }

   static All(){
     return this._All;
   }

   save(){
     this.constructor._All.push(this);
   }
 }

Question._All = []


let question = new Question("What's your favorite food?")


