"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import CarLoader from "@/components/loader";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import classes from "./home.module.scss";
import { useRouter } from "next/navigation";
import homeBanner from "../assets/homeBanner.jpg";
import Carousel from "../components/Carousel";
import Card from "../components/Card"
import { IWhyChooseUsPoints, IHowItWorks } from "../interfaces/IWhyChooseUsPoints";

const LoaderWithText = () => {
  const router = useRouter();

  return (
    <>
      <div className={classes.logoContainer}>
        <div className={classes.logo}>
          <CarLoader />
        </div>
        <div
          className={classes.appName}
          onClick={() => {
            router.push("/letsGetStarted");
          }}
        >
          ConnectTog
        </div>
      </div>
    </>
  );
};

const WhyChooseUs = () => {
  const whyChooseUsPoints: IWhyChooseUsPoints[] = [
    {
      heading: "Cost Savings",
      desc: `Carpooling allows you to split the costs of fuel, tolls, and parking expenses with your fellow travelers. By sharing the expenses, you can significantly reduce your transportation costs and put more money back in your pocket.`,
    },
    {
      heading: "Reduce Your Carbon Footprint",
      desc: `By carpooling, you'll contribute to a greener environment. Sharing a ride means fewer cars on the road, resulting in reduced emissions and air pollution.`,
    },
    {
      heading: "Eco-Friendly Solution",
      desc: `Carpooling contributes to reducing carbon emissions and environmental impact. By combining trips and optimizing routes, we can collectively make a positive impact on our planet by reducing pollution and promoting sustainability.`,
    },
    {
      heading: "Community Building",
      desc: `Carpooling creates opportunities to connect with people in your area and build meaningful relationships. It's a chance to meet new friends, network, and expand your social circle while traveling together.`,
    },
    {
      heading: "Convenience and Flexibility",
      desc: `Our user-friendly platform makes it easy to find and join carpool groups that align with your travel needs. With a range of options available, you can choose the most convenient pick-up and drop-off locations and customize your travel schedule to fit your lifestyle.`,
    },
  ];

  return (
    <div className={classes?.whyChooseUs} id='whyChooseUs'>
      <div className={classes?.whyChooseUsHeading}>Why Choose Us?</div>
      <div className={classes?.carousalContainer}>
        <Carousel totalItems={whyChooseUsPoints.length} loop>
          {whyChooseUsPoints?.map((el: IWhyChooseUsPoints, idx: number) => {
            return (
              <div className="relative h-64 flex-[0_0_100%]" key={idx}>
                {/* use object-cover + fill since we don't know the height and width of the parent */}
                <div className={classes.whyChooseUsCarousalItem}>
                  <div className={classes.whyChooseUsCarousalItemHeading}>{el?.heading}</div>
                  <p className={classes.whyChooseUsCarousalItemDesc}>{el?.desc}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};


const HowItWorks = ()=>{
  const howItWorks: IHowItWorks[] = [
    {
      heading: "Sign Up",
      desc: `Create an account on our platform, providing your basic information and preferences. You can specify your commuting or travel routes, time preferences, and vehicle details if you're willing to drive.`,
    },
    {
      heading: "Search or Create Rides",
      desc: `Browse through existing rides posted by other members or create your own ride. Specify the departure and destination locations, date, time, and any other relevant details.`,
    },
    {
      heading: "Connect and Coordinate",
      desc: `Once you find a ride or receive requests from other members, use our messaging system to communicate and coordinate the details. Discuss pick-up points, drop-off locations, and any special requirements.`,
    },
    {
      heading: "Enjoy the Ride",
      desc: `Carpooling creates opportunities to connect with people in your area and build meaningful relationships. It's a chance to meet new friends, network, and expand your social circle while traveling together.`,
    },
    {
      heading: "Share Costs",
      desc: `At the end of the trip, divide the total cost of the ride among the passengers. Our platform provides an automated payment system to make it easy and transparent for everyone.
      Join our carpooling community today and start enjoying the benefits of shared transportation.`,
    },
  ];
  return (
  <div className={classes.howItWorks} id='howItWorks'>
    <div className={classes.howItWorksHeading}>How It Works:</div>
    <div className={classes.howItWorksSteps}>
      {howItWorks?.map((el: IHowItWorks, idx: number)=><Card heading={el?.heading} desc={el?.desc} key={idx} />)}
    </div>
  </div>
  )
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 0);
  }, []);

  return (
    <>
      <NavBar />
      {!isLoaded ? (
        <LoaderWithText />
      ) : (
        <div className={classes.home}>
          <div className={classes.rideSharingImgContainer}>
            <Image
              src={homeBanner}
              alt="ride sharing"
              width={1000}
              height={500}
            />
            <div className={classes.rideSharingContent}>
              <div className={classes.heading}>
                Welcome to ConnectTog: Your Trusted Carpooling Service
              </div>
              <br />
              <br />
              <div className={classes.desc}>
                <p>Save Time, Money, and the Environment with CommuteShare</p>
                <br />
                Are you tired of commuting alone every day? Looking for a
                cost-effective and eco-friendly way to travel? Look no further!
                CommuteShare is here to revolutionize your daily commute with
                our convenient carpooling service.
              </div>
            </div>
          </div>
          <WhyChooseUs />
          <HowItWorks />
          <Footer />
        </div>
      )}
    </>
  );
}
