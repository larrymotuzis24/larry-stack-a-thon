
         
 import React, {Component} from 'react';
  import { fetchClasses } from '../store/classInfo';
  import Table from 'react-bootstrap/Table';
                    
  import {connect} from 'react-redux'
  import {DayPilot, DayPilotCalendar, DayPilotNavigator} from "daypilot-pro-react";

                         
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
};let id = '';
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
      timeFormat:'Clock24Hours',
      timeDisplay:'9:00',
      startDate:DayPilot.Date.today(),
      durationBarVisible: false,
      timeRangeSelectedHandling: "Disabled",
      heightSpec:"Fixed",
      height:600,

      // onBeforeEventDomAdd: args => {
      //   args.element = <div>
      //     {args.e.data.text}
      //     <div style={{position: "absolute", right: "5px", top: "9px", width: "17px", height: "17px"}}
      //          onClick={() => this.deleteEvent(args.e)}><img src={"delete-17.svg"} alt={"Delete icon"}/></div>
      //   </div>;
      // },
    
    
      // onTimeRangeSelected: async args => {
      //   const dp = this.calendar;
      //   const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
      //   dp.clearSelection();
      //   if (!modal.result) { return; }
      //   dp.events.add({
      //     start: args.start,
      //     end: args.end,
      //     id: DayPilot.guid(),
      //     text: modal.result
      //   });
      // },

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
      const startDate = Da
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
          // let studentsInClass = this.props.players.filter(player => player.id === )
          const rosters = this.props.classRosters.filter(roster => {
           return roster.classInfoId*1 === this.state.classId*1
          })

         const roster = rosters.map(r => {
            return this.props.players.find(player => {
              return player.id === r.playerProfileId
            })
          })
        
  
    return (
      <div style={styles.wrap}>
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
          <div style={{
            width:"fitContent"
          }}>
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
                        <tr key={player.id }>
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