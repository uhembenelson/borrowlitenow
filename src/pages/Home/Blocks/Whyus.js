import React, { Component } from 'react';
import card from "../../../images/card.png";
import pocket from "../../../images/pocket.png";
import bell from "../../../images/bell.png";
import time from "../../../images/time.png";


const Whyus = () => {
     return(
        <div className="row ">
        <div
          className="uk-text-center hidden-sm hidden-xs hidden-md "
          style={{ fontFamily: "Dongle", marginTop: 70, fontSize: 42 }}
        >
          {" "}
          Why Choose <span style={{ color: "#339900" }}>Borrowlite</span>
        </div>
        <div
          className="uk-text-center hidden-lg "
          style={{ fontFamily: "Dongle", marginTop: 70, fontSize: 32 }}
        >
          {" "}
          Why Choose <span style={{ color: "#339900" }}>Borrowlite</span>
        </div>

        <div
          className="uk-margin-large-top"
          style={{
            justifyContent: "space-around",
            alignContent: "center",
            alignItem: "center",
            justifyItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="col-lg-4 col-md-4 col-ms-12 col-xs-12 uk-text-center uk-margin-top uk-margin-bottom ">
            <div
              style={{ borderRadius: 5 }}
              className="uk-card-body uk-card-default uk-card-small uk-margin-small-left uk-margin-small-right"
            >
              <img src={card} style={{ width: 32, height: 32 }} />
              <p style={{ fontSize: 25, fontFamily: "Dongle" }}>
                <span style={{ color: "#22292E" }}>Borrow now,</span>{" "}
                <span style={{ color: "#450ACC" }}>pay back later</span>
              </p>
              <p style={{ color: "#22292E" }}>
                You can get electricity with an loan and pay back later in 14
                days
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-ms-12 col-xs-12 uk-text-center uk-margin-top uk-margin-bottom ">
            <div
              style={{ borderRadius: 5 }}
              className="uk-card-body uk-card-default uk-card-small uk-margin-small-left uk-margin-small-right"
            >
              <img src={pocket} style={{ width: 32, height: 32 }} />
              <p style={{ fontSize: 25, fontFamily: "Dongle" }}>
                <span style={{ color: "#450ACC" }}>Save up</span>{" "}
                <span style={{ color: "#22292E" }}>unit for rainy days</span>{" "}
              </p>
              <p style={{ color: "#22292E" }}>
                You can apply the energy saver functionality when buying
                electricity
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-ms-12 col-xs-12 uk-text-center uk-margin-top uk-margin-bottom ">
            <div
              style={{ borderRadius: 5 }}
              className="uk-card-body uk-card-default uk-card-small uk-margin-small-left uk-margin-small-right"
            >
              <img src={bell} style={{ width: 32, height: 32 }} />
              <p style={{ fontSize: 25, fontFamily: "Dongle" }}>
                <span style={{ color: "#22292E" }}>Set</span>{" "}
                <span style={{ color: "#450ACC" }}>Reminders</span>
              </p>
              <p style={{ color: "#22292E" }}>
                Let us remind you to buy electricity when your unit is almost
                out.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-ms-12 col-xs-12 uk-text-center uk-margin-top uk-margin-bottom ">
            <div
              style={{ borderRadius: 5 }}
              className="uk-card-body uk-card-default uk-card-small uk-margin-small-left uk-margin-small-right"
            >
              <img src={time} style={{ width: 32, height: 32 }} />
              <p style={{ fontSize: 25, fontFamily: "Dongle" }}>
                <span style={{ color: "#22292E" }}>24/7</span>{" "}
                <span style={{ color: "#450ACC" }}>Customer Support</span>
              </p>
              <p style={{ color: "#22292E" }}>
                Enjoy our Customer Service and have your issues resolved
                anytime. Day and Night.
              </p>
            </div>
          </div>
        </div>
      </div>

      
     )
}
export default Whyus;