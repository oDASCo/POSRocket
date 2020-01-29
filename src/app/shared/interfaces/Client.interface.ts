export interface IClient {
    _id: string;
    index: number;
    guid: string;
    isActive: boolean;
    balance: string;
    picture: string;
    age: number;
    eyeColor: string;
    name: string;
    gender: string;
    company: string;
    email: string;
    phone: string;
    address: string;
    about: string;
    registered: string;
    latitude: string;
    longitude: string;
    tags: any;
    friends: [];
    greeting: string;
    favoriteFruit: string;
}

export interface IClients extends Array<IClient> {
}