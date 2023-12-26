import { createPortal } from 'react-dom';

import gLogo from '/images/google.png';
import mailLogo from '/images/emailIcon.jpg';
import closeBtn from '/images/closeBtn.jpg';
import {useState} from 'react';
import signupCss from './Signup.module.css';
import EnterOTP from '../../Auth/EnterOTP/EnterOTP';

let Signup = ({ setAuth }) => {
    const [phone, setPhone] = useState();
    let [otpModal, setOTPModal] = useState(false);
    let [loggedin, setLoggedIn] = useState(false)
    
    const onPhoneChange = () => {
        e.PreventDefault();
        debugger;
       // setPhone(e.target.value);
    }
    let loginDiv = !otpModal ? <div className={signupCss.outerDiv}>
        <div className={signupCss.modal}>
            <div className={signupCss.header}>
                <span className={signupCss.ttl}>Signup</span>
                <span className={signupCss.closeBtn} onClick={() => setAuth({ closed: true, login: false, signup: false })}>
                    <img className={signupCss.closeBtnImg} src={closeBtn} alt="close button" />
                </span>
            </div>
            <div className={signupCss.lgBox}>
                <input className={signupCss.inpBox} type="text" placeholder='Full Name ...' />
                <input className={signupCss.inpBox} type="email" placeholder='Phone ...' onChange={(e) => setPhone(e.target.value)}/>
                <span className={signupCss.termsTxt}>
                    <input type="checkbox" name="accpect" id="accpect" className={signupCss.checkBox} />
                    <span>
                        I agree to GloboBuck's <a href="" className={signupCss.termaAnchor}>Terms of Service, Privacy Policy</a> and <a href="" className={signupCss.termaAnchor}>Content Policies</a>
                    </span>
                </span>
                <button className={phone?.length === 10 ? [signupCss.btn, signupCss.Sbtn].join(" ") : signupCss.btn} onClick={()=> phone?.length === 10 ? setOTPModal(true) : ""}>Create Account</button>
            </div>
            {/* <div className={signupCss.orBreak}><span className={signupCss.orBreakText}>or</span></div>
            <div className={signupCss.socialSignupBox}>
                <img className={signupCss.icon} src={gLogo} alt="google login" />
                Continue with Google
            </div> */}
            <hr className={signupCss.break} />
            <div className={signupCss.newToZomato}>Already have an account? <div className={signupCss.createAcc} onClick={() => setAuth({ closed: false, login: true, signup: false })} >Log in</div></div>
        </div>
    </div> :  <EnterOTP setModal={setOTPModal} setLoggedIn={setLoggedIn} setAuth={setAuth} />
    return createPortal(loginDiv, document.getElementById('modal'));
}

export default Signup;