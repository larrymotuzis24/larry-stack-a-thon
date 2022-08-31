import React, { Component } from 'react'
import {connect} from 'react-redux'
import {DayPilot, DayPilotCalendar} from "@daypilot/daypilot-lite-react";



class Scheduel extends Component {
    render(){
        const userWorkshifts = this.props.workShifts.filter(workshift => workshift.userId === this.props.auth.id);
        
        return (
            <div>
                <h2> Your Week  </h2>
                <div>
                    <DayPilotCalendar
                     scale={"Week"}
                     days={7}

                
                    
                    />
                
                </div>

            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = ( dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Scheduel)