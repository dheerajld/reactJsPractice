import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import {  NavLink } from "react-router-dom";

export const Employee = () => {
  const [state, setState] = useState(5);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function Details() {
      const res = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      const get = await res.json();
      setData(get);

      document.title = `useEffect (${state}) - Employee Details  `;
    }
    Details();
  }, [state]);

  return (
    <div style={{ padding: "10px" }}>
      <Button
        onClick={() => {
          setState(state + 5);
        }}
        variant="contained"
        color="success"
      >
        Add Data + {state}
      </Button>
      <div>
        <table>
          <caption>Employee Details</caption>
          <thead>
            <tr>
              <th>Id</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Age</th>
              <th>DOB</th>
            </tr>
          </thead>
          {data.map((user, index) => {
            return (
              <tbody key={index}>
                
             
                
                <tr>
                  <NavLink Link to={`/about/userDetail?id=${user.id}`}><td>{user.id}</td></NavLink>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>{user.dob}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};
