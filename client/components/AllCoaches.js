import React, { Component } from "react";

import { connect } from "react-redux";
import {DayPilot, DayPilotCalendar, DayPilotNavigator} from "@daypilot/daypilot-lite-react";

                         
const styles = {
    wrap: {
      display: "flex"
    },
    left: {
      marginRight: "10px"
    },
    main: {
      flexGrow: "1"
    }
  };


class Coaches extends Component {
    constructor(){
        super();
        this.calendarRef = React.createRef();
        this.state={
            coachId:'',
            classId:'',
            coachClasses:[],
            viewType: "Days",
            days:7,
            businessBeginsHour: 15,
            businessEndsHour: 23,

            onBeforeEventDomAdd: args => {
                args.element = <div>
                  {args.e.data.text}
                  <div style={{position: "absolute", right: "5px", top: "9px", width: "17px", height: "17px"}}
                       onClick={() => this.deleteEvent(args.e)}><img src={"delete-17.svg"} alt={"Delete icon"}/></div>
                </div>;
              },
            
            

            eventDeleteHandling: "Update",
             onEventClick: async args => {
                console.log('updated')
            this.setState({classId: args.e.value()});
        
        const dp = this.calendar;
        const e = args.e;
        dp.events.update(e);
            },
        }
    }
    get calendar() {
        return this.calendarRef.current.control;
      }
    
    componentDidMount(){
        const coachClasses = this.props.classes.filter(c => c.userId === this.state.coachId );
        this.setState({coachClasses:coachClasses})

        
        const startDate = "2022-08-31";

        let updatedClasses = coachClasses.map(c => {
          let classInfo = `${c.classTitle} ${c.location}`
    
          // let playerRosters = this.props.classRosters.filter(cR => cR.classInfoId === c.id)
          // let playersInClass = this.props.players.filter(player => {
          //   return playerRosters.filter(pr => pr.playerProfileId === player.id)
          // })
          // console.log(playersInClass)
    
          c.text = classInfo
          return c
          
        })
    

        let classes = updatedClasses.filter(c => c.userId === this.props.auth.id) || [];
        
        this.calendar.update({startDate, classes});
      }

      componentDidUpdate(prevProps, prevState){
        console.log(prevState, this.state)
          if(prevState.coachId !== this.state.coachId){
              const coachClasses = this.props.classes.filter(c => c.userId*1 === this.state.coachId*1 );
              console.log(coachClasses)
              

          const startDate = "2022-08-31";
        //   this.setState({coachClasses:this.props.classes})
    
           let updatedCoachClasses = coachClasses.map(c => {
    
            let classInfo = `${c.classTitle} 
            ${c.location} 
            ${c.timeRange}`
          
            c.text = classInfo
            return c
            
          })
    
          let events =  updatedCoachClasses.filter(c => c.userId === this.state.coachId*1);
          this.setState({coachClasses:events})
          this.calendar.update({startDate, events});
        }
      
      }
    

    render(){
        const allCoaches = this.props.coaches;

        console.log(this.state.coachId, 'coachid')
        return (
            <div style={styles.wrap}>
                <div>
                    <select onChange={(e) => this.setState({ coachId: e.target.value })}> 
                        <option value=''> --select coach-- </option>
                        {
                            allCoaches.map(coach => {
                                return (
                                    <option key={coach.id} value={coach.id}> {coach.firstName} {coach.lastName} </option> 
                                )
                            })
                        }
                    </select>

                </div>
                 <div style={styles.left}>
                    <div style={{padding:'10px'}}>
                        <DayPilotNavigator 
                         selectMode={"week"}
                         startDate={DayPilot.Date.today()}
                         selectionDay={DayPilot.Date.today()}
                         onTimeRangeSelected={ args => {
                            this.calendar.update({
                              startDate: args.day
                            });
                          }}
                          {...this.state.onBeforeEventDomAdd}
                         />
                  </div>            
             </div>
            <div style={styles.main}>
          <div style={{padding:'5px'}}>
          <DayPilotCalendar
            {...this.state}

            ref={this.calendarRef}
          />

          </div>
        </div>
        </div>
        )
    }
};


const mapStateToProps = ({auth, players, coaches, classes}) => {
    return {
        auth, 
        players, 
        coaches,
        classes
    }
};

const mapDispatchToProps = (dispacth) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Coaches)