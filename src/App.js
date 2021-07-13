import React from "react";
import Search from "./components/Search";
import "./styles.css";

export default function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [users, setUsers] = React.useState([
    "kieran",
    "alan",
    "ryan",
    "nigel",
    "geraint",
    "garin"
  ]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="App">
      <h1>Users List</h1>
      <h2>Search for your favourite user!</h2>
      <Search searchValue={searchValue} handleChange={handleChange} />
      {users
        .filter((user) => user.includes(searchValue))
        .map((user) => (
          <p>{user}</p>
        ))}
    </div>
  );
}
