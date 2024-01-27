// import React from "react";

import { Component, useCallback } from "react";
import React from "react";

// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       //   count2: 1,
//     };
//     console.log(this.props.name + "Constructer");
//   }

//   componentDidMount() {
//     console.log("child Did Mount");
//   }

//   render() {
//     console.log(this.props.name + " Render");
//     return (
//       <div>
//         <h1>This is state variable = {this.state.count}</h1>
//         {/* <button onClick={()=>{
//             this.setState({
//                 count:this.state.count+1,
//             })
//         }}>Click to update</button> */}
//         {/* <h1>This is state variable = {this.state.count2}</h1> */}
//         <h1>{this.props.name}</h1>
//         <p>{this.props.gmail}</p>
//       </div>
//     );
//   }
// }

// export default UserClass;

//How to Fetch the data from Live APIS

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "XYZ",
        location: "US",
      },
    };
  }
  // unmounting method
  //   componentDidMount() {
  //     this.timer = setInterval(() => {
  //       console.log("Hello From UserClass");
  //     }, 1000);
  //   }

  //   componentWillUnmount() {
  //     clearInterval(this.timer);
  //   }

  render() {
    const defaultLocation = "India";
    // return (
    //   // console.log('json'),

    //   <>
    //     Username : {this.state.userInfo.name}
    //     <br />
    //     User Location : {this.state.userInfo.location || defaultLocation}
    //     <br />
    //     <img src={this.state.userInfo.avatar_url} />
    //   </>
    // );
  }
}

export default UserClass;
