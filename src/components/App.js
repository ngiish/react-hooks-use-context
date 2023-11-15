import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";

//update App with the UserProvider
//import the provider
import { UserProvider } from "../context/user";

function App() {
  const [theme, setTheme] = useState("dark");
  
  return (
   
   
    <main className={theme}>
      {/*wrap components that need access to context data in the provider*/}
       <UserProvider>
      <Header theme={theme} setTheme={setTheme}  />
      <Profile theme={theme}  />
      </UserProvider>
    </main>
  );
}

export default App;

/* we also removed the 'user' prop from the components since we'll be accessing that data via context instead*/