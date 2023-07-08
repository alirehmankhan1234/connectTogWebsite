
"use client";
import classes from "./login.module.scss";
import Button from "../../components/Button";
import CarLogo from "@/assets/CarLogo";
import Facebook from "@/assets/facebook";
import Twitter from "@/assets/twitter";
import Google from "@/assets/google";
import Key from "@/assets/key";
import eye from "@/assets/eye.jpg";
import strikedEye from "@/assets/strikedEye.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const ThirdPartyLogin = ()=>{
  return (<div className={classes.thirdPartyLinksContainer}>
    <div>
      <Link href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
        <Facebook />
      </Link>
    </div>
    <div>
      <Link href="https://twitter.com/" rel="noopener noreferrer" target="_blank">
        <Twitter />
      </Link>
    </div>
    <div>
      <Link href="https://google.com" rel="noopener noreferrer" target="_blank">
        <Google />
      </Link>
    </div>
  </div>)
}

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleEyeIconClick = ()=>{
    setShowPassword(!showPassword)
  }

  return (
    <div className={classes.loginContainer}>
      <div className={classes.logoContainer}>
        <div className={classes.logo}>
          <CarLogo />
        </div>
        <div
          className={classes.appName}
          onClick={() => {
            router.push("/");
          }}
        >
          CarPool
        </div>
      </div>
      <div className={classes.divider}>{""}</div>
      <div className={classes.loginForm}>
        <div className={classes.fieldWrapper}>
          <input type="email" placeholder="Email" className={classes.inputField} />
        </div>
        <div className={`${classes.fieldWrapper} ${classes.passwordField}`} style={{marginTop: '1.375rem'}}>
          <span className={classes.keyIcon}><Key /></span>
          <img className={classes.eyeIcon} src={showPassword? eye?.src: strikedEye?.src} onClick={handleEyeIconClick} alt='eye' />
          <input type={showPassword? "text":"password"} placeholder="Password" className={classes.inputField} />
        </div>
        <div className={`${classes.fieldWrapper} ${classes.rememberMeContainer}`}>
          <div className={classes.rememberMeCheckbox}>
            <input type="checkbox"  id="rememberMe" name="rememberMe" value="true"/>
            <label htmlFor="rememberMe"> Remember me</label><br></br>
          </div>
          <div className={classes.forgotPassowrdContainer}>
            Forgot your password
          </div>
        </div>
        <div className={classes.fieldWrapper} style={{marginTop: '3.20rem'}}>
          <Button text={"JOIN"} handleClick={() => {}}  styling={classes.joinBtn} />
        </div>
      </div>
      <div className={classes.orDividerContainer}>
        <div className={classes.orDivider}>{''}</div>
        <div>or</div>
        <div className={classes.orDivider}>{''}</div>
      </div>
      <ThirdPartyLogin />
    </div>
  );
}
