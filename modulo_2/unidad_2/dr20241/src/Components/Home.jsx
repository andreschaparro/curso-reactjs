import React from "react";
import Banner from "./Banner";
import Productos from "./Productos";

function Home(){
    return(
        <>
            <div>
                <Banner />
            </div>
            <div>
                <Banner />
            </div>
            <div>
                <Productos />
            </div>
        </>
    )
}

export default Home
