import { User as UserType, UserFilter } from "../models/User.model";

export const handleFilters = (
  users: UserType[],
  value: string,
  name: string,
  filter: UserFilter,
  setFilterUsers: React.Dispatch<React.SetStateAction<UserType[]>>
) => {
  // for ( let key in filter) {
  //   if(filter[key as keyof UserFilter] === 'all') {
  //     delete filter[key as keyof UserFilter]
  //   }
  // }
  // console.log("filter before",filter)

  // const results = users.filter(user => {
  //   for (let key in filter) {
  //     if (user[key as keyof UserType] === undefined || user[key as keyof UserType] !== filter[key as keyof UserFilter])
  //       return false;
  //   }
  //   return true;
  // });

  // setFilterUsers(results);
};
