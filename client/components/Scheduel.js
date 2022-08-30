import React, { Component } from 'react'
import {connect} from 'react-redux'

import { DayPilotCalendar, DayPilot } from '@daypilot/daypilot-lite-react'


class Scheduel extends Component {
        constructor(props) {
            super(props);
            this.state = {
            
            };
        }
        
        render() {
            return (
              <div>
                <DayPilotCalendar
                  viewType={"Week"}
                />
              </div>
          );
        }
  }
  


const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = ( dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Scheduel)