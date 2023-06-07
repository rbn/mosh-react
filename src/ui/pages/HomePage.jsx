import React, { useState } from "react";
import GameSideBar from "../../features/Games/GameSideBar";
import CardWithHeader from "../elements/CardWithHeader";
import GridList from "../elements/GridList";
import ActionsWithSharedBorders from "./ActionsWithSharedBorders";

const HomePage = () => {

  return (

    <main>
      <section>
      <h1>Welcome to the online portal!</h1>
      <p className="pt-4 text-lg">Choose from the options below</p>
      </section>

       <section>
        <ActionsWithSharedBorders />
       </section>

       
      </main>
  );
};

export default HomePage;
