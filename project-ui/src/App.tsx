import React, { useState } from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
//import { TitleComponent } from './components/TitleComponent/TitleComponent';
import { NavBarComponent } from './components/NavBarComponent/NavBarComponent';
import { LoginComponent } from './components/LoginComponent/LoginComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom'
//import { User } from './models/User';
import { ProfileComponent } from './components/ProfileComponent/ProfileComponent';
import { AllUsersComponent } from './components/AllUserComponent/AllUsersComponent';
import { NewUserComponent } from './components/NewUserComponent/NewUserComponent';
import {ToastContainer} from 'react-toastify'
import { User } from './models/User';

// this is the first and highest component in the hierarchy 
// the root level component
// every other component we make we will put into APP somewhere ( if doing SPA )

function App() {
  const [currentUser, changeCurrentUser] = useState<null | User>(null)
  return (
    <div className="App">
      {/* //this is the root level tag that allows us to do routing in the first place */}

      <Router>
        {/* the router component has no display elements, its only purpose is to manage the data and functionality of routing */}
        <NavBarComponent user={currentUser}/>
        <Route path='/login' render={(props)=>(<LoginComponent changeCurrentUser={changeCurrentUser} {...props} />)} />
        <Route path='/profile/:userId' component={ProfileComponent}/>
        <Route path='/users' component={AllUsersComponent}/>
        <Route path='/new' component={NewUserComponent}/>
        <ToastContainer position='bottom-right'/>
      </Router>

    </div>
  );
}

export default App;
