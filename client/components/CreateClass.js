import React, { Component } from "react";

import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ClassTimeCreator from "./ClassTimeCreator";
import { createClass } from "../store/classInfo";




class CreateClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classTitle:'',
            classDate:'',
            startTime:'',
            endTime:'',
            classDescription:'',
            leadCoachId:'', 
            coachesToDisplay:[],
            gymLocations:[],
            classLocation:''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.confirm = this.confirm.bind(this);
      }
    
      handleChange(value) {
        console.log('value Beofre', value)
        this.setState({classTitle: value});
        console.log('updated Input', this.state)
      }
      confirm(e){
        e.preventDefault();
        let formatedStartTime = `${this.state.classDate}T${this.state.startTime}:00`
        let formatedEndTime = `${this.state.classDate}T${this.state.endTime}:00`
        const classToCreate = {
            classTitle:this.state.classTitle,
            start:formatedStartTime,
            end:formatedEndTime,
            userId:this.state.leadCoachId,
            location:this.state.classLocation
        }
        this.props.create(classToCreate)
        this.setState({
            classTitle:'',
            classDate:'',
            startTime:'',
            endTime:'',
            classDescription:'',
            leadCoachId:'', 
            coachesToDisplay:[],
            gymLocations:[],
            classLocation:''
        })
      }
 
    
      handleSubmit(e) {
        e.preventDefault();
        alert('create this class', console.log(this.state));
        
      }

    componentDidMount(){
        console.log('setCoachesState', this.props)
 
    }
    componentDidUpdate(prevState){
        if(this.state.classTitle !== prevState.classTitle){
            console.log(this.state, 'componentDidUpdate')
        }
    }
    
      render() {
        const { handleSubmit, handleChange, confirm } = this;
        const { coachesToDisplay } = this.props
        return (
            <div>
                <div style={{
                    border:'solid black 2px'
                }}>
                    <form style={{
                        display:'flex',
                        flexDirection:'column'
                    }}>
                        <div>
                          <input 
                          type={'text'}
                          placeholder={'Class Title'}
                          onChange={(e) => this.setState({classTitle:e.target.value})}
                          /> 

                        </div>
                        <input
                         type='date' 
                         onChange={(e) => this.setState({classDate:e.target.value})}
                         />

                        <div>
                           

                        <input 
                        type='time'
                        onChange={(e) => this.setState({startTime:e.target.value})}
                         /> 

                        <input 
                        type='time' 
                        onChange={(e) => this.setState({endTime:e.target.value})}
                        />

                        </div>

                        <div>
                            <input 
                            type={'textarea'} 
                            placeholder={'Class Description'}
                            onChange={(e) => this.setState({classDescription:e.target.value})}
                            /> 

                        </div>
                        <select onChange={(e) => this.setState({leadCoachId:e.target.value})}>
                            <option value={''} > --assign a lead coach </option>
                            {
                                coachesToDisplay.map(coach => {
                                    return (
                                        <option key={coach.id} value={coach.id}> {coach.firstName} {coach.lastName}</option>
                                    )
                                })
                            }
                        </select>
                        
                        <select onChange={(e) => this.setState({classLocation:e.target.value})}>
                            <option value={''}> Select Location </option>
                            <option value={'OakBrook Park District'}> OakBrook Park District </option>
                            <option value={'Hinsdale Community House'}> Hinsdale Community House </option>
                            <option value={'Connect 44 Center'}> Connect 44 Center </option>
                            
                        </select>

                        <button onClick={(e)=> confirm(e)}> Create Class </button>
                    </form>
                </div>

            </div>
        );
      }
};

const mapStateToProps = (state) => {
    return {
        coachesToDisplay:state.coaches
    }
};

const mapDispatch = (dispatch)=> {
    return {
        create:(c)=> {
           dispatch(createClass(c))
        }
    }
}


export default connect(mapStateToProps, mapDispatch)(CreateClass)
