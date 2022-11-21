(() => {

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

    interface IUser extends IPerson {
        email: string;
        role: string;

    }
    class User extends Person {
        public lastAccess: Date;
        public email: string;
        public role: string;
        constructor(
            { birthdate, email, gender, name, role }: IUser,
        ){
            super({ birthdate, gender, name })
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    const user = new User({ birthdate: new Date('1985-10-21'), email: 'said@gmail.com', gender: 'M', name: 'Said', role: 'admin' })
    console.log({ user });

    interface IUserSettings extends IUser {
        workingDirectory: string,
        lastOpenFolder: string,
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({birthdate, email, gender, lastOpenFolder, name, role, workingDirectory}: IUserSettings){
            super({email, role, name, gender, birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }


    const userSettings = new UserSettings({workingDirectory: '/usr/home', lastOpenFolder: '/home', email: 'said@gmail.com', role: 'admin', name: 'said', gender: 'M', birthdate: new Date('1985-10-21')});
    console.log(userSettings);


})();