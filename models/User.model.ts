export interface User {
    id: string,
    name: string,
    sex: string,
    address: string,
    image: string,
    date: string,
    dateJoined: string,
    salary: string,
    group: string
}


export interface HandleUser {
    value: string ,
    setValue: React.Dispatch<React.SetStateAction<string>>
    funcHandler: Function
}

export interface Data {
    users: User[]
}