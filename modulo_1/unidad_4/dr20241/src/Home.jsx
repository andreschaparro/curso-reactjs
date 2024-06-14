import React,{Component} from "react";
import Banner from "./Banner";
import Productos from "./Productos";

class Home extends Component{
    render(){
        const numero = 1
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
}

export default Home