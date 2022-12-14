import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from "react-multi-date-picker";
import { editClass } from "../store/classInfo";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';
class EditClass extends Component {
    constructor(){
        super();
        this.state={
            classTitle:'',
            classId:'',
            classDate:'', 
            startTime:'',
            endTime:'',
            leadCoachId:'',
            classLocation:'',
            classDescription:'',
            startTimeDate:'',
            endTimeDate:'',
            showSuccess:false,
            showDelete:false, 
            
        }
        this.save = this.save.bind(this);
        this.handleDelete = this.save.bind(this);
    }
    async handleDelete(){
        
    }

    async save(ev){

        const updatedClass = {
            id: this.state.classId,
            classTitle: this.state.classTitle,
            userId:this.state.leadCoachId*1, 
            location:this.state.classLocation,
            start:this.state.startTime.length > 5 ? `${this.state.classDate}T${this.state.startTime}`: `${this.state.classDate}T${this.state.startTime}:00` ,
            end:this.state.endTime.length > 5 ? `${this.state.classDate}T${this.state.endTime}`: `${this.state.classDate}T${this.state.endTime}:00`
        }
        
       
            this.setState({showSuccess:true})
              await this.props.editClass(updatedClass);
              
              
    }
    componentDidMount( ){
        console.log(this.state)
        const classToEdit = this.props?.classes.find(c => c.id*1 === this.props.match.params.id*1);
        const classStart = classToEdit?.start.value.split(/(?=[T])/);
        const classEnd = classToEdit?.end.value.split(/(?=[T])/);
        const classDate = classStart[0];
 
        let updatedClassStart = classStart[1].slice(1);

        let updatedClassEnd = classEnd[1].slice(1);

        
        this.setState({
            classTitle:classToEdit.classTitle, 
            classId:classToEdit.id*1,
            leadCoachId:classToEdit.userId, 
            classLocation:classToEdit.location, 
            startTime:updatedClassStart,
            endTime:updatedClassEnd,
            classDate:classDate,
            showSuccess:false,
            showDelete:false
        })
        
    }
    
    
    render(){
      
        
        const coachesToDisplay = this.props.coaches;
        const {classTitle, startTime, endTime, classDescription} = this.state;
       const { save, handleDelete } = this;
        return (
            <div>
                  <div style={{
                display:'flex',
                alignItems:'center',
                flexDirection:'column',
                marginTop:'10px'
            }}>
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    border:'solid black 2px',
                    justifyContent:'spac',

                    width:'800px'
                }}>

                <div>
                <h1 style={{
                    textAlign:'center'
                }}> Edit Class </h1>

                </div>

                <div>
                <div style={{
                          display:'flex',
                          justifyContent:'center',
                          marginTop:'20px',
                          marginBottom:'20px'
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
                            value={this.state.leadCoachId}
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
                            <select value={this.state.classLocation} 
                            onChange={(e) => this.setState({classLocation:e.target.value})}>
                                <option value={''}>Location </option>
                                <option value={'OakBrook Park District'}> OakBrook Park District </option>
                                <option value={'Hinsdale Community House'}> Hinsdale Community House </option>
                                <option value={'Connect 44 Center'}> Connect 44 Center </option>
                                
                            </select>

                            </a>

                        </div>
                        <div style={{
                        display:'flex', 
                        flexDirection:'row',
                        justifyContent:'space-around',
                        marginTop:'20px',
                        marginBottom:'20px'
                    }}>
                        <a>StartTime:
                          <input 
                            type='time' 
                            min='08:00:00'
                            max="20:00:00"
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
                        justifyContent:'center'
                    }}>
                        <div>
                            <button 
                            style={{
                                backgroundColor:'green',
                                marginTop:'10px'
                            }}
                            onClick={save}
                            
                            > 
                            Confirm Edit
                            </button>

                        </div>
                   

                    </div>
              
                        </div>

                </div>
                <div>
                <Alert
                     variant="success"
                     show={this.state.showSuccess} >
                    <Alert.Heading> Your Class Was Updated Succesfully! </Alert.Heading>
                        <Button onClick={() => this.setState({showSuccess:false})} variant="outline-success">
                        Close 
                        </Button>

                        </Alert>

                    </div>
                        <div>

                        <Alert
                            variant="danger"
                            show={this.state.showDelete} >
                            <Alert.Heading> Your Class Was Deleted ! </Alert.Heading>
                            <Button onClick={() => this.setState({showDelete:false})} variant="outline-danger">
                             Close 
                        </Button>

                        </Alert>
                        </div>
            </div>
            </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return state
} 

const mapDispatchToProps = (dispatch, {history}) => {
    return {
        editClass:(c) => dispatch(editClass(c, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (EditClass)