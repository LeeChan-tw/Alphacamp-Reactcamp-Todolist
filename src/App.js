import React, { useEffect } from "react";
import "./App.scss";
import TodoApp from "./views/TodoApp";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

export default function App() {
  const isLogin = false;
  const isAtLogin = useRouteMatch("/login");

  useEffect(() => {
    //SDK載入完後會馬上執行 fbAsyncInit
    window.fbAsyncInit = function () {
      //FB SDK 初始化
      window.FB.init({
        appId: "3683269808433932",
        cookie: true,
        xfbml: true,
        version: "v9.0"
      });
      console.log("Facebook SDK 初始化完成!");
      window.FB.AppEvents.logPageView();
    };
    //載入Facebook SDK
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  if (!isLogin && !isAtLogin) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          {isLogin ? <Redirect to="/todos" /> : <Redirect to="/login" />}
        </Route>
        <Route path="/todos">
          <TodoApp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}
