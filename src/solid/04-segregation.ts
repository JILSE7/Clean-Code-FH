
interface IBird {
    eat(): void;
    run(): void;
}

interface IFlyingBird {
    fly(): void;
}

interface ISwimmingBird { 
    swim():void
}


class Tucan implements IBird, IFlyingBird {

    public fly():void {

    }

    public eat():void {

    }

    public run():void {

    }
}

class Humminbird implements IBird, IFlyingBird {
    public fly():void {

    }

    public eat():void {

    }

    public run():void {

    }
}

class Ostrich implements IBird, ISwimmingBird {

    public eat():void {

    }

    public run():void {

    }

    swim(): void {
        
    }
}