import { User as UserType } from "../models/User.model";
export const filtersHandler = (
  users: UserType[],
  value: string,
  name: string,
  setFilterUsers: React.Dispatch<React.SetStateAction<UserType[]>>
) => {
  const valueFilter = value;
  const nameFilter = name;
  if (valueFilter === "all") return setFilterUsers(users);
  const results = users.filter((user) => {
    return user[nameFilter as keyof UserType] === valueFilter;
  });
  setFilterUsers(results);
};
