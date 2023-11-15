/**In order to access the context data from our components, we can use the useContext
 * hook that lets us access the 'value' of our context provider in any child compnent.
 */
//import the useContext hook
import React, { useContext } from "react";
//import the UserContext we created
import { UserContext } from "../context/user";
import Interests from "./Interests";

function Profile({ theme }) {
  //call useContext with our UserContext
  const {user} = useContext(UserContext)

  //now, we can use the user object just like we would if it was passed as a prop
  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} theme={theme} />
    </div>
  );
}

export default Profile;
