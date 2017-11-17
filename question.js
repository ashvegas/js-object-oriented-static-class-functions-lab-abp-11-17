 class Question {
   constructor (content) {
     this.content = content
     this.save()
   }
   static All(){
     return this._All;
   }
   save(){
     this.constructor._All.push(this);
   }
   static Find(id){
     this.All(0)
   }
 }
Question._All = []
