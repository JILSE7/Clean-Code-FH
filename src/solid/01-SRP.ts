(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductServices {
        getProduct(id: number) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    }

    class Mailer {
        private email:string = ""


        sendEmail(emailList: string[], template: 'to-admin' | 'to-clients'){
            console.log(emailList, template); 
        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        private productService:ProductServices;
        private mailer:Mailer;

        constructor(){
            this.productService = new ProductServices();
            this.mailer = new Mailer(); 
        }

        loadProduct( id: number ):void {
            return this.productService.getProduct(5);
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct({id: 4, name: 'mi producto'}) 
        }
    
        notifyClients() {
            this.mailer.sendEmail(["said@gmail.com",], 'to-admin')
        }
        // onAddToCart no tiene relacion directa con el producto :c
        /* onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        } */
    
    }

    class CartBloc {

        public itemsInCart:object[] = [];
        
        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }

    


    const productBloc = new ProductBloc();
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    // productBloc.onAddToCart(10);

    cartBloc.onAddToCart(5)


})();