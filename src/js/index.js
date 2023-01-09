//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let num1 = [0, 0, 0, 0, 0, 0];
let check = true;
setInterval(function() {
            num1[5]++;
            if (num1[5] > 9) {
                num1[4]++;
                num1[5] = 0;
            }
            if (num1[4] > 9) {
                num1[3]++;
                num1[4] = 0
            }
            if (num1[3] > 9) {
                num1[2]++;
                num1[3] = 0
            }
            if (num1[2] > 9) {
                num1[1]++;
                num1[2] = 0
            }
            if (num1[1] > 9) {
                num1[0]++;
                num1[1] = 0
            }
            const stopTimer = () => {
                check = false
            };
            //render your react application
            ReactDOM.render( < Home numero1 = {
                    num1[0]
                }
                numero2 = {
                    num1[1]
                }
                numero3 = {
                    num1[2]
                }
                numero4 = {
                    num1[3]
                }
                numero5 = {
                    num1[4]
                }
                numero6 = {
                    num1[5]
                }
                />, document.querySelector("#app"));
            }, 500);