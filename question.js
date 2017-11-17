 class Question {
   constructor (id) {
     this.id = id
   }
 }

Question._All = []

static All(){
  return this._All;
}
