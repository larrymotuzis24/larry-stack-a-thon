import React, { Component } from "react";

import { connect } from 'react-redux';


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
        console.log('readasd')
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateClass)