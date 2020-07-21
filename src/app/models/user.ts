export class User{
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string,
        public role: string,
        public image: string,
        public firstname: string,
        public middlename: string,
        public firstlastname: string,
        public middlelastname: string,
    ){}
}