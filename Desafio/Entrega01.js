

class ProductManager{

    #products;
    #idProx;
    //constructor
    constructor(){
        this.#products = [];
        this.#idProx = 1;
    }

    //metodos
    addProduct(title, description, price, thumbnail, code, stock){//agregara el producto al arreglo d productos inicial
        
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            throw new Error("Todos los parametros son requeridos");
        }
        
        if (this.#products.some(product => product.code === code)) {
            throw new Error("ERROR, NO SE PUEDE VOLVER A CARGAR EL MISMO PRODUCTO");
        }

        const product ={
            id: this.#idProx++,
            title, 
            description, 
            price, 
            thumbnail, 
            code,
            stock
        };

       this.#products.push(product);

    };

    getProducts(){ //debe devolver el arreglo con todos los productos creados hasta ese momento
        console.log(this.#products);
    }

    getProductById(id) {
        const product = this.#products.find(product => product.id === id);
    
        if (!product) {
          console.log("NOT FOUND");
        } else {
          console.log(product);
        }
    }
}

module.exports = ProductManager;