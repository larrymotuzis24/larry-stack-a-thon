import React, { Component } from "react";

import { connect } from "react-redux";

class Coaches extends Component {

    render(){

        return (
            <div>
                <h1> All Coaches </h1>
            </div>
        )
    }
};


const mapStateToProps = ({auth, players, coaches}) => {
    return {
        auth, 
        players, 
        coaches
    }
};

const mapDispatchToProps = (dispacth) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Coaches)