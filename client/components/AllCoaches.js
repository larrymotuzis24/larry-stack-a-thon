import React, { Component } from "react";

import { connect } from "react-redux";
import {DayPilot, DayPilotCalendar, DayPilotNavigator} from "daypilot-pro-react";
import { Link } from "react-router-dom";

import Table from 'react-bootstrap/Table';

import Alert from 'react-bootstrap/Alert';

import Button from 'react-bootstrap/Button';
import EditClass from "./EditClass";

                         
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
            showRoster:false,
            selectedCoach:'',
            classToDisplay:'',
            coachClasses:'',
            viewType: "Days",
            businessBeginsHour:16,
            businessEndsHour:23,
            days:7,
            cellDuration:15,
            theme:"calendar_green",
            cellHeight:'25',
            headerDateFormat:"dddd M/d",
            startDate:DayPilot.Date.today(),
            durationBarVisible: false,
            timeRangeSelectedHandling: "Disabled",
            heightSpec:"Fixed",
            height:700,
            locale:"en-us",

   

            eventDeleteHandling: "Update",
             onEventClick: async args => {
          
            const classToDisplay = this.props.classes.find(c => c.id === args.e.value());
    
            this.setState({classId: args.e.value(), classToDisplay:classToDisplay, startDate:args.e.part.start.value, showRoster:true});
    
            }
        }

    }
    get calendar() {
        return this.calendarRef.current.control;
      }
    
    componentDidMount(){
      console.log(this.state)
        const allClasses = this.props.classes
        this.setState({coachClasses:allClasses})

        
        let updatedClasses = allClasses.map(c => {
          let classInfo = `${c.classTitle} ${c.location}`
    
    
          c.text = classInfo
          return c
          
        })
    

        let classes = updatedClasses
        
        this.calendar.update({classes});
      }

      componentDidUpdate(prevProps, prevState){
        if(this.state.coachId !== prevState.coachId  ){
          const coachToDisplay = this.props.coaches.find(c => c.id*1 === this.state.coachId*1);
          

           const coachClasses = this.props.classes.filter(c => c.userId*1 === coachToDisplay.id ) ;
           
           let updatedCoachClasses = coachClasses.map(c => {
    
            let classInfo = 
            `${c.classTitle} 
              ${c.location} 
              `
             c.text = classInfo
              return c
            
          })
          
       
        
          
          let events =  updatedCoachClasses.filter(c => c.userId === this.state.coachId*1);
  
          this.setState({coachId:coachToDisplay.id, coachToDisplay:coachToDisplay})
          this.calendar.update({events});
          console.log(this.state)
        
        }
      
      }
    
    

    render(){
        const {coaches, coachId} = this.props;
        const { onChange } = this;
        const {coachToDisplay} = this.state;

        const rosters = this.props.classRosters.filter(roster => {
          return roster.classInfoId*1 === this.state.classId*1
         })

        const roster = rosters.map(r => {
           return this.props.players.find(player => {
             return player.id === r.playerProfileId
           })
         })

         const classDisplay = this.state.classToDisplay;


        return (
            <div>
                 {
                  this.state.coachId ? (
                       <div>
                         <h4 style={{
                          textAlign:'center'
                         }}> Scheduel for {coachToDisplay?.firstName} </h4>
                         </div>

                  ): (
                    <div>
                    <h4 style={{
                     textAlign:'center'
                    }}> All Classes </h4>
                    </div>
                  )
                 }
                  {
                          this.state.showRoster ? (
                            <div style={{
                              width:"fitContent",
                              border:'solid black 2px',
                              display:'absolute'
                            }}>
                              <div style={{
                                padding:'10px'
                              }}>
                                <Alert >
                                <Table striped bordered hover variant="dark">
                              <thead>
                                <tr>
                                  <th> firstName </th>
                                  <th> lastName </th>
                                  <th> Emergency Contact </th>
                                  <th> Phone number </th>
                                </tr>
                              </thead>
                              <tbody>
                                  {
                                    roster.map(player => {
                                      return (
                                        <tr key={player.id}>
                                          <th> {player.firstName}</th>
                                          <th> {player.lastName}</th>
                                          <th> {player.emergencyContact}</th>
                                          <th> {player.emergencyContactPhone}</th>
  
                                        </tr>
                                        )
                                    })
                                  }
                              </tbody>
                            </Table>
                            </Alert>
                            </div>
                            <Button onClick={() => this.setState({showRoster:false})} variant="outline-success">
                              Close 
                              </Button>
                              <Button onClick={() => this.setState({showRoster:false})} variant="outline-success">
                             <Link to={`/class/edit/${classDisplay.id}`} >  Edit Class </Link>
                              </Button>

                            </div>
                          ):null
                        }
                   
            <div style={{
              display:'flex',
              marginTop:'10px'
            }}>
              
                 <div style={styles.left}>
                    <div style={{
                      padding:'10px', 
                      display:'flex'
                      }}>
                        <DayPilotNavigator 
                         selectMode={"week"}
                         startDate={this.state.startDate}
                         timeFormat={'clock24Hours'}
                         selectionDay={DayPilot.Date.today()}
                         
                         onTimeRangeSelected={ args => {
                            this.calendar.update({
                              startDate: args.start
                            });
                          }}
                          {...this.state.onBeforeEventDomAdd}
                         />
                  </div>            
             <div>
                    <select onChange={(ev)=> this.setState({coachId:ev.target.value})}> 
                        <option value=''> --select a coach-- </option>
                        {
                            coaches?.map(coach => {
                                return (
                                    <option key={coach.id} href={`/${coach.firstName}`} value={coach.id}> {coach.firstName} {coach.lastName} </option> 
                                )
                            })
                        }
                    </select>

                </div>
                {
                   coachToDisplay ? (
                <div 
                style={{
                  border:'solid blue 5px',
                  marginTop:'5px'
                }}
                id={'coachDisplay'}>
                  <p> Coach Details </p>
                  <a> Name: {coachToDisplay?.firstName} {coachToDisplay?.lastName} </a>
                  <br>
                  </br>
                  <a href={`coaches/edit/${coachToDisplay?.id}`}> Edit Account </a>
                </div>

                   ):null
                }
             </div>
            <div style={styles.main}>
          <div style={{padding:'5px'}}>
          <DayPilotCalendar
        
            {...this.state}

            ref={this.calendarRef}
          />

          </div>
        </div>
        <div>
        </div>
        </div>
            <div>
             
                      <div>
                       
                      
                </div>
            
            </div>
                        
            </div>
        )
    }
};


const mapStateToProps = ({auth, players, coaches, classes, classRosters}) => {
    return {
        auth, 
        players, 
        coaches,
        classes,
        classRosters
    }
};

const mapDispatchToProps = (dispacth) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Coaches)