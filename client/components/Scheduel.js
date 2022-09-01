
         
 import React, {Component} from 'react';
  import { fetchClasses } from '../store/classInfo';
                    
  import {connect} from 'react-redux'
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

class Scheduel extends Component {
  
  constructor(props) {
    super(props);
    this.calendarRef = React.createRef();
    this.state = {

      classes:[],
      viewType: "Days",
      days:7,
      theme:"calendar_green",
      headerDateFormat:"dddd M/d",
      timeFormat:'Clock12Hours',
      startDate:'2022-09-05',
      durationBarVisible: false,
      timeRangeSelectedHandling: "Enabled",

      onBeforeEventDomAdd: args => {
        args.element = <div>
          {args.e.data.text}
          <div style={{position: "absolute", right: "5px", top: "9px", width: "17px", height: "17px"}}
               onClick={() => this.deleteEvent(args.e)}><img src={"delete-17.svg"} alt={"Delete icon"}/></div>
        </div>;
      },
    
    
      onTimeRangeSelected: async args => {
        const dp = this.calendar;
        const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
        dp.clearSelection();
        if (!modal.result) { return; }
        dp.events.add({
          start: args.start,
          end: args.end,
          id: DayPilot.guid(),
          text: modal.result
        });
      },

      eventDeleteHandling: "Update",
      onEventClick: async args => {
        const dp = this.calendar;
        const modal = await DayPilot.Modal.prompt("Update event text:", args.e.text());
        if (!modal.result) { return; }
        const e = args.e;
        e.data.text = modal.result;
        dp.events.update(e);
      },
      
    };
  }

  get calendar() {
    return this.calendarRef.current.control;
  }
  
  componentDidMount(){
    this.props.fetchClass()
    this.setState({classes:this.props.classes})


    
    const startDate = "2022-08-31";
    let updatedClasses = this.props.classes.map(c => {
      let classInfo = `${c.classTitle} </br> Location${c.location}, ${c.start} - ${c.end}`

      // let playerRosters = this.props.classRosters.filter(cR => cR.classInfoId === c.id)
      // let playersInClass = this.props.players.filter(player => {
      //   return playerRosters.filter(pr => pr.playerProfileId === player.id)
      // })
      // console.log(playersInClass)

      c.text = classInfo
      return c
      
    })

    let classes = updatedClasses.filter(c => c.leadCoach === this.props.auth.id);
    
    
    this.calendar.update({startDate, classes});
  }
  componentDidUpdate(previousProps){
    if(previousProps.classes !== this.props.classes){
      const startDate = "2022-08-31";
      this.setState({classes:this.props.classes})

      let updatedClasses = this.props.classes.map(c => {
        let classInfo = `${c.classTitle} Location: ${c.location}`
      
        c.text = classInfo
        return c
        
      })

      let events =  updatedClasses.filter(c => c.leadCoach === this.props.auth.id);
      this.setState({classes:events})
      this.calendar.update({startDate, events});
    }
  }


  render() {
          // let studentsInClass = this.props.players.filter(player => player.id === )
  
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({classes,classRosters, auth}) => {
  return {
    classes,
    auth,
    classRosters
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClass: ()=>  dispatch(fetchClasses())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scheduel)