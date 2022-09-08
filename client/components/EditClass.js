import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from "react-multi-date-picker";

class EditClass extends Component {
    constructor(){
        super();
        this.state={
            classTitle:'',
            classDate:'', 
            startTime:'',
            endTime:'',
            leadCoachId:'',
            classLocation:'',
            classDescription:'',
        }
    }
    componentDidMount(props){
        const classToEdit = this.props.classes.find(c => c.id*1 === this.props.match.params.id*1);
        const classStart = classToEdit.start.value.split(/(?=[T])/);
        const classEnd = classToEdit.end.value.split(/(?=[T])/);
        let updatedClassStart = classStart[1].slice(1);

        let updatedClassEnd = classEnd[1].slice(1);
        console.log('classToEdit', classToEdit)
        this.setState({
            classTitle:classToEdit.classTitle, 
            leadCoachId:classToEdit.userId, 
            classLocation:classToEdit.location, 
            startTime:updatedClassStart, 
            endTime:updatedClassEnd
        })
        console.log('state after mount',this.state)
    }
    render(){
        const coachesToDisplay = this.props.coaches;
        const {classTitle, startTime, endTime, classDescription} = this.state;
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
                            <select value={this.state.classLocation} onChange={(e) => this.setState({classLocation:e.target.value})}>
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
                        <button 
                        disabled={
                            !classTitle ||
                            !startTime ||
                            !endTime ||
                            !classDescription
                        }
                        style={{
                            backgroundColor:'green',
                            marginTop:'10px'
                        }}
                        onClick={(e)=> console.log(e)}
                        
                        > 
                        Confirm Edit
                        </button>

                    </div>
              
                        </div>

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

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps) (EditClass)