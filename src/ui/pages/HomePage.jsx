import React, { useState } from "react";
import GameSideBar from "../../features/Games/GameSideBar";
import CardWithHeader from "../elements/CardWithHeader";
import GridList from "../elements/GridList";

const HomePage = () => {

  return (

    <main>
       <div className="flex flex-auto">
        <div className="flex-auto w-32 p-6">
        <CardWithHeader />
        </div>
        <div className="flex-auto w-32 p-6">
        <CardWithHeader />
        </div>
       </div>
       <div className="flex">
        <div className="flex-auto w-32 p-6">
        <CardWithHeader />
        </div>
        <div className="flex-auto w-32 p-6">
        <CardWithHeader />
        </div>
       </div>

       
      </main>
  );
};

export default HomePage;
