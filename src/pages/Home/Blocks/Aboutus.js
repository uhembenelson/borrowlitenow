import React, { Component } from "react";
import { Link } from "react-router-dom";
import UIkit from 'uikit'

const Aboutus = () => {
  return (
    <div className="row container">
      <div
        className="col-lg-6 col-xs-12 col-sm-12"
        style={{ textAlign: "center" }}
      >
        <div
          style={{
            fontFamily: "Dongle",
            fontSize: 32,
            color: "#22292E",
            marginBottom: 10,
          }}
        >
          About Us
        </div>
        <div
          className="uk-text-center hidden-sm hidden-xs hidden-md "
          style={{ fontFamily: "Dongle", fontSize: 42 }}
        >
          {" "}
          We are the <span style={{ color: "#339900" }}>best in your city</span>
        </div>
        <div
          className="uk-text-center hidden-lg "
          style={{ fontFamily: "Dongle", fontSize: 32 }}
        >
          {" "}
          How Borrowlite{" "}
          <span style={{ color: "#339900" }}>best in your city</span>
        </div>
        <div
          className="uk-text-left uk-margin-bottom"
          style={{
            color: "#22292E",
            fontFamily: "Dongle",
            fontSize: 22,
            fontWeight: "300",
          }}
        >
          Currently out of power? without money? Let us help you meet that
          target... With borrowlite, you can borrow electricity token now and
          pay late. learn more about borrowlite and the services we offer
        </div>

        <div className="uk-margin">
          <Link to="/About">
          <button
            style={{
              marginTop: 20,
              marginBottom: 20,
              backgroundColor: "#450acc",
              color: "white",
              fontFamily: "Dongle",
              fontSize: 20,
              borderRadius: 5,
            }}
            class=" uk-button uk-button-default uk-button-large uk-margin-right uk-width-1-3@l uk-width-1-1@s"
          >
            READ MORE
          </button>
          </Link>
        </div>
      </div>

      <div className="col-lg-6 col-xs-12 col-sm-12">
        <div
          className="row uk-text-center uk-margin-large-bottom "
          uk-grid
          uk-height-match="target: > div > .uk-card"
        >
          <div className="col-lg-6 col-xs-12 uk-margin-top">
            <div
              style={{ borderRadius: 5 }}
              className=" uk-card uk-card-body uk-card-small uk-card-default"
            >
              <div
                style={{
                  fontSize: 32,
                  fontFamily: "Dongle",
                  fontWeight: "300",
                  color: "#450ACC",
                }}
              >
                EMPHATHY
              </div>
              <div
                className="uk-text-left"
                style={{
                  fontSize: 22,
                  fontFamily: "Dongle",
                  fontWeight: "300",
                  color: "#22292E",
                }}
              >
                We treat people with respect no matter what and go over and
                beyond to feel their pain and create a solution.
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xs-12 uk-margin-top">
            <div
              style={{ borderRadius: 5 }}
              className=" uk-card uk-card-body uk-card-small uk-card-default"
            >
              <div
                style={{
                  fontSize: 32,
                  fontFamily: "Dongle",
                  fontWeight: "300",
                  color: "#450ACC",
                }}
              >
                EXCELLENCE
              </div>
              <div
                className="uk-text-left"
                style={{
                  fontSize: 22,
                  fontFamily: "Dongle",
                  fontWeight: "300",
                  color: "#22292E",
                }}
              >
                We are excellent, We reach for the highest standard possible.
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xs-12 uk-margin-top">
            <div
              style={{ borderRadius: 5 }}
              className=" uk-card uk-card-body uk-card-small uk-card-default"
            >
              <div
                style={{
                  fontSize: 32,
                  fontFamily: "Dongle",
                  fontWeight: "300",
                  color: "#450ACC",
                }}
              >
                COMMUNITY
              </div>
              <div
                className="uk-text-left"
                style={{
                  fontSize: 22,
                  fontFamily: "Dongle",
                  fontWeight: "300",
                  color: "#22292E",
                }}
              >
                We respect our consumers and we treat them as family.
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xs-12 uk-margin-top">
            <div
              style={{ borderRadius: 5 }}
              className=" uk-card uk-card-body uk-card-small uk-card-default"
            >
              <div
                style={{
                  fontSize: 32,
                  fontFamily: "Dongle",
                  fontWeight: "300",
                  color: "#450ACC",
                }}
              >
                COOLNESS
              </div>
              <div
                className="uk-text-left"
                style={{
                  fontSize: 22,
                  fontFamily: "Dongle",
                  fontWeight: "300",
                  color: "#22292E",
                }}
              >
                We are in touch with all trends and we apply the positive ones
                to publicize our brand.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
