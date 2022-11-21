type TSize = 'L' | 'S'

type TProperty = 'name' | 'price' | TSize;
class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size:TSize = 'S',
    ){
    }

    toString(){
        this.verifyProperty()
        return `${this.name} ${this.price} ${this.size}`
    }

    verifyProperty() {
        
        for (const key in this) {
            switch (typeof this[key]) {
                case "string":
                    if((<string><unknown>this[key]).length <= 0) throw new Error(`property ${key} no tiene valor`);
                    break;
                case 'number':
                    if((<number><unknown>this[key]) <= 0) throw new Error(`property ${key} no tiene valor`);
                      break
                default:
                    break;
            }
        }
    }

     
}

(() => {
    const bluePants = new Product('Blue Large Pants');
    const noName = new Product();
    console.log(bluePants.toString());
    console.log(noName.toString());
})()