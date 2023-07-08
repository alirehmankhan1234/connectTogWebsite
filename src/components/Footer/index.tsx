import classes from "./index.module.scss";
import Image from "next/image";
import newconnectSecond from "@/assets/newconnectSecond.png";
import Button from "../Button";
import appleLogo from "@/assets/Apple-Logo.png"
import androidLogo from "@/assets/android-logo.png"

const Footer = () => {

  const androidDownloadContent = <div className={classes.downloadContent}>
    <span style={{margin: 'auto'}}>
      <Image
        src={androidLogo}
        alt="android"
        width={40}
        height={40}
       />
    </span>
    <span>Get it on Google Play</span>
  </div>

const appleDownloadContent = <div className={classes.downloadContent}>
<span style={{margin: 'auto'}}>
  <Image
    src={appleLogo}
    alt="android"
    width={90}
    height={90}
   />
</span>
<span>Download on The App Store</span>
</div>

  return (
    <div className={classes.footerContainer}>
      <nav>
        <div className={classes.footerDownloadBtnContainer}>
          <a href="/" className="flex items-center">
            <Image
              src={newconnectSecond}
              alt="connect-tog"
              width={100}
              height={100}
            />
          </a>
          <Button text={appleDownloadContent} handleClick={()=>{}}  styling={classes.downloadBtn} />
          <Button text={androidDownloadContent} handleClick={()=>{}} styling={classes.downloadBtn} />
        </div>
      </nav>
      <nav className={classes?.footerItemContainer}>
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                All rights reserved. ConnectTog © 2023
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
