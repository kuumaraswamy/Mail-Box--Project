import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { composeActions } from "../../Store/compose-reducer";
import classes from './SingleMail.module.css';

const SingleMail = (props) => {
  
    const dispatch = useDispatch();
    const mails = useSelector(state => state.compose.fetchMail);
    
    const userMailId = localStorage.getItem('email');
    const singleMailKey = props.mailDetails.singleMail;
   
    //  const dispatch= dispatch(composeActions.ReadMail(singleMailKey));
    
    // console.log(`inside single email`,singleMailKey)

    useEffect(() => {
        dispatch(composeActions.ReadMail(singleMailKey));
        const userMail = userMailId.split('.').join('');
        console.log(userMail);

        const readMail = async () => {
            try {
                const res = await axios.put(
                `https://mail-box-ef030-default-rtdb.firebaseio.com/${userMail}/${singleMailKey}.json`,
                mails[singleMailKey]
                )
                console.log(res);
                console.log(mails[singleMailKey]);
            } catch (err) {
                console.log(err);
            }
        }
        readMail();
    },[userMailId, mails, singleMailKey,dispatch]);

    return (
        <section className={classes['single-mail']}>
            <span >From: 
                <span style={{fontWeight: '500'}}> {mails[singleMailKey].from}</span>
            </span><br />
            <span>Subject: {mails[singleMailKey].subject}</span><br />
            <p>{mails[singleMailKey].body}</p>
        </section>
    )
};

export default SingleMail;