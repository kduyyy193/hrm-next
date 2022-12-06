import { User as UserType } from "../models/User.model";

export const handleSortByNumber = (
  sortName: string,
  sortType: string,
  setSortType: React.Dispatch<React.SetStateAction<string>>,
  filterUsers: UserType[],
  setFilterUsers: React.Dispatch<React.SetStateAction<UserType[]>>
) => {
  if (sortType === "asc") {
    let results = [...filterUsers].sort((a, b) => Number(a[sortName as keyof UserType]) - Number(b[sortName as keyof UserType]));
    setFilterUsers(results);
  }
  if (sortType === "dsc") {
    let results = [...filterUsers].sort((a, b) => Number(b[sortName as keyof UserType]) - Number(a[sortName as keyof UserType]));
    setFilterUsers(results);
    console.log(filterUsers);
  }
  sortType === "asc" ? setSortType("dsc") : setSortType("asc");
};
