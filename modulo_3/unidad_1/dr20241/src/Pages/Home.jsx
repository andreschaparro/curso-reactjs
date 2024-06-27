import React from "react";
import Banner from "../Components/Banner";
import Productos from "../Components/Productos";
import app from "../Config/firebase";

function Home(){
    // solo para testing
    console.log(app)
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
