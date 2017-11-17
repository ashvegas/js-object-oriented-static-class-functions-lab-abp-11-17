 class Question {
   constructor (id) {
     this.id = id
   }

   static All(){
     return this._all;
   }
 }

Question._All = []
