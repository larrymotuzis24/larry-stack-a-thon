import React, { Component } from "react";

import { conect } from 'react-redux';


class CreateClass extends Component {
    constructor(){
        super();
        this.state= {
            className:'',
            start:'',
            end:'',
            date:'',
            leadCoach:''

        }
    }
    render(){
        return (
            <div>
                <div>
                    <h2> Create Class </h2>
                </div>
                <main>
                    <div>
                        <form>
                            <input placeholder="className" />
                            <input placeholder="class date" />
                            <input placeholder="startTime " />
                            <input placeholder="endTime" />
                            <input placeholder="leadCoach" />
                            <input placeholder="assistant Coaches" />

                        </form>

                    </div>
                </main>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = (dispacth) => {
    return {

    }
};