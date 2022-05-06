import React from "react";
import Card from "./Card";

const PageLayout = ({ countries }) => {
  return (
    <div>
      <header>
        <div className="header-bar">
          <h2>Where it the world?</h2>
        </div>
      </header>
      <main>
        <div className="card-container">
          <Card countries={countries} />
        </div>
      </main>
      <footer>
        Text
      </footer>
    </div>
  )
}

export default PageLayout;