import { useState } from "react";
import { createPortal } from 'react-dom';

import gLogo from '/images/google.png';
import mailLogo from '/images/emailIcon.jpg';
import closeBtn from '/images/closeBtn.jpg';

import loginCss from './Login.module.css';

import EnterOTP from '../../Auth/EnterOTP/EnterOTP';
import auth from './../../../firebase';
import "firebase/app";
import "firebase/auth";
import firebase from "firebase/compat/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';


let Login = ({ setAuth, setLoggedIn }) => {
    const [phone, setPhone] = useState();
    const [verificationId, setVerificationId] = useState(null);
    let [otpModal, setOTPModal] = useState(false);

    //const appVerifier = window.recaptchaVerifier;
    const clickSendOTP = async () => {
        try {
            debugger;

            //const auth = getAuth();
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                'size': 'invisible',
                'callback': (response) => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    // onSignInSubmit();
                    debugger;                 
                },
                'expired-callback': () => {
                    // Reset reCAPTCHA?
                  }
            });

            const appVerifier = window.recaptchaVerifier;
            signInWithPhoneNumber(auth, "+91" + phone, appVerifier)
                .then((confirmationResult) => {
                    // SMS sent. Prompt user to type the code from the message, then sign the
                    // user in with confirmationResult.confirm(code).
                    debugger;
                    window.confirmationResult = confirmationResult;
                    // ...
                }).catch((error) => {
                    // Error; SMS not sent
                    // ...
                    const msg = error.message;
                    debugger;
                });

            phone?.length === 10 ? setOTPModal(true) : "";

        } catch (error) {
            console.error("Error sending OTP:", error.message);
        }

    };

    let loginDiv = !otpModal ? <div className={loginCss.outerDiv}>
        <div className={loginCss.modal}>
            <div className={loginCss.header}>
                <span className={loginCss.ttl}>Login</span>
                <span className={loginCss.closeBtn} onClick={() => setAuth({ closed: true, login: false, signup: false })}>
                    <img className={loginCss.closeBtnImg} src={closeBtn} alt="close button" />
                </span>
            </div>
            <div className={loginCss.lgBox}>
                <input className={loginCss.phoneInp} type="tel" placeholder='Phone number ...' onChange={(e) => setPhone(e.target.value)} required />
                <div id='recaptcha-container'></div>
                <button className={phone?.length === 10 ? [loginCss.btn, loginCss.Sbtn].join(" ") : loginCss.btn} onClick={clickSendOTP}>Send OTP</button>
            </div>
            {/* <div className={loginCss.orBreak}><span className={loginCss.orBreakText}>or</span></div>
            <div className={loginCss.socialSignupBox}>
                <img className={loginCss.icon} src={mailLogo} alt="email signup" />
                Continue with Email
            </div>
            <div className={loginCss.socialSignupBox}>
                <img className={loginCss.icon} src={gLogo} alt="google signup" />
                Continue with Google
            </div> */}
            <hr className={loginCss.break} />
            <div className={loginCss.newToZomato}>New to GloboBuck? <div className={loginCss.createAcc} onClick={() => setAuth({ closed: false, login: false, signup: true })}>Create Account</div></div>
        </div>
    </div> : <EnterOTP setModal={setOTPModal} setLoggedIn={setLoggedIn} setAuth={setAuth} />
    return createPortal(loginDiv, document.getElementById('modal'));
}

export default Login;