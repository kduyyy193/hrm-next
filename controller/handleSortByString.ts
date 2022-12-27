import { User as UserType } from "../models/User.model";

export const handleSortByString = (
  sortName: string,
  sortType: string,
  setSortType: React.Dispatch<React.SetStateAction<string>>,
  filterUsers: UserType[],
  setFilterUsers: React.Dispatch<React.SetStateAction<UserType[]>>
) => {
  if (sortType === "asc") {
    let results = [...filterUsers].sort((a, b) => (a[sortName as keyof UserType]! > b[sortName as keyof UserType]! ? 1 : -1));
    setFilterUsers(results);
  }
  if (sortType === "dsc") {
    let results = [...filterUsers].sort((a, b) => (a[sortName as keyof UserType]! < b[sortName as keyof UserType]! ? 1 : -1));
    setFilterUsers(results);
    console.log(filterUsers);
  }
  sortType === "asc" ? setSortType("dsc") : setSortType("asc");
};
