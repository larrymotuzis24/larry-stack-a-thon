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
            gymFilter:''
        }
    }
    componentDidMount(){
        this.setState({classesToDisplay:this.props.classes, gymFilter:''})

    }

      componentDidUpdate(prevProps, prevState){
        if(prevState.coachId !== this.state.coachId || prevState.gymFilter !== this.state.gymFilter){
            if(this.state.gymFilter === 'OakBrook Park District'){
               let coachClasses = this.props.classes.filter(c => c.userId*1 === this.state.coachId*1 );
               console.log(coachClasses)

               let filteredClasses = coachClasses.filter(c => c.location === 'OakBrook Park District');
               console.log(filteredClasses)

               this.setState({classesToDisplay:filteredClasses})
                
            }
            else {
                
                   let coachClasses = this.props.classes.filter(c => c.userId*1 === this.state.coachId*1 );
                    
                         
                    this.setState({classesToDisplay:coachClasses})

            }
      
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

                    <select onChange={(e) => this.setState({ gymFilter: e.target.value })}> 
                        <option value={allClasses}> --filter by gym-- </option>
                        <option value={'OakBrook Park District'}> OakBrook Park District </option>
                        <option value={'Lemont Park District'}> Lemont Park District </option>
                        <option value={'Connect 44 Center '}> Connect 44 </option>
                        <option value={'Hinsdale Community House'}> Hinsdale Community House </option>

                        
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