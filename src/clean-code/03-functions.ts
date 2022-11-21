(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieActorsById( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getBioActorById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Crear una película
    interface IMovie{
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }
    function createMovie({cast, description, rating, title}: IMovie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthDate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }


    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number=> {
        
        /* if(isDead) return 1500;

        if(isSeparated) return  2500;

        return ( isRetired ) ? 3000 : 4000; */

        return (isDead) ? 1500 : ( isSeparated ) ? 2500 : (isRetired) ? 3000 : 4000;
        
    }

    


})();