import React, { Component } from "react";

class isAdminView extends COmponent {
    constructor(){
        super();
        this.state= {

        }
    }

    render(){
        return (
            <div>
                <main>
                    <h2> Admin view </h2>
                </main>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(isAdminView)