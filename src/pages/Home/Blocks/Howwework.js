import React, { Component } from 'react';
import ver from "../../../images/register.png";
import tou from "../../../images/tou.png";
import work from "../../../images/work.png";


const Howwework = () => {
    return(
        <>
        <div className="row">
          <div
            className="uk-text-center hidden-sm hidden-xs hidden-md "
            style={{ fontFamily: "Dongle", marginTop: 70, fontSize: 42 }}
          >
            {" "}
            How Borrowlite <span style={{ color: "#339900" }}>works</span>
          </div>
          <div
            className="uk-text-center hidden-lg "
            style={{ fontFamily: "Dongle", marginTop: 70, fontSize: 32 }}
          >
            {" "}
            How Borrowlite <span style={{ color: "#339900" }}>works</span>
          </div>
        </div>


        <div className="row container uk-text-center uk-margin-large-bottom ">
          <div className="col-lg-4 col-xs-12 uk-margin-small-top uk-margin-small-bottom">
            <div className="col-lg-3 col-xs-3 "></div>
            <div className="col-lg-6  col-xs-6" style={{ textAlign: "center" }}>
              <div
                style={{
                  marginBottom: 20,
                  borderRadius: 360,
                  height: 150,
                  width: 150,
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
                className=" uk-flex uk-card uk-card-default uk-card-small uk-card-body"
              >
                <img src={ver} style={{ width: 30, height: 30 }} />
              </div>
              <span
                style={{
                  lineHeight: 1,
                  fontFamily: "Dongle",
                  color: "#22292E",
                  fontSize: 32,
                  borderRadius: 360,
                  height: 100,
                  width: 100,
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                REGISTER
              </span>
            </div>
            <div className="col-lg-3 col-xs-3"></div>
          </div>

          <div className="col-lg-4 col-xs-12 uk-margin-small-top uk-margin-small-bottom">
            <div className="col-lg-3 col-xs-3 "></div>
            <div className="col-lg-6  col-xs-6" style={{ textAlign: "center" }}>
              <div
                style={{
                  marginBottom: 20,
                  borderRadius: 360,
                  height: 150,
                  width: 150,
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
                className=" uk-flex uk-card uk-card-default uk-card-small uk-card-body"
              >
                <img src={tou} style={{ width: 30, height: 30 }} />
              </div>
              <span
                style={{
                  lineHeight: 1,
                  fontFamily: "Dongle",
                  color: "#22292E",
                  fontSize: 32,
                  borderRadius: 360,
                  height: 100,
                  width: 100,
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                CHOOSE TO BORROW BUY
              </span>
            </div>
            <div className="col-lg-3 col-xs-3"></div>
          </div>

          <div className="col-lg-4 col-xs-12 uk-margin-small-top uk-margin-small-bottom">
            <div className="col-lg-3 col-xs-3 "></div>
            <div className="col-lg-6  col-xs-6" style={{ textAlign: "center" }}>
              <div
                style={{
                  marginBottom: 20,
                  borderRadius: 360,
                  height: 150,
                  width: 150,
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
                className=" uk-flex uk-card uk-card-default uk-card-small uk-card-body"
              >
                <img src={work} style={{ width: 30, height: 30 }} />
              </div>
              <span
                style={{
                  lineHeight: 1,
                  fontFamily: "Dongle",
                  color: "#22292E",
                  fontSize: 32,
                  borderRadius: 360,
                  height: 100,
                  width: 100,
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                GET YOUR TOKEN
              </span>
            </div>
            <div className="col-lg-3 col-xs-3"></div>
          </div>
        </div>


        </>

    )
}
export default Howwework;
