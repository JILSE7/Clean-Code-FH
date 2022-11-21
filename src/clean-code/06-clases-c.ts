(() => {

    // Aplicando el principio de responsabilidad unica
    // Priorizar la composiicion frente a la herencia

    // COMPOSICION - CHECAR EJERCICIO
    type Gender = 'M' | 'F';

    interface IPerson{
        name: string;
        gender:Gender;
        birthdate: Date;
    }

    class Person {
        public name: string;
        public gender:Gender;
        public birthdate: Date;
        constructor({ birthdate, gender, name }: IPerson){
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }
    }


    const persona = new Person({ name: 'Said', gender: 'F',  birthdate: new Date('1985-10-21') });
    console.log({ persona });

    interface IUser {
        email: string;
        role: string;
    }
    class User {
        public lastAccess: Date;
        public email: string;
        public role: string;
        constructor(
            { email, role }: IUser,
        ){
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    const user = new User({ email: 'said@gmail.com', role: 'admin' })
    console.log({ user });

    interface ISettings {
        workingDirectory: string,
        lastOpenFolder: string,
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({lastOpenFolder, workingDirectory}: ISettings){
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }
    // La composicion es una clase que se va a componer de otras clases
    class UserSettings {

        public persona  : Person;
        public user     : User;
        public settings : Settings;

        constructor(persona: Person, usuario: User, settings: Settings){
            this.persona = persona;
            this.user = usuario;
            this.settings = settings;
        }

    }


    const userSettings = new UserSettings(
        new Person({
            birthdate: new Date('1997-05-17'),
            gender: 'M',
            name: 'said'
        }),
        new User({
            email: 'said',
            role: 'admin'
        }),
        new Settings({
            lastOpenFolder: '/home',
            workingDirectory: '/home/user'
        })
    )

    console.log(userSettings.user.checkCredentials());


})();