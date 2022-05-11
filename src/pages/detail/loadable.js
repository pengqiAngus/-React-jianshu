import Loadable from "react-loadable";
import React, { PureComponent } from "react";

const LoadableComponent = Loadable({
  loader: () => import("./index"),
  loading() {
    return <div>正在加载</div>;
  },
});

export default class App extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}
