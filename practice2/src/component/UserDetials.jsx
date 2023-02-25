import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

const UserDetials = () => {
  const [form, setForm] = useState({});
  //   const [email, setEmail] = useState("");

  const [data, setData] = useState([]);

  const addDetials = (e) => {
    setData([...data, { name: form.name, email: form.email }]);
    // setName("");
    // setEmail("");
    // setForm();
    e.preventDefault();
  };

  const removeDetials = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <>
      <Stack>
        <div className="input">
          <TextField
            id="outlined-basic"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            label="name"
            variant="outlined"
            required
          />{" "}
          &nbsp;&nbsp;
          <TextField
            id="outlined-basic"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            label="email"
            variant="outlined"
            required
          />
          &nbsp;&nbsp;
          <Button onClick={addDetials} variant="contained" color="success">
            <AddIcon />
          </Button>
        </div>
        <div>
          <table>
            <caption>User Details</caption>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Remove User</th>
              </tr>
            </thead>
            {data.map((user, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>

                    <td>
                      <Button
                        onClick={removeDetials}
                        variant="contained"
                        color="error"
                      >
                        <RemoveIcon />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </Stack>
    </>
  );
};

export default UserDetials;
