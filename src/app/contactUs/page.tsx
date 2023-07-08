
'use client';
import Link from "next/link";
import classes from "./contactUs.module.scss";
import Button from "@/components/Button";


export default function ContactUs() {

  const handleSendMessage = ()=>{
    console.log('')
  }

  return (
    <>
      <div className={classes.contactUsScreen}>
        <div className={classes.formContainer}>
          <h2 className={classes.heading}>Contact Us</h2>
          <form action="#" method="POST">
            <div className={classes.formGroup}>
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={classes.formGroup}>
              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={classes.formGroup}>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <div className={classes.formGroup}>
              <Button text={"Send Message"} handleClick={handleSendMessage} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
