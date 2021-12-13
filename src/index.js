import React from "react";

class Component extends React.Component {
  componentDoneDidMount(...args) {
    super.componentDidMount(...args);
  }
}

export default {
  ...React,
  Component,
};
