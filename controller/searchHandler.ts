import { User as typeUser } from "../models/User.model";
export const searchHandler = (
  users: typeUser[],
  value: string,
  setFilterUsers: React.Dispatch<React.SetStateAction<typeUser[]>>
) => {
  if (!value) return setFilterUsers(users);

  const results = users.filter((user) => {
    if (user.name.toLowerCase().includes(value.toLowerCase().trim())) {
      return user;
    }
  });
  setFilterUsers(results);
};
