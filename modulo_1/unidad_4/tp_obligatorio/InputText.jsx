import React, {Component} from "react";

class InputText extends Component{
    render(){
        return(
            <div>
                <label>{this.props.etiqueta}</label>
                <input type="text"></input>
            </div>
        )
    }
}

export default InputText