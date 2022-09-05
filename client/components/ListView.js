import React, {Component} from "react";

import { connect } from 'react-redux';

class ListView extends Component {
    constructor(){
        super();
        this.state={
            coachId:'',
            classId:'',
            classToDisplay:{},
            coachClasses:[],
        }
    }
    componentDidMount(){
        const coachClasses = this.props.classes.filter(c => c.userId === this.state.coachId );
        this.setState({coachClasses:coachClasses})

    }

      componentDidUpdate(prevProps, prevState){
        if(prevState.coachId !== this.state.coachId ){
          const coachClasses = this.props.classes.filter(c => c.userId*1 === this.state.coachId*1 );

    
         
          this.setState({coachClasses:coachClasses, classToDisplay:''})
      
        }
      
      }
    
    
    render(){
        const allCoaches = this.props.coaches;
        return (
            <div>
                <h2> List View </h2>
                <div>
                    <select onChange={(e) => this.setState({ coachId: e.target.value, classToDisplay:{} })}> 
                        <option value={this.props.classes}> --select a coach-- </option>
                        {
                            allCoaches.map(coach => {
                                return (
                                    <option key={coach.id} value={coach.id}> {coach.firstName} {coach.lastName} </option> 
                                )
                            })
                        }
                    </select>

                </div>

            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, null)(ListView)