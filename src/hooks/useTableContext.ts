import { useContext } from "react";
import { usersTableContext } from "../store/UsersTableContext";

const useTableContext = () => {
  return useContext(usersTableContext);
};

export default useTableContext;
