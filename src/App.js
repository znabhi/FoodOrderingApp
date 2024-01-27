import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Header from "./components/Header";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import DisplayPromotedRes from "./components/DisplayPromotedRes";
import LiftingUpStateVar from "./components/LiftingUpStateVar";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartDetails from "./components/CartDetails";
// import Groceries from "./components/Groceries";
const App = () => {
  const [UserName, setUserName] = useState();
  //Authentication
  useEffect(() => {
    const data = {
      name: "Abhishek",
    };
    setUserName(data?.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ name: UserName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const Groceries = lazy(() => import("./components/Groceries"));

const appRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Groceries />
          </Suspense>
        ),
      },
      {
        path: "/ad",
        element: <DisplayPromotedRes />,
      },
      {
        path: "/restaurantMenu/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/lifting/up/state_var",
        element: <LiftingUpStateVar />,
      },
      {
        path: "/cartDetails",
        element: <CartDetails />,
      },
    ],
    // errorElement: <Error />,
  },
]);

const RootElement = ReactDOM.createRoot(document.getElementById("root"));
RootElement.render(<RouterProvider router={appRouter} />);
