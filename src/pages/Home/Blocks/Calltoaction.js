import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import bg from "../../../images/mainimage.png";

const Calltoaction = () => {
    return (
        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            {/* mobile */}
            <div class="uk-hidden@s">
              <div
                class=""
                style={{
                  color: "#339900",
                  fontFamily: "Dongle",
                  fontSize: 60,
                  fontWeight: "800",
                  lineHeight: 1,
                }}
              >
                Borrow light now
              </div>
              <div
                class=""
                style={{
                  color: "#450acc",
                  marginTop: -20,
                  fontFamily: "Dongle",
                  fontSize: 60,
                  fontWeight: "800",
                }}
              >
                pay back later
              </div>

              <div
                class=""
                style={{
                  color: "#22292E",
                  lineHeight: "1",
                  fontFamily: "Dongle",
                  fontSize: 25,
                  fontWeight: "800",
                }}
              >
                Currently out of power? without money? let us help you meet that
                target.. With borrowlite you can borrow electricity token now
                and pay later
              </div>
              <img
                className="hidden-lg hidden-md"
                src={bg}
                style={{
                  marginTop: -50,
                  justifyContent: "center",
                  alignContent: "center",
                }}
              />
              <div class="uk-margin">
                <button
                  style={{
                    backgroundColor: "#339900",
                    color: "white",
                    fontFamily: "Dongle",
                    fontSize: 20,
                    borderRadius: 5,
                  }}
                  class=" uk-button uk-button-default uk-button-large uk-margin-right uk-width-1-3@l uk-width-1-1@s "
                >
                  Borrow light
                </button>
                <button
                  style={{
                    backgroundColor: "#450acc",
                    color: "white",
                    fontFamily: "Dongle",
                    fontSize: 20,
                    borderRadius: 5,
                  }}
                  class=" uk-button uk-button-default uk-button-large uk-margin-right uk-width-1-3@l uk-width-1-1@s"
                >
                  Buylight
                </button>
              </div>
            </div>

            <div class="visible-lg-block uk-margin-top">
              <div
                class=""
                style={{
                  color: "#339900",
                  fontFamily: "Dongle",
                  fontSize: 100,
                  fontWeight: "800",
                }}
              >
                Borrow light now
              </div>
              <div
                class=""
                style={{
                  color: "#450acc",
                  marginTop: -70,
                  fontFamily: "Dongle",
                  fontSize: 100,
                  fontWeight: "800",
                }}
              >
                pay back later
              </div>
              <div
                class=""
                style={{
                  fontFamily: "Dongle",
                  fontSize: 22,
                  color: "#22292E",
                  fontWeight: "200",
                  lineHeight: 1.2,
                }}
              >
                Currently out of power? without money? let us help you meet that
                target.. With borrowlite you can borrow electricity token now
                and pay later,{" "}
                <Link to="">
                  learn more about borrowlite and the services we offer{" "}
                </Link>
              </div>
              <div class="uk-margin uk-margin-large-top">
                <Link to="/borrowlight">
                  <button
                    style={{
                      backgroundColor: "#339900",
                      color: "white",
                      fontFamily: "Dongle",
                      fontSize: 20,
                      borderRadius: 5,
                    }}
                    class=" uk-button uk-button-default uk-button-large uk-margin-right uk-width-1-3@l uk-width-1-1@s "
                  >
                    Borrow light
                  </button>
                </Link>
                <button
                  style={{
                    backgroundColor: "#450acc",
                    color: "white",
                    fontFamily: "Dongle",
                    fontSize: 20,
                    borderRadius: 5,
                  }}
                  class=" uk-button uk-button-default uk-button-large uk-margin-right uk-width-1-3@l uk-width-1-1@s"
                >
                  Buy light
                </button>
              </div>
            </div>
          </div>

    )
}
export default Calltoaction;
