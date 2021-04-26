class Dictionary {
    #definition = {};
    
    constructor(key, value) {
      this.#definition[key] = value;
    }
    // геттер
    get full() {
      return `${this.key} ${this.value}`;
    }
    // сеттер
    set full(newValue) {
      [this.key, this.value] = newValue.split(' ');
    }
    // поиск
    look(key) {
        return this.#definition[key] || `Don't know any ${key}`;
    }   
}

function main(){
let d = new Dictionary("Apple", "A fruit that grows on trees");
//console.log( d.full ); // Вася Пупков
console.log(d.look("Apple"));
console.log(d.look("Banana"));
}