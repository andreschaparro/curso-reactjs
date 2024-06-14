import React,{Component} from "react";

class Mensaje extends Component{
    render(){
        return(
            <div>{this.props.mensaje}</div>
        )
    }
}

export default Mensaje