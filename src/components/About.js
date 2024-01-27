import UserClass from "./UserClass";
import React, { Component, useEffect } from "react";

// class About extends React.Component {
//   componentDidMount() {
//     // console.log("Parent did mount");
//   }
//   render() {
//     // console.log("Parent render");
//     return (
//       <>
//         <div>
//           <h1>HELLO THIS IS ABOUT US</h1>
//         </div>
//         {/* <User name={"Abhishek"}/>
//         <User name={"Kurtik"}/> */}
//         <UserClass />
//       </>
//     );
//   }
// }

const About = () => {
  // console.log("About Function");

  // unmounting in functional componenet

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("this is console from functional component");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div>
        <h1>HELLO THIS IS ABOUT US</h1>
      </div>
      <UserClass name="Abhishek" gmail={"chotu12584@gmail.com"} />
    </>
  );
};
export default About;
