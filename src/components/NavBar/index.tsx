
import classes from './index.module.scss';
import Button from '../Button';
import { useRouter } from "next/navigation";
import Image from "next/image";
import newconnectSecond from "@/assets/newconnectSecond.png"

const NavBar = () => {
  const router = useRouter()

  const handleContactus = ()=>{
    router.push("/contactUs");
  }

  return (
    <>
      <nav className={classes.navBarContainer}>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="/" className="flex items-center">
            <Image src={newconnectSecond} alt="connect-tog"  width={100} height={100}/>
          </a>
          <div className="flex items-center">
            <Button text={"Contact Us"} handleClick={handleContactus} styling={classes.contactUsBtn} />
          </div>
        </div>
      </nav>
      <nav className={classes?.navBar}>
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <a
                  href="/"
                  className="hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#whyChooseUs"
                  className="hover:underline"
                >
                  Why Choose Us?
                </a>
              </li>
              <li>
                <a
                  href="#howItWorks"
                  className="hover:underline"
                >
                  How It Works
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
