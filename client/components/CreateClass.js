import React, { Component } from "react";

import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ClassTimeCreator from "./ClassTimeCreator";
import { createClass } from "../store/classInfo";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import { parseISO } from 'date-fns'; 



class CreateClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classTitle:'',
            startTime:'',
            coachId:'',
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
        this.onChange = this.onChange.bind(this);
      }
    
      handleChange(value) {
        this.setState({classTitle: value});
      }
      
      confirm(e){
        
        
        for(let i = 0; i < this.state.classDates.length; i++){
           
            let classToCreate = {
                classTitle:this.state.classTitle,
                start:`${this.state.classDates[i]}T${this.state.startTime}:00`,
                end:`${this.state.classDates[i]}T${this.state.endTime}:00`,
                userId:this.state.leadCoachId,
                location:this.state.classLocation
            }

            this.state.classesToCreate.push(classToCreate)
            
        }
        this.props.create(this.state.classesToCreate)
        alert(`Class: ${this.state.classTitle} on ${this.state.classDates} from ${this.state.startTime} to ${this.state.endTime} was created!`)
     
        this.setState({
            classTitle:'',
            classDate:'',
            startTime:'',
            coachId:'',
            endTime:'',
            classDescription:'',
            leadCoachId:'', 
            coachesToDisplay:'',
            gymLocations:'',
            classDates:'',
            classLocation:'',
        })
        
       
      }
   
      handleSubmit(e) {
        e.preventDefault();
        alert('create this class', console.log(this.state));
        
      }

    componentDidMount(){
        console.log('setCoachesState', this.props)
 
    }

    onChange(arg){
        let date = ''
        let month = ''
        let year=''
        let day = ''
        console.log(arg)
        for(let i = 0; i < arg.length; i++){
            day = `${arg[i].day}`
            month = `${arg[i].month}`
            year = `${arg[i].year}`
            if(day.length < 2){
                day = `0${arg[i].day}`
            }
            if(month.length < 2){
               month = `0${arg[i].month}`
            }
            date= `${year}-${month}-${day}`
        }
        this.state.classDates.push(date)
        console.log(this.state.classDates)
    }
  
    
      render() {
        const { handleSubmit, onChange, confirm } = this;
        const { coachesToDisplay } = this.props
        const {classDates} = this.state;
        return (
            <div style={{
                display:'flex',
                justifyContent:'center',
                marginTop:'10px'
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
                          display:'flex',
                          justifyContent:'center'
                        }}>
                            <a> Class Title:
                          <input 
                          type={'text'}
                          value={this.state.classTitle}
                          placeholder={'Class Title'}
                          onChange={(e) => this.setState({classTitle:e.target.value})}
                          /> 
                             </a>
                        </div>

                        <div>
                        <div style={{
                            display:'flex',
                            justifyContent:'space-around'
                        }}>
                            <a> Lead Coach:
                            <select
                            value={this.state.coachId}
                            onChange={(e) => this.setState({leadCoachId:e.target.value})}>
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
                            <select value={this.state.classLocation} onChange={(e) => this.setState({classLocation:e.target.value})}>
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
                        <div>
                            <a> Select Dates</a>
                             <DatePicker
                                    multiple
                                    value={this.state.classDates}
                                    format={"YYYY-MM-dd"}
                                    placeholder={"click to select dates"}
                                    // value={parseISO(classDates.dateAt)}

                                    onChange={ date=> {
                                        onChange(date)

                                    }
                                     }
                        />

                        </div>
                        <a>StartTime:
                          <input 
                            type='time'
                            value={this.state.startTime}
                            onChange={(e) => this.setState({startTime:e.target.value})}
                         /> 

                        </a>
                        <a>EndTime:
                            <input 
                            type='time' 
                            value={this.state.endTime}
                            onChange={(e) => this.setState({endTime:e.target.value})}
                            />
                        
                        </a>              

                    </div>
                    <div style={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                        marginTop:'20px'
                    }}>   
                        <a>Class Description  </a>
                            <textarea 
                            value={this.state.classDescription}
                            style={{
                                width:'80%',
                                height:'100px',
                                marginTop:'10px',
                                marginBottom:'10px'
                            }}
                            onChange={(e) => this.setState({classDescription:e.target.value})}
                            > 
                            
                            </textarea>
                           

                        </div>              
                    

                        <button 
                        style={{
                            backgroundColor:'green',
                            marginTop:'10px'
                        }}
                        onClick={(e)=> confirm(e)}
                        
                        > 
                        Create Class 
                        </button>
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
