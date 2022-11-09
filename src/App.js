// import logo from "./logo.svg";
import React,{Fragment} from "react";
import {Switch,Route} from "react-router-dom"
import "./App.css";
// import Authentication from "./components/Login/Authentication";
import { useSelector } from "react-redux";
// import AuthContext from "./Store/auth-context";
import HeaderPage from "./components/Layout/HeaderPage";
// import ProfileForm from "./components/Layout/ProfileForm";
// import VerifyEmail from "./components/Layout/VerifyEmail";
import Home from "./components/Pages/Home";
import LoginAuth from "./components/Pages/LoginAuth";
import Compose from "./components/Pages/Profile";
import Inbox from "./components/Pages/Inbox";
import SentMails from "./components/Pages/SentMails";



function App() {
  const isLogin = useSelector(state => state.authentication.isLogin);
  console.log(isLogin);
  // const authCntx = useContext(AuthContext);
  return (

 
    <Fragment>       
          <HeaderPage/> 
     <main>
        <Switch>
  
  {/* //Beore Login  */}

            <Route path='/Home' exact component={Home}>
              {!isLogin && <Home/>}
            </Route> 

            <Route path='/LoginAuth' exact component={LoginAuth}>
              {!isLogin && <LoginAuth/>}
            </Route> 
            
            
  {/* //After login components      */}

            <Route path='/Home' exact component={Home}>
              {isLogin && <Home/>}
            </Route> 

            <Route path="/Compose" component={Compose}>  
            {isLogin && <Compose/>}
            </Route>

            <Route path="/Inbox" component={Inbox}>
            {isLogin && <Inbox/>}
            </Route>
             
             
             <Route path="/sentMails" component={SentMails}>
             {isLogin && <SentMails/>}
             </Route>

        </Switch>    
    </main>
      
  
    </Fragment>
  
  );
}

export default App;