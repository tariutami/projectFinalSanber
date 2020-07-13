// eslint-disable-next-line
import React, { Component } from "react";
import "./App.css";

// ini cuman buat list aja
class Hobi extends React.Component {
  render() {
    const data = ["Traveling", "Membaca", "Gaming"];
    const listItems = data.map(data => <li>{data}</li>);
    return <ul>{listItems}</ul>;
  }
}

export default Hobi;

