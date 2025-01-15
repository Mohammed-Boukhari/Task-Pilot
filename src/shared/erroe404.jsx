import React from "react";
import { Helmet } from "react-helmet-async";

const Erroe404 = () => {
  return (
    <div className="not-found parallax">
      {/* Helmet CEO To Browser */}
      <Helmet>
        <title>Page not found</title>

        <style type="text/css">{` 
          @import url("https://fonts.googleapis.com/css?family=Open+Sans|PT+Sans+Narrow");
          body {
            overflow: hidden;
            font-family: "Open Sans", sans-serif;
          }
          
          .not-found {
            position: relative;
            overflow: hidden;
            margin: 0 -20vw;
            height: 110vh;
          }
          .not-found [class*=wave] {
            position: absolute;
          }
          .not-found div {
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
          }
          .not-found div.wave-1 {
            background: url(http://res.cloudinary.com/andrewhani/image/upload/v1524501869/404/wave-1.svg);
          }
          .not-found div.wave-2 {
            background: url(http://res.cloudinary.com/andrewhani/image/upload/v1524501869/404/wave-2.svg);
          }
          .not-found div.wave-3 {
            background: url(http://res.cloudinary.com/andrewhani/image/upload/v1524501869/404/wave-3.svg);
          }
          .not-found div.wave-4 {
            background: url(http://res.cloudinary.com/andrewhani/image/upload/v1524501869/404/wave-4.svg);
          }
          .not-found div.wave-5 {
            background: url(http://res.cloudinary.com/andrewhani/image/upload/v1524501869/404/wave-5.svg);
          }
          .not-found div.wave-6 {
            background: url(http://res.cloudinary.com/andrewhani/image/upload/v1524501869/404/wave-6.svg);
          }
          .not-found div.wave-7 {
            background: url(http://res.cloudinary.com/andrewhani/image/upload/v1524501869/404/wave-7.svg);
          }
          .not-found div.sky-bg {
            background: url(http://res.cloudinary.com/andrewhani/image/upload/v1524821915/404/bg-1_gvybzk.svg);
            height: 100%;
          }
          .not-found div[class*=wave]:not(.wave-4) {
            height: calc(100% - 250px);
          }
          .not-found div.wave-4 {
            height: calc(100% - 430px);
          }
          .not-found .boat {
            position: absolute;
            top: 0;
            right: 15%;
            width: 150px;
            -webkit-animation: boat 15s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
            -moz-animation: boat 15s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
            -o-animation: boat 15s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
            animation: boat 15s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
          }
          .not-found .wave-lost {
            position: absolute;
            top: 20%;
            left: 50%;
            color: #fff;
            font-size: 20rem;
            -webkit-animation: surf 2s;
            -moz-animation: surf 2s;
            -o-animation: surf 2s;
            animation: surf 2s;
          }
          .not-found .wave-lost span {
            float: left;
            -webkit-animation: float 3s ease-in infinite;
            -moz-animation: float 3s ease-in infinite;
            -o-animation: float 3s ease-in infinite;
            animation: float 3s ease-in infinite;
          }
          .not-found .wave-lost span:nth-child(2) {
            -webkit-animation-delay: 2.5s;
            -moz-animation-delay: 2.5s;
            -o-animation-delay: 2.5s;
            animation-delay: 2.5s;
          }
          .not-found .wave-lost span:nth-child(3) {
            -webkit-animation-delay: 4.5s;
            -moz-animation-delay: 4.5s;
            -o-animation-delay: 4.5s;
            animation-delay: 4.5s;
          }
          .not-found .wave-island {
            position: absolute;
            top: 130px;
            left: 20%;
            padding: 10px;
            width: 170px;
          }
          .not-found .wave-message {
            position: absolute;
            bottom: 100px;
            left: 50%;
            padding-right: 50%;
            height: auto !important;
            color: #fff;
            font-size: 3rem;
            text-align: left;
            -webkit-animation: wave-message 1s;
            -moz-animation: wave-message 1s;
            -o-animation: wave-message 1s;
            animation: wave-message 1s;
          }
          
          @-webkit-keyframes boat {
            0% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(-15deg) translate3d(400px, 0px, 0px);
              -moz-transform: rotate(-15deg) translate3d(400px, 0px, 0px);
              -ms-transform: rotate(-15deg) translate3d(400px, 0px, 0px);
              -o-transform: rotate(-15deg) translate3d(400px, 0px, 0px);
              transform: rotate(-15deg) translate3d(400px, 0px, 0px);
            }
            20% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(15deg) translate3d(-20vw, 0, 0px);
              -moz-transform: rotate(15deg) translate3d(-20vw, 0, 0px);
              -ms-transform: rotate(15deg) translate3d(-20vw, 0, 0px);
              -o-transform: rotate(15deg) translate3d(-20vw, 0, 0px);
              transform: rotate(15deg) translate3d(-20vw, 0, 0px);
            }
            25% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(-7deg) translate3d(-25vw, 0, 0px);
              -moz-transform: rotate(-7deg) translate3d(-25vw, 0, 0px);
              -ms-transform: rotate(-7deg) translate3d(-25vw, 0, 0px);
              -o-transform: rotate(-7deg) translate3d(-25vw, 0, 0px);
              transform: rotate(-7deg) translate3d(-25vw, 0, 0px);
            }
            50% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(5deg) translate3d(-50vw, 0, 0px);
              -moz-transform: rotate(5deg) translate3d(-50vw, 0, 0px);
              -ms-transform: rotate(5deg) translate3d(-50vw, 0, 0px);
              -o-transform: rotate(5deg) translate3d(-50vw, 0, 0px);
              transform: rotate(5deg) translate3d(-50vw, 0, 0px);
            }
            60% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(-1deg) translate3d(-60vw, 0, 0px);
              -moz-transform: rotate(-1deg) translate3d(-60vw, 0, 0px);
              -ms-transform: rotate(-1deg) translate3d(-60vw, 0, 0px);
              -o-transform: rotate(-1deg) translate3d(-60vw, 0, 0px);
              transform: rotate(-1deg) translate3d(-60vw, 0, 0px);
            }
            100% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(2deg) translate3d(-100vw, 0, 0px);
              -moz-transform: rotate(2deg) translate3d(-100vw, 0, 0px);
              -ms-transform: rotate(2deg) translate3d(-100vw, 0, 0px);
              -o-transform: rotate(2deg) translate3d(-100vw, 0, 0px);
              transform: rotate(2deg) translate3d(-100vw, 0, 0px);
            }
          }
          @-moz-keyframes boat {
            0% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(-15deg) translate3d(400px, 0px, 0px);
              -moz-transform: rotate(-15deg) translate3d(400px, 0px, 0px);
              -ms-transform: rotate(-15deg) translate3d(400px, 0px, 0px);
              -o-transform: rotate(-15deg) translate3d(400px, 0px, 0px);
              transform: rotate(-15deg) translate3d(400px, 0px, 0px);
            }
            20% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(15deg) translate3d(-20vw, 0, 0px);
              -moz-transform: rotate(15deg) translate3d(-20vw, 0, 0px);
              -ms-transform: rotate(15deg) translate3d(-20vw, 0, 0px);
              -o-transform: rotate(15deg) translate3d(-20vw, 0, 0px);
              transform: rotate(15deg) translate3d(-20vw, 0, 0px);
            }
            25% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(-7deg) translate3d(-25vw, 0, 0px);
              -moz-transform: rotate(-7deg) translate3d(-25vw, 0, 0px);
              -ms-transform: rotate(-7deg) translate3d(-25vw, 0, 0px);
              -o-transform: rotate(-7deg) translate3d(-25vw, 0, 0px);
              transform: rotate(-7deg) translate3d(-25vw, 0, 0px);
            }
            50% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(5deg) translate3d(-50vw, 0, 0px);
              -moz-transform: rotate(5deg) translate3d(-50vw, 0, 0px);
              -ms-transform: rotate(5deg) translate3d(-50vw, 0, 0px);
              -o-transform: rotate(5deg) translate3d(-50vw, 0, 0px);
              transform: rotate(5deg) translate3d(-50vw, 0, 0px);
            }
            60% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(-1deg) translate3d(-60vw, 0, 0px);
              -moz-transform: rotate(-1deg) translate3d(-60vw, 0, 0px);
              -ms-transform: rotate(-1deg) translate3d(-60vw, 0, 0px);
              -o-transform: rotate(-1deg) translate3d(-60vw, 0, 0px);
              transform: rotate(-1deg) translate3d(-60vw, 0, 0px);
            }
            100% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(2deg) translate3d(-100vw, 0, 0px);
              -moz-transform: rotate(2deg) translate3d(-100vw, 0, 0px);
              -ms-transform: rotate(2deg) translate3d(-100vw, 0, 0px);
              -o-transform: rotate(2deg) translate3d(-100vw, 0, 0px);
              transform: rotate(2deg) translate3d(-100vw, 0, 0px);
            }
          }
          @-o-keyframes boat {
            0% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(-15deg) translate3d(400px, 0px, 0px);
              -moz-transform: rotate(-15deg) translate3d(400px, 0px, 0px);
              -ms-transform: rotate(-15deg) translate3d(400px, 0px, 0px);
              -o-transform: rotate(-15deg) translate3d(400px, 0px, 0px);
              transform: rotate(-15deg) translate3d(400px, 0px, 0px);
            }
            20% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(15deg) translate3d(-20vw, 0, 0px);
              -moz-transform: rotate(15deg) translate3d(-20vw, 0, 0px);
              -ms-transform: rotate(15deg) translate3d(-20vw, 0, 0px);
              -o-transform: rotate(15deg) translate3d(-20vw, 0, 0px);
              transform: rotate(15deg) translate3d(-20vw, 0, 0px);
            }
            25% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(-7deg) translate3d(-25vw, 0, 0px);
              -moz-transform: rotate(-7deg) translate3d(-25vw, 0, 0px);
              -ms-transform: rotate(-7deg) translate3d(-25vw, 0, 0px);
              -o-transform: rotate(-7deg) translate3d(-25vw, 0, 0px);
              transform: rotate(-7deg) translate3d(-25vw, 0, 0px);
            }
            50% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(5deg) translate3d(-50vw, 0, 0px);
              -moz-transform: rotate(5deg) translate3d(-50vw, 0, 0px);
              -ms-transform: rotate(5deg) translate3d(-50vw, 0, 0px);
              -o-transform: rotate(5deg) translate3d(-50vw, 0, 0px);
              transform: rotate(5deg) translate3d(-50vw, 0, 0px);
            }
            60% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(-1deg) translate3d(-60vw, 0, 0px);
              -moz-transform: rotate(-1deg) translate3d(-60vw, 0, 0px);
              -ms-transform: rotate(-1deg) translate3d(-60vw, 0, 0px);
              -o-transform: rotate(-1deg) translate3d(-60vw, 0, 0px);
              transform: rotate(-1deg) translate3d(-60vw, 0, 0px);
            }
            100% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(2deg) translate3d(-100vw, 0, 0px);
              -moz-transform: rotate(2deg) translate3d(-100vw, 0, 0px);
              -ms-transform: rotate(2deg) translate3d(-100vw, 0, 0px);
              -o-transform: rotate(2deg) translate3d(-100vw, 0, 0px);
              transform: rotate(2deg) translate3d(-100vw, 0, 0px);
            }
          }
          /* Standard syntax */
          @keyframes boat {
            0% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(-15deg) translate3d(400px, 0px, 0px);
              -moz-transform: rotate(-15deg) translate3d(400px, 0px, 0px);
              -ms-transform: rotate(-15deg) translate3d(400px, 0px, 0px);
              -o-transform: rotate(-15deg) translate3d(400px, 0px, 0px);
              transform: rotate(-15deg) translate3d(400px, 0px, 0px);
            }
            20% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(15deg) translate3d(-20vw, 0, 0px);
              -moz-transform: rotate(15deg) translate3d(-20vw, 0, 0px);
              -ms-transform: rotate(15deg) translate3d(-20vw, 0, 0px);
              -o-transform: rotate(15deg) translate3d(-20vw, 0, 0px);
              transform: rotate(15deg) translate3d(-20vw, 0, 0px);
            }
            25% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(-7deg) translate3d(-25vw, 0, 0px);
              -moz-transform: rotate(-7deg) translate3d(-25vw, 0, 0px);
              -ms-transform: rotate(-7deg) translate3d(-25vw, 0, 0px);
              -o-transform: rotate(-7deg) translate3d(-25vw, 0, 0px);
              transform: rotate(-7deg) translate3d(-25vw, 0, 0px);
            }
            50% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(5deg) translate3d(-50vw, 0, 0px);
              -moz-transform: rotate(5deg) translate3d(-50vw, 0, 0px);
              -ms-transform: rotate(5deg) translate3d(-50vw, 0, 0px);
              -o-transform: rotate(5deg) translate3d(-50vw, 0, 0px);
              transform: rotate(5deg) translate3d(-50vw, 0, 0px);
            }
            60% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(-1deg) translate3d(-60vw, 0, 0px);
              -moz-transform: rotate(-1deg) translate3d(-60vw, 0, 0px);
              -ms-transform: rotate(-1deg) translate3d(-60vw, 0, 0px);
              -o-transform: rotate(-1deg) translate3d(-60vw, 0, 0px);
              transform: rotate(-1deg) translate3d(-60vw, 0, 0px);
            }
            100% {
              -webkit-transform-origin: left;
              -moz-transform-origin: left;
              -ms-transform-origin: left;
              -o-transform-origin: left;
              transform-origin: left;
              -webkit-transform: rotate(2deg) translate3d(-100vw, 0, 0px);
              -moz-transform: rotate(2deg) translate3d(-100vw, 0, 0px);
              -ms-transform: rotate(2deg) translate3d(-100vw, 0, 0px);
              -o-transform: rotate(2deg) translate3d(-100vw, 0, 0px);
              transform: rotate(2deg) translate3d(-100vw, 0, 0px);
            }
          }
          @-webkit-keyframes float {
            0%, 100% {
              -webkit-transform: rotate(3deg) translate3d(0px, -10px, 0px);
              -moz-transform: rotate(3deg) translate3d(0px, -10px, 0px);
              -ms-transform: rotate(3deg) translate3d(0px, -10px, 0px);
              -o-transform: rotate(3deg) translate3d(0px, -10px, 0px);
              transform: rotate(3deg) translate3d(0px, -10px, 0px);
            }
            50% {
              -webkit-transform: rotate(-3deg) translate3d(0px, 10px, 0px);
              -moz-transform: rotate(-3deg) translate3d(0px, 10px, 0px);
              -ms-transform: rotate(-3deg) translate3d(0px, 10px, 0px);
              -o-transform: rotate(-3deg) translate3d(0px, 10px, 0px);
              transform: rotate(-3deg) translate3d(0px, 10px, 0px);
            }
          }
          @-moz-keyframes float {
            0%, 100% {
              -webkit-transform: rotate(3deg) translate3d(0px, -10px, 0px);
              -moz-transform: rotate(3deg) translate3d(0px, -10px, 0px);
              -ms-transform: rotate(3deg) translate3d(0px, -10px, 0px);
              -o-transform: rotate(3deg) translate3d(0px, -10px, 0px);
              transform: rotate(3deg) translate3d(0px, -10px, 0px);
            }
            50% {
              -webkit-transform: rotate(-3deg) translate3d(0px, 10px, 0px);
              -moz-transform: rotate(-3deg) translate3d(0px, 10px, 0px);
              -ms-transform: rotate(-3deg) translate3d(0px, 10px, 0px);
              -o-transform: rotate(-3deg) translate3d(0px, 10px, 0px);
              transform: rotate(-3deg) translate3d(0px, 10px, 0px);
            }
          }
          @-o-keyframes float {
            0%, 100% {
              -webkit-transform: rotate(3deg) translate3d(0px, -10px, 0px);
              -moz-transform: rotate(3deg) translate3d(0px, -10px, 0px);
              -ms-transform: rotate(3deg) translate3d(0px, -10px, 0px);
              -o-transform: rotate(3deg) translate3d(0px, -10px, 0px);
              transform: rotate(3deg) translate3d(0px, -10px, 0px);
            }
            50% {
              -webkit-transform: rotate(-3deg) translate3d(0px, 10px, 0px);
              -moz-transform: rotate(-3deg) translate3d(0px, 10px, 0px);
              -ms-transform: rotate(-3deg) translate3d(0px, 10px, 0px);
              -o-transform: rotate(-3deg) translate3d(0px, 10px, 0px);
              transform: rotate(-3deg) translate3d(0px, 10px, 0px);
            }
          }
          /* Standard syntax */
          @keyframes float {
            0%, 100% {
              -webkit-transform: rotate(3deg) translate3d(0px, -10px, 0px);
              -moz-transform: rotate(3deg) translate3d(0px, -10px, 0px);
              -ms-transform: rotate(3deg) translate3d(0px, -10px, 0px);
              -o-transform: rotate(3deg) translate3d(0px, -10px, 0px);
              transform: rotate(3deg) translate3d(0px, -10px, 0px);
            }
            50% {
              -webkit-transform: rotate(-3deg) translate3d(0px, 10px, 0px);
              -moz-transform: rotate(-3deg) translate3d(0px, 10px, 0px);
              -ms-transform: rotate(-3deg) translate3d(0px, 10px, 0px);
              -o-transform: rotate(-3deg) translate3d(0px, 10px, 0px);
              transform: rotate(-3deg) translate3d(0px, 10px, 0px);
            }
          }
          @-webkit-keyframes surf {
            0% {
              -webkit-transform-origin: right;
              -moz-transform-origin: right;
              -ms-transform-origin: right;
              -o-transform-origin: right;
              transform-origin: right;
              -webkit-transform: rotate(15deg) translate3d(0, 800px, 0);
              -moz-transform: rotate(15deg) translate3d(0, 800px, 0);
              -ms-transform: rotate(15deg) translate3d(0, 800px, 0);
              -o-transform: rotate(15deg) translate3d(0, 800px, 0);
              transform: rotate(15deg) translate3d(0, 800px, 0);
            }
            30% {
              -webkit-transform-origin: right;
              -moz-transform-origin: right;
              -ms-transform-origin: right;
              -o-transform-origin: right;
              transform-origin: right;
              -webkit-transform: rotate(15deg) translate3d(0, 500px, 0);
              -moz-transform: rotate(15deg) translate3d(0, 500px, 0);
              -ms-transform: rotate(15deg) translate3d(0, 500px, 0);
              -o-transform: rotate(15deg) translate3d(0, 500px, 0);
              transform: rotate(15deg) translate3d(0, 500px, 0);
            }
            100% {
              -webkit-transform-origin: right;
              -moz-transform-origin: right;
              -ms-transform-origin: right;
              -o-transform-origin: right;
              transform-origin: right;
              -webkit-transform: rotate(0) translate3d(0, 0, 0px);
              -moz-transform: rotate(0) translate3d(0, 0, 0px);
              -ms-transform: rotate(0) translate3d(0, 0, 0px);
              -o-transform: rotate(0) translate3d(0, 0, 0px);
              transform: rotate(0) translate3d(0, 0, 0px);
            }
          }
          @-moz-keyframes surf {
            0% {
              -webkit-transform-origin: right;
              -moz-transform-origin: right;
              -ms-transform-origin: right;
              -o-transform-origin: right;
              transform-origin: right;
              -webkit-transform: rotate(15deg) translate3d(0, 800px, 0);
              -moz-transform: rotate(15deg) translate3d(0, 800px, 0);
              -ms-transform: rotate(15deg) translate3d(0, 800px, 0);
              -o-transform: rotate(15deg) translate3d(0, 800px, 0);
              transform: rotate(15deg) translate3d(0, 800px, 0);
            }
            30% {
              -webkit-transform-origin: right;
              -moz-transform-origin: right;
              -ms-transform-origin: right;
              -o-transform-origin: right;
              transform-origin: right;
              -webkit-transform: rotate(15deg) translate3d(0, 500px, 0);
              -moz-transform: rotate(15deg) translate3d(0, 500px, 0);
              -ms-transform: rotate(15deg) translate3d(0, 500px, 0);
              -o-transform: rotate(15deg) translate3d(0, 500px, 0);
              transform: rotate(15deg) translate3d(0, 500px, 0);
            }
            100% {
              -webkit-transform-origin: right;
              -moz-transform-origin: right;
              -ms-transform-origin: right;
              -o-transform-origin: right;
              transform-origin: right;
              -webkit-transform: rotate(0) translate3d(0, 0, 0px);
              -moz-transform: rotate(0) translate3d(0, 0, 0px);
              -ms-transform: rotate(0) translate3d(0, 0, 0px);
              -o-transform: rotate(0) translate3d(0, 0, 0px);
              transform: rotate(0) translate3d(0, 0, 0px);
            }
          }
          @-o-keyframes surf {
            0% {
              -webkit-transform-origin: right;
              -moz-transform-origin: right;
              -ms-transform-origin: right;
              -o-transform-origin: right;
              transform-origin: right;
              -webkit-transform: rotate(15deg) translate3d(0, 800px, 0);
              -moz-transform: rotate(15deg) translate3d(0, 800px, 0);
              -ms-transform: rotate(15deg) translate3d(0, 800px, 0);
              -o-transform: rotate(15deg) translate3d(0, 800px, 0);
              transform: rotate(15deg) translate3d(0, 800px, 0);
            }
            30% {
              -webkit-transform-origin: right;
              -moz-transform-origin: right;
              -ms-transform-origin: right;
              -o-transform-origin: right;
              transform-origin: right;
              -webkit-transform: rotate(15deg) translate3d(0, 500px, 0);
              -moz-transform: rotate(15deg) translate3d(0, 500px, 0);
              -ms-transform: rotate(15deg) translate3d(0, 500px, 0);
              -o-transform: rotate(15deg) translate3d(0, 500px, 0);
              transform: rotate(15deg) translate3d(0, 500px, 0);
            }
            100% {
              -webkit-transform-origin: right;
              -moz-transform-origin: right;
              -ms-transform-origin: right;
              -o-transform-origin: right;
              transform-origin: right;
              -webkit-transform: rotate(0) translate3d(0, 0, 0px);
              -moz-transform: rotate(0) translate3d(0, 0, 0px);
              -ms-transform: rotate(0) translate3d(0, 0, 0px);
              -o-transform: rotate(0) translate3d(0, 0, 0px);
              transform: rotate(0) translate3d(0, 0, 0px);
            }
          }
          /* Standard syntax */
          @keyframes surf {
            0% {
              -webkit-transform-origin: right;
              -moz-transform-origin: right;
              -ms-transform-origin: right;
              -o-transform-origin: right;
              transform-origin: right;
              -webkit-transform: rotate(15deg) translate3d(0, 800px, 0);
              -moz-transform: rotate(15deg) translate3d(0, 800px, 0);
              -ms-transform: rotate(15deg) translate3d(0, 800px, 0);
              -o-transform: rotate(15deg) translate3d(0, 800px, 0);
              transform: rotate(15deg) translate3d(0, 800px, 0);
            }
            30% {
              -webkit-transform-origin: right;
              -moz-transform-origin: right;
              -ms-transform-origin: right;
              -o-transform-origin: right;
              transform-origin: right;
              -webkit-transform: rotate(15deg) translate3d(0, 500px, 0);
              -moz-transform: rotate(15deg) translate3d(0, 500px, 0);
              -ms-transform: rotate(15deg) translate3d(0, 500px, 0);
              -o-transform: rotate(15deg) translate3d(0, 500px, 0);
              transform: rotate(15deg) translate3d(0, 500px, 0);
            }
            100% {
              -webkit-transform-origin: right;
              -moz-transform-origin: right;
              -ms-transform-origin: right;
              -o-transform-origin: right;
              transform-origin: right;
              -webkit-transform: rotate(0) translate3d(0, 0, 0px);
              -moz-transform: rotate(0) translate3d(0, 0, 0px);
              -ms-transform: rotate(0) translate3d(0, 0, 0px);
              -o-transform: rotate(0) translate3d(0, 0, 0px);
              transform: rotate(0) translate3d(0, 0, 0px);
            }
          }
          @-webkit-keyframes wave-message {
            0% {
              -webkit-transform: translate3d(0, 120%, 0);
              -moz-transform: translate3d(0, 120%, 0);
              -ms-transform: translate3d(0, 120%, 0);
              -o-transform: translate3d(0, 120%, 0);
              transform: translate3d(0, 120%, 0);
            }
            100% {
              -webkit-transform: translate3d(0, 0, 0);
              -moz-transform: translate3d(0, 0, 0);
              -ms-transform: translate3d(0, 0, 0);
              -o-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
            }
          }
          @-moz-keyframes wave-message {
            0% {
              -webkit-transform: translate3d(0, 120%, 0);
              -moz-transform: translate3d(0, 120%, 0);
              -ms-transform: translate3d(0, 120%, 0);
              -o-transform: translate3d(0, 120%, 0);
              transform: translate3d(0, 120%, 0);
            }
            100% {
              -webkit-transform: translate3d(0, 0, 0);
              -moz-transform: translate3d(0, 0, 0);
              -ms-transform: translate3d(0, 0, 0);
              -o-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
            }
          }
          @-o-keyframes wave-message {
            0% {
              -webkit-transform: translate3d(0, 120%, 0);
              -moz-transform: translate3d(0, 120%, 0);
              -ms-transform: translate3d(0, 120%, 0);
              -o-transform: translate3d(0, 120%, 0);
              transform: translate3d(0, 120%, 0);
            }
            100% {
              -webkit-transform: translate3d(0, 0, 0);
              -moz-transform: translate3d(0, 0, 0);
              -ms-transform: translate3d(0, 0, 0);
              -o-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
            }
          }
          /* Standard syntax */
          @keyframes wave-message {
            0% {
              -webkit-transform: translate3d(0, 120%, 0);
              -moz-transform: translate3d(0, 120%, 0);
              -ms-transform: translate3d(0, 120%, 0);
              -o-transform: translate3d(0, 120%, 0);
              transform: translate3d(0, 120%, 0);
            }
            100% {
              -webkit-transform: translate3d(0, 0, 0);
              -moz-transform: translate3d(0, 0, 0);
              -ms-transform: translate3d(0, 0, 0);
              -o-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
            }
          }


        
        `}</style>
      </Helmet>
      {/*== Helmet CEO To Browser ==*/}

      <h1 style={{ fontSize: "28px", textAlign: "center", marginTop: "33px" }}>
        Page Not Found
      </h1>
      <div className="sky-bg" />
      <div className="wave-7" />
      <div className="wave-6" />
      <a className="wave-island" href="404error">
        <img
          src="http://res.cloudinary.com/andrewhani/image/upload/v1524501929/404/island.svg"
          alt="Island"
        />
      </a>
      <div className="wave-5" />
      <div className="wave-lost wrp">
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </div>
      <div className="wave-4" />
      <div className="wave-boat">
        <img
          className="boat"
          src="http://res.cloudinary.com/andrewhani/image/upload/v1524501894/404/boat.svg"
          alt="Boat"
        />
      </div>
      <div className="wave-3" />
      <div className="wave-2" />
      <div className="wave-1" />
      <div className="wave-message">
        <p>Your're lost</p>
        <p>Click on the island to return</p>
      </div>
    </div>
  );
};

export default Erroe404;
