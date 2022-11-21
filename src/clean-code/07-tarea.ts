(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(public value: string, public placeHolder: string){
            this.value = value;
            this.placeHolder = placeHolder;
        }
    }

    class InputEvents {
       constructor(){}
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement

    class InputElement {
        public inputAttributes : InputAttributes;
        public htmlElement: HtmlElement;
        public inputEvents: InputEvents
        constructor(id: string, value: string, placeholder: string) {
            this.htmlElement = new HtmlElement(id, 'input');
            this.inputAttributes = new InputAttributes(value, placeholder);
            this.inputEvents = new InputEvents();
        }
    }

    const nameField = new InputElement('25', 'hola', 'Escribe una palabra');

    console.log({ nameField });
    console.log(nameField.inputEvents.getValue());
})()