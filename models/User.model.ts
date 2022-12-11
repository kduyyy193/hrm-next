export interface User {
    id: string,
    name: string,
    sex: string,
    address: string,
    image: string,
    date: string,
    dateJoined: string,
    salary: string,
    group: string,
    description: string,
    hobby: string,
}


export interface HandleUser {
    value: string ,
    setValue: React.Dispatch<React.SetStateAction<string>>
    funcHandler: Function
}

export type Params = {
	params: {
		userId: string
	}
}

export type Data = {
    users: User[]
}