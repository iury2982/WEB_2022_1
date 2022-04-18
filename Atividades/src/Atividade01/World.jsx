import React, {Component} from "react";

class World extends Component {
    render(){
        const {} = this.props
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default World