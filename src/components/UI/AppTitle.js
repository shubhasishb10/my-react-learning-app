import React from 'react';
import './AppTitle.css'
import Card from "./Card";

const AppTitle = () => {
  return (
    <Card color="black" className="larger-font">
      <strong>E</strong>xpense <strong>T</strong>racker
    </Card>
  );
}

export default AppTitle;
