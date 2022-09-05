import React, {Component} from "react";

import { connect } from 'react-redux';

import Table from 'react-bootstrap/Table';

class ListView extends Component {
    constructor(){
        super();
        this.state={
            coachId:'',
            classId:'',
            classToDisplay:{},
            classesToDisplay:[],
            coachClasses:[],
        }
    }
    componentDidMount(){
        this.setState({classesToDisplay:this.props.classes})

    }

      componentDidUpdate(prevProps, prevState){
        if(prevState.coachId !== this.state.coachId ){
          const coachClasses = this.props.classes.filter(c => c.userId*1 === this.state.coachId*1 );

    
         
          this.setState({classesToDisplay:coachClasses})
      
        }
      
      }
    
    
    render(){
        const allCoaches = this.props.coaches;
        const allClasses = this.props.classes;
        return (
            <div>
                <h2> List View </h2>
                <div>
                    <select onChange={(e) => this.setState({ coachId: e.target.value, classToDisplay:{} })}> 
                        <option value={allClasses}> --select a coach-- </option>
                        {
                            allCoaches.map(coach => {
                                return (
                                    <option key={coach.id} value={coach.id}> {coach.firstName} {coach.lastName} </option> 
                                )
                            })
                        }
                    </select>

                </div>
                <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Class Name</th>
                        <th>Location</th>
                        <th>Lead Coach </th>
                        <th>Class Days </th>
                        <th> Class Time </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.classesToDisplay.map(c => {
                                return (
                                    <tr>
                                    <td>{c.classTitle}</td>
                                    <td>{c.location}</td>
                                    <td></td>
                                    <td>{c.practiceDays}</td>
                                    <td> {c.timeRange }</td>
                                    </tr>
                                )
                            })
                        }
                      
                    </tbody>
                    </Table>
                </div>

            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, null)(ListView)