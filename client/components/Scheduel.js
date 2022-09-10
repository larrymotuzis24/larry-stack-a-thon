 
 import React, {Component} from 'react';
  import { fetchClasses } from '../store/classInfo';
  import Table from 'react-bootstrap/Table';
  import Alert from 'react-bootstrap/Alert';
                    
  import {connect} from 'react-redux'
  import {DayPilot, DayPilotCalendar, DayPilotNavigator} from "daypilot-pro-react";
  import Button from 'react-bootstrap/Button';

                           
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


                         
class Scheduel extends Component {
  
  constructor(props) {
    super(props);
    this.calendarRef = React.createRef();
    this.state = {
      classId:'',
      classes:[],
      viewType: "Days",
      days:7,
      businessBeginsHour: 16,
      businessEndsHour: 23,
      cellDuration:15,
      theme:"calendar_green",
      cellHeight:'25',
      headerDateFormat:"dddd M/d",
      timeFormat:'Clock12Hours',
      timeDisplay:'9:00',
      startDate:DayPilot.Date.today(),
      durationBarVisible: false,
      timeRangeSelectedHandling: "Disabled",
      heightSpec:"Fixed",
      height:600,
      showRoster:false,

  
     

      eventDeleteHandling: "Update",
      onEventClick: async args => {
        this.setState({classId: args.e.value(), showRoster:true });
   
      },
      
    };
  }

  get calendar() {
    return this.calendarRef.current.control;
  }
  
  componentDidMount(){
    this.props.fetchClass()
    this.setState({classes:this.props.classes})


    let updatedClasses = this.props.classes.map(c => {
      let classInfo = `
      ${c.classTitle} 
      ${c.location}`

  

      c.text = classInfo
      return c
      
    })
   
    let classes = updatedClasses.filter(c => c.userId === this.props.auth.id);
    
    
    this.calendar.update({classes});
  }
  componentDidUpdate(previousProps){
    if(previousProps.classes !== this.props.classes){
      
      this.setState({classes:this.props.classes})

      let updatedClasses = this.props.classes.map(c => {

        let classInfo = `
        ${c.classTitle} 
        ${c.location} 
        `
      
        c.text = classInfo
        return c
        
      })
 

      let events =  updatedClasses.filter(c => c.userId === this.props.auth.id);
      this.setState({classes:events})
      this.calendar.update({events});
    }
  }


  render() {
         
          const rosters = this.props.classRosters.filter(roster => {
           return roster.classInfoId*1 === this.state.classId*1
          })

         const roster = rosters.map(r => {
            return this.props.players.find(player => {
              return player.id === r.playerProfileId
            })
          })
        
  
    return (
      <div style={{
        display:'flex',
        flexDirection:'column'
      }}>
        <div>
          {
            this.state.showRoster ? (
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
                                    <tr>
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
                    <Button 
                    onClick={() => this.setState({showRoster:false})} variant="outline-success">
                          Close 
                      </Button>
              </Alert>

            ): null
          }

        </div>
          <div style={{
            display:'flex'
          }}>
            <div 
            style={{
              padding:'10px', 
              display:'flex'
              }}>
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
          <div style={styles.main}>
          <div style={{padding:'5px'}}>
          <DayPilotCalendar
        
            {...this.state}

            ref={this.calendarRef}
          />

          </div>
        </div>

        
        </div>

          </div>
    );
  }
}

const mapStateToProps = ({classes,classRosters, players,auth}) => {
  return {
    classes,
    auth,
    classRosters,
    players
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClass: ()=>  dispatch(fetchClasses())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scheduel)