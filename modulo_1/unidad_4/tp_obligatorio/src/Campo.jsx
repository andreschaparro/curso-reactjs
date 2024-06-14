import React, {Component} from "react";

class Campo extends Component{
    render(){
        return(
            <div>
                <label>{this.props.etiqueta}</label>
                <input type={this.props.tipo}></input>
            </div>
        )
    }
}

export default Campo