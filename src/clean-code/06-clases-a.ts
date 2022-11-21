(() => {

    type Gender = 'M' | 'F';

    class Person {
        constructor(public name: string, public gender:Gender, public birthdate: Date){}
    }


    const persona = new Person('Said', 'F', new Date('1985-10-21'));
    console.log({ persona });

    class User extends Person {
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            public name: string,
            public gender: Gender,
            public birthDate: Date
        ){
            super(name, gender, birthDate)
            this.lastAccess = new Date()
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            public email: string,
            public role: string,
            public name: string,
            public gender: Gender,
            public birthDate: Date
        ){
            super(email, role, name, gender, birthDate)
        }
    }


    const userSettings = new UserSettings('/usr/home', '/home', 'said@gmail.com', 'admin', 'said', 'M', new Date('1985-10-21'))
    console.log(userSettings);


})();