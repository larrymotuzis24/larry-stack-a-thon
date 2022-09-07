import React, { Component } from "react";

import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ClassTimeCreator from "./ClassTimeCreator";
import { createClass } from "../store/classInfo";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel"



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
            classLocation:'',
            classDates:[],
            classesToCreate:[]
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
        console.log(this.state.classDates)
        const datesArray = this.state.classDates.split(',')
        
        for(let i = 0; i < datesArray.length; i++){
           
            let classToCreate = {
                classTitle:this.state.classTitle,
                start:`${datesArray[i]}T${this.state.startTime}:00`,
                end:`${datesArray[i]}T${this.state.endTime}:00`,
                userId:this.state.leadCoachId,
                location:this.state.classLocation
            }
            console.log(classToCreate)
            this.state.classesToCreate.push(classToCreate)
            
        }
        this.props.create(this.state.classesToCreate)
        console.log(this.state.classesToCreate)
        this.setState({
            classTitle:'',
            classDate:'',
            startTime:'',
            endTime:'',
            classDescription:'',
            leadCoachId:'', 
            coachesToDisplay:[],
            gymLocations:[],
            classDates:[],
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
  
    
      render() {
        const { handleSubmit, handleChange, confirm } = this;
        const { coachesToDisplay } = this.props
        return (
            <div style={{
                display:'flex',
                justifyContent:'center'
            }}>
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    border:'solid black 2px',
                    justifyContent:'center',
                    width:'800px'
                }}>
                    <h3 style={{
                        alignSelf:'center'
                    }}> Create A New Class </h3>
                    <hr />
                    <form style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center'
                    }}>
                        <div style={{
                        
                        }}>
                            <a> Class Title:
                          <input 
                          type={'text'}
                          placeholder={'Class Title'}
                          onChange={(e) => this.setState({classTitle:e.target.value})}
                          /> 
                             </a>
                        </div>

                        <div>
                        <div>
                            <a> Lead Coach:
                            <select onChange={(e) => this.setState({leadCoachId:e.target.value})}>
                                <option value={''} >  Select Coach </option>
                                {
                                    coachesToDisplay.map(coach => {
                                        return (
                                            <option key={coach.id} value={coach.id}> {coach.firstName} {coach.lastName}</option>
                                        )
                                    })
                                }
                            </select>
                            </a>
                            <a>Location:
                            <select onChange={(e) => this.setState({classLocation:e.target.value})}>
                                <option value={''}>Location </option>
                                <option value={'OakBrook Park District'}> OakBrook Park District </option>
                                <option value={'Hinsdale Community House'}> Hinsdale Community House </option>
                                <option value={'Connect 44 Center'}> Connect 44 Center </option>
                                
                            </select>

                            </a>

                        </div>
              
                        </div>
                       

                        
                    </form>
                    <div style={{
                        display:'flex', 
                        flexDirection:'row',
                        justifyContent:'space-around'
                    }}>
                        <DatePicker
                                multiple
                                    format="YYYY-MM-dd"
                                    onChange={array => { 
                                    this.setState({classDates: array.join()})
                                        }}
                        />
                        
                          <input 
                        type='time'
                        onChange={(e) => this.setState({startTime:e.target.value})}
                         /> 

                        <input 
                        type='time' 
                        onChange={(e) => this.setState({endTime:e.target.value})}
                        />

                    </div>
                    <div style={{
                        marginTop:'20px',
                        marginBottom:'20px'
                    }}>   
                        <a>Class Description
                            <textarea 
                            onChange={(e) => this.setState({classDescription:e.target.value})}
                            > 
                            
                            </textarea>
                            </a>

                        </div>              
                    

                        <button onClick={(e)=> confirm(e)}> Create Class </button>
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
        create:(classArr)=> {
           dispatch(createClass(classArr))
        }
    }
}


export default connect(mapStateToProps, mapDispatch)(CreateClass)
