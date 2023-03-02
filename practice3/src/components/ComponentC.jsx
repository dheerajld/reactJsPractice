import { useContext } from "react";
import { UserContext } from "../App";

const ComponentC = () => {
  const user = useContext(UserContext);
  return (
    <div>
      ComponentC
      <h1> {user.name}</h1>
      <h1> {user.marks}</h1>
    </div>
  );
};

export default ComponentC;
