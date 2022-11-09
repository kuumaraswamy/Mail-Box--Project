
import React,{Fragment} from "react";
import {Switch,Route} from "react-router-dom"
import "./App.css";
import { useSelector } from "react-redux"
import HeaderPage from "./components/Layout/HeaderPage";
import Home from "./components/Pages/Home";
import LoginAuth from "./components/Pages/LoginAuth";
import Inbox from "./components/mail/Inbox";
import Sent from "./components/mail/Sent";
import ComposeMail from "./components/mail/ComposeMail";
import SingleMail from "./components/mail/SingleMail";



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

            <Route path="/Compose" component={ComposeMail}>  
            {isLogin && <ComposeMail/>}
            </Route>

            <Route path="/Inbox" component={Inbox}>
            {isLogin && <Inbox/>}
            </Route>
             
             
             <Route path="/SingleMail" component={SingleMail}>
             {isLogin && <SingleMail/>}
             </Route>

             <Route path="/sentMails" component={Sent}>
             {isLogin && <Sent/>}
             </Route>

        </Switch>    
    </main>
      
  
    </Fragment>
  
  );
}

export default App;