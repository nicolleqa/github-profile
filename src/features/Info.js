import React from "react";

import styles from "../styles/Info.module.css";

import { Link } from "react-router-dom";

function Info({users, query}){
  return(
    <div className={styles.container}>
      {query === "" ? (
        <h1>Search users</h1>
      ): (
        <div>
          {users.length === 0 ? (
            <h1>Not Found</h1>
          ):
          <div>
            {users.map((user) => (
              <li key={user.id} className={styles.userContent}>
                <div className={styles.userInfo}>
                  <img src={user.avatar_url} alt={user.login} className={styles.profilePicture}/>
                  {user.name ? user.name: ""} <span>@{user.login}</span> 
                </div>
                <button className={styles.viewButton}>
                  <Link to={`/${user.login}`}>
                    View
                  </Link>
                </button>
              </li>
            ))}
            </div>
          }
        </div>
      )}
    </div>
  )
}

export default Info;