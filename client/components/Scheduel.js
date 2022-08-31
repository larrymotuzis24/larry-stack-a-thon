// import {DayPilot, DayPilotCalendar} from "@daypilot/daypilot-lite-react";



// class Scheduel extends Component {
    //     render(){
        
        //         const coachClasses = this.props.classes.filter(c => c.leadCoach === this.props.auth.id);
        //         console.log(coachClasses)
        
        //         return (
            //             <div>
            //                 <h2> Your Week  </h2>
            //                 <div>
            //                     <DayPilotCalendar
            //                      scale={"Week"}
            //                      days={7}
            //                      timeRangeSelectedHandling={"Enabled"}
            //                      ressources={
                //                         coachClasses.map(c => c)
                //                      }
                
                
                //                     />
                
                //                 </div>
                
                //             </div>
                //         )
                //     }
                // };
                
                const mapStateToProps = (state) => {
                        return state
                    };
                    
                    const mapDispatchToProps = ( dispatch) => {
                            return {
                            
                                }
                            };
                            
                            import React, {Component} from 'react';
                    
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
      viewType: "Week",
      durationBarVisible: false,
      timeRangeSelectedHandling: "Enabled",
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

  componentDidMount() {
    console.log(this.props)
   
    const events = [
      {
        id: 1,
        text: "Event 1",
        start: "2023-03-07T10:30:00",
        end: "2023-03-07T13:00:00"
      },
      {
        id: 2,
        text: "Event 2",
        start: "2023-03-08T09:30:00",
        end: "2023-03-08T11:30:00",
        backColor: "#6aa84f"
      },
      {
        id: 3,
        text: "Event 3",
        start: "2023-03-08T12:00:00",
        end: "2023-03-08T15:00:00",
        backColor: "#f1c232"
      },
      {
        id: 4,
        text: "Event 4",
        start: "2023-03-06T11:30:00",
        end: "2023-03-06T14:30:00",
        backColor: "#cc4125"
      },
    ];

    const startDate = "2022-09-05";

    this.calendar.update({startDate, events});

  }

  render() {
    const coachClasses = this.props.classes.filter(c => c.leadCoach === this.props.auth.id);
    console.log(coachClasses)

    return (
      <div style={styles.wrap}>
        <div style={styles.left}>
          <DayPilotNavigator
            selectMode={"week"}
            startDate={DayPilot.Date.today()}
            selectionDay={DayPilot.Date.today()}
            onTimeRangeSelected={ args => {
              this.calendar.update({
                startDate: args.day
              });
            }}
          />
        </div>
        <div style={styles.main}>
          <DayPilotCalendar
            {...this.state}
            ref={this.calendarRef}
          />
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Scheduel)