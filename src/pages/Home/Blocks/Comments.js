import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import instagram from "../../../images/instagram.png";
import twitter from "../../../images/twitter.png";
import quo from "../../../images/quo.png";

const Comments = () => {
  return (
    <div className="row uk-margin-bottom">
      <div className="col-lg-5 col-xs-12 ">
        <div
          className="uk-flex"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <img src={quo} style={{ width: 270, height: 290 }} />
        </div>
        <div
          className="uk-flex"
          style={{
            textAlign: "left",
            marginTop: -170,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className=" uk-text-left hidden-sm hidden-xs hidden-md "
            style={{ lineHeight: 1, fontFamily: "Dongle", fontSize: 42 }}
          >
            {" "}
            What Clients{" "}
            <span style={{ color: "#339900" }}>
              are Saying
              <br />
              About us?
            </span>
          </div>
          <div
            className="uk-text-center hidden-lg "
            style={{ fontFamily: "Dongle", fontSize: 32 }}
          >
            {" "}
            What Clients{" "}
            <span style={{ color: "#339900" }}>are Saying About us?</span>
          </div>
        </div>
      </div>
      <div
        style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}
        className=" uk-margin-large-top uk-margin-bottom col-lg-7 col-xs-12 uk-card uk-card-body uk-card-small uk-card-default"
      >
        <Carousel emulateTouch="true">
          <div className="row uk-text-left uk-margin-top  ">
            <div className="uk-margin-left">
              <img
                src={instagram}
                style={{ width: 26, height: 26, marginRight: 10 }}
              />{" "}
              @Khairy__a
            </div>
            <div
              className="uk-margin-bottom uk-margin-left uk-margin-right"
              style={{ fontFamily: "Dongle", fontSize: 22, fontWeight: "300" }}
            >
              “ For many, debt collection can seem both scary and serious, and
              some companies refuse to activate an external collection process
              for fear of damaging customer relationships “
            </div>
          </div>

          <div className="row uk-text-left uk-margin-top ">
            <div className="uk-margin-left">
              <img
                src={twitter}
                style={{ width: 26, height: 26, marginRight: 10 }}
              />{" "}
              @Khairy__a
            </div>
            <div
              className="uk-margin-bottom uk-margin-left uk-margin-right"
              style={{ fontFamily: "Dongle", fontSize: 22, fontWeight: "300" }}
            >
              “ For many, debt collection can seem both scary and serious, and
              some companies refuse to activate an external collection process
              for fear of damaging customer relationships “
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default Comments;
