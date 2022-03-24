import { React, useEffect, useState, useContext } from "react";
import MainNavigation from "../../components/layout/MainNavigation";
import bg from "../../images/mainimage.png";
import { Outlet, Link } from "react-router-dom";
import Popup from "react-animated-popup";
import axios from "axios";
import swal from "sweetalert";
import { Dots, Spinner } from "react-activity";
import { Helmet } from "react-helmet-async";



import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { UserContext } from "../../components/context/UserContext";
import Footer from "./Blocks/Footer";
import Discos from "./Blocks/Discos";
import Comments from "./Blocks/Comments";
import Aboutus from "./Blocks/Aboutus";
import Howwework from "./Blocks/Howwework";
import Whyus from "./Blocks/Whyus";
import Calltoaction from "./Blocks/Calltoaction";
import Action from "./Blocks/Action";

const Index = () => {
  const { authenticated, user } = useContext(UserContext);
  const [userdata, setUserdata ] = useState(user)

  const [wait, setWait] = useState("over");
  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [userType, setUserType] = useState();
  const [password, setPassword] = useState();
  const [meter_number, setMeter_number] = useState();
  const [error, setError] = useState();
  const [showerror, setShowerror] = useState(false);
  const [loadingme, setLoadingme] = useState(false);
  const [showsuccess, setShowsuccess] = useState(false);
  const [success, setSuccess] = useState();
  const [visible, setVisible] = useState(false);

  const Showpop = () => {
    return (
      <>
        <Popup visible={visible} onClose={() => setVisible(false)}>
          <div class="uk-inline">
            <div
              style={{ color: "red" }}
              class="  uk-form-icon"
              uk-icon="icon: warning; ratio: 2"
            ></div>
            <h1
              style={{ fontFamily: "Dongle", color: "red" }}
              class="uk-margin-large-left uk-align-center"
            >
              there was an error
            </h1>
          </div>
          <p
            style={{
              marginTop: -20,
              fontFamily: "Dongle",
              fontSize: 25,
              lineHeight: 1,
              fontWeight: 100,
            }}
          >
            {error}
          </p>
        </Popup>

        <Popup
          class="uk-margin-top"
          visible={showsuccess}
          onClose={() => setShowsuccess(false)}
        >
          <div class="uk-inline">
            <div
              style={{ color: "green" }}
              class="  uk-form-icon"
              uk-icon="icon: check; ratio: 2"
            ></div>
            <h1
              style={{ fontFamily: "Dongle", color: "green" }}
              class="uk-margin-large-left uk-align-center"
            >
              Welcome
            </h1>
          </div>
          <p
            style={{
              marginTop: -20,
              fontFamily: "Dongle",
              fontSize: 25,
              lineHeight: 1,
              fontWeight: 100,
            }}
          >
            {success}
          </p>
        </Popup>
      </>
    );
  };

  const register = () => {
    const payload = {
      fullname,
      email,
      number,
      userType,
      password,
      meter_number,
      balance: "0",
    };
    console.log(payload);
    if (fullname == undefined) {
      setError("Hello dear your full name  is required");
      setVisible(true);
    } else {
      if (email == undefined) {
        setError("Hello dear your email  is required");
        setVisible(true);
      } else {
        if (number == undefined) {
          setError("Hello dear your phone number  is required");
          setVisible(true);
        } else {
          if (meter_number == undefined) {
            setError("Hello dear your meter number is required");
            setVisible(true);
          } else {
            if (userType == undefined) {
              setError("Hello dear your user type  is required");
              setVisible(true);
            } else {
              if (password == undefined) {
                setError("Hello dear your password  is required");
                setVisible(true);
              } else {
                setLoadingme(true);
                axios
                  .post(
                    "https://borrowlight.herokuapp.com/api/v2/register/",
                    payload
                  )
                  .then(function (response) {
                    console.log(response.data);
                    if (response.data.data == "account created") {
                      setLoadingme(false);
                      setSuccess(<Welcome />);
                      setShowsuccess(true);
                      setEmail("");
                      setFullname("");
                      setMeter_number("");
                      setNumber("");
                      setUserType("");
                    } else {
                      setLoadingme(false);
                      setError(`${response.data.msg}`);
                      setVisible(true);
                      console.log("this is me", response.data.msg);
                    }
                  })
                  .catch((Error) => {
                    setLoadingme(false);
                    if (Error == "Network Error") {
                      setLoadingme(false);
                      setError(
                        "there seem to be a network error, please check your connection"
                      );
                      setVisible(true);
                    }
                  });
              }
            }
          }
        }
      }
    }
  };

  const Welcome = () => {
    return (
      <div>
        <p>
          We’re thrilled to have you join us at borrowlite, we will send you a
          text message or an email with your token when it's generated
        </p>
        follow us on our social media platforms while you wait..
        <p>
          <a
            href="https://www.twitter.com/borrowlite"
            class="uk-icon-button uk-margin-small-right"
            uk-icon="twitter"
          ></a>
          <a
            href="https://www.facebook.com/borrowlite"
            class="uk-icon-button  uk-margin-small-right"
            uk-icon="facebook"
          ></a>
          <a
            href="https://www.instagram.com/borrowlite"
            class="uk-icon-button"
            uk-icon="instagram"
          ></a>
        </p>
      </div>
    );
  };

  return (
    <>
      <body class="container">
        <div class="row">
          {
            authenticated === true ? (
              <Action userdata = { userdata }/>
            ):(
              <Calltoaction/>
            )
          }
         

          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
            <img
              className="hidden-sm hidden-xs"
              src={bg}
              style={{
                marginTop: -100,
                justifyContent: "center",
                alignContent: "center",
                marginLeft: 80,
              }}
            />
          </div>


        </div>
        <Whyus/> 
       <Howwework/> 
         <Aboutus /> 
        <Comments />
        <Discos />
      </body>
      {/* this is the footer area */}
      <Footer />
    </>
  );
};

export default Index;
