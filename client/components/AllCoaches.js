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
        this.state={
            coachId:'',
            classId:'',
            coachClasses:[],
            viewType: "Days",
            days:7,
            businessBeginsHour: 15,
            businessEndsHour: 23,

            eventDeleteHandling: "Update",
             onEventClick: async args => {
            this.setState({classId: args.e.value()});
        
        // const dp = this.calendar;
        // const modal = await DayPilot.Modal.prompt(<Navbar />);
        // if (!modal.result) { return; }
        // const e = args.e;
        // e.data.text = modal.result;
        // dp.events.update(e);
            },
        }
    }
    componentDidMount(){
        const coachClasses = this.props.classes.filter(c => c.userId === this.state.coachId );
        console.log(coachClasses)
    //     this.props.fetchClass()
    //     this.setState({coachClasses:this.props.classes})
    
    
    //     const startDate = "2022-08-31";
    //     let updatedClasses = this.props.classes.map(c => {
    //       let classInfo = `${c.classTitle} ${c.location}`
    
    //       // let playerRosters = this.props.classRosters.filter(cR => cR.classInfoId === c.id)
    //       // let playersInClass = this.props.players.filter(player => {
    //       //   return playerRosters.filter(pr => pr.playerProfileId === player.id)
    //       // })
    //       // console.log(playersInClass)
    
    //       c.text = classInfo
    //       return c
          
    //     })
    
    //     let classes = updatedClasses.filter(c => c.userId === this.props.auth.id);
        
        
    //     this.calendar.update({startDate, classes});
      }

      componentDidUpdate(previousProps){
        const coachClasses = this.props.classes.filter(c => c.userId*1 === this.state.coachId*1 );
        console.log(coachClasses)
    //     if(previousProps.coachId !== this.state.coachId){
    //         this.setState({ coachId: this.state.coachId})
    //         console.log(this.state.coachId)
    //       const startDate = "2022-08-31";
    //       this.setState({coachClasses:this.props.classes})
    
    //       let updatedClasses = this.props.classes.map(c => {
    
    //         let classInfo = `${c.classTitle} 
    //         ${c.location} 
    //         ${c.timeRange}`
          
    //         c.text = classInfo
    //         return c
            
    //       })
    
    //       let events =  updatedClasses.filter(c => c.userId === this.props.auth.id);
    //       this.setState({classes:events})
    //       this.calendar.update({startDate, events});
        }
    //   }
    

    

    render(){
        console.log(this.props)
        const allCoaches = this.props.coaches;
        return (
            <div style={styles.wrap}>
                <div>
                    <select onChange={(e) => this.setState({ coachId: e.target.value.id })}> 
                        <option> --select coach-- </option>
                        {
                            allCoaches.map(coach => {
                                return (
                                    <option> {coach.firstName} {coach.lastName} </option> 
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