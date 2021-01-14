import React, {useState, useEffect} from "react";

import Header from "./Header";
import Info from "./Info";

function Main(){
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        `https://api.github.com/users/${query}`
      );
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, [query]);

  return(
    <div>
      <Header query={query} setQuery={setQuery}/>
      {users && (
        <Info/>
      )}
      
    </div>
  )
}

export default Main;