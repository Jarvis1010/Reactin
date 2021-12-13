//import React from "react";
const React = require("react");
class Component extends React.Component {
  componentDoneDidMount(...args) {
    super.componentDidMount(...args);
  }
}

// export default {
//   ...React,
//   Component,
// };

mopdule.exports = {
  ...React,
  Component,
};
