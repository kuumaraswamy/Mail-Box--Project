import {useState,useEffect} from 'react'
import { useHistory, } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../Store/auth-reducer';
import { Flex,Text,Box,button} from 'rebass'
// import AuthContext from '../../Store/auth-context'
import classes from "./HeaderPage.module.css"
import logo from '../../email.png'
import { Badge } from 'antd';





const HeaderPage = () => {
  const isLogin = useSelector((state) => state.authentication.isLogin)
  const inboxMails = useSelector(state => state.compose.fetchMail);
  const [unreadCount, setUnreadCount] = useState(0);
    console.log(isLogin, "in header");
    const dispatch = useDispatch()

  //  const authCntx = useContext(AuthContext)
   const history = useHistory();
  const logoutHandler = () =>{
    dispatch(authActions.logout());
  }

  useEffect(() => {
    if (inboxMails) {
      // eslint-disable-next-line
      Object.keys(inboxMails).map((mail) => {
            if (inboxMails[mail].read === false) {
          setUnreadCount(unreadCount + 1);
        }
      });
    }
  // eslint-disable-next-line
  }, [inboxMails]);
  
  return (
    <div >
      <Flex
          px={100}
          color='white'
          bg='#FFFAF0'
          border-color='1px solid black'
          alignItems='center'
       
          >
            <div className={classes.img}>
            <img src={logo} width="50" height="50" alt=""></img>
            </div>
        <Text p={4} fontWeight='bold' color="black" fontFamily= "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"><h1>Welcome To Mail Box !!</h1></Text>
        <Box mx='auto' />
        
          {!isLogin && <button  mr={50} className={classes.button} onClick={()=>history.push('./Home')} > Home </button>}
          { !isLogin &&<button  mr={50} className={classes.button} onClick={()=>history.push('./LoginAuth')} > Login </button>}
          {isLogin && <button  mr={50} className={classes.button} onClick={()=>history.push('./Home')} > Home </button>}
           {isLogin && <button mr={50} className={classes.button}onClick={()=>history.push('./Compose')}> Compose </button>}
           { isLogin && <button mr={50} className={classes.button} onClick={()=>history.push('./Inbox')}> Inbox 
                      {unreadCount === 0 ? (
                                <></>
                              ) : (
                                <span>{unreadCount} Unread</span>
                              )}
                  </button>
                  }
           { isLogin && <button mr={50} className={classes.button} onClick={()=>history.push('./SentMails')}> Sent Mails </button>}
            { isLogin && <button mr={50} className={classes.button} onClick={logoutHandler} > Logout </button>}
         
      </Flex> 

      
      {/* <div ng-controller="PortalController" className={classes.header}>
          <header>
      
          
             <button  mr={50} className={classes.button} onClick={()=>history.push('./Home')} > Home </button>
             <button  mr={50} className={classes.button} onClick={()=>history.push('./Home')} > Compose </button>
             <button  mr={50} className={classes.button} onClick={()=>history.push('./Home')} >Inbox </button>
             <button  mr={50} className={classes.button} onClick={()=>history.push('./Home')} > SentMails </button>
             <button  mr={50} className={classes.button} onClick={()=>history.push('./Home')} > LogOut</button>
              
              
          </header>
     </div> */}
      

    </div>
    
  )
}


export default HeaderPage;
