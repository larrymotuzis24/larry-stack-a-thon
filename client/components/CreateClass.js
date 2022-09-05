import React, { Component } from "react";

import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ClassTimeCreator from "./ClassTimeCreator";



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
                    <ClassTimeCreator />                
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

{/* <div>
<Form>
    <input placeholder="className" />
    <input placeholder="class date" />
    <input placeholder="startTime " />
    <input placeholder="endTime" />
    <input placeholder="leadCoach" />
    <input placeholder="assistant Coaches" />

</Form>

</div> */}