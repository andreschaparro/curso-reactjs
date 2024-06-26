import React from "react";
import Banner from "../Components/Banner";
import Productos from "../Components/Productos";

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
