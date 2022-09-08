import React, {Component} from "react";

import { connect } from 'react-redux';

import Table from 'react-bootstrap/Table';



class ListView extends Component {
    constructor(){
        super();
        this.state={
            selectedCoach:'',
            selectedCoachId:'',
            classToDisplay:{},
            classesToDisplay:[],
            coachClasses:[],
            gymFilter:'',
            classTimeFilter:'',
            classDayFilter:'',
            data:[],
            search:'',
        }
    }

    componentDidMount(){
        this.setState({classesToDisplay:this.props.classes})
    }
      componentDidUpdate(prevProps, prevState){

        if(prevState.selectedCoachId !== this.state.selectedCoachId || prevState.gymFilter !== this.state.gymFilter ){

            let classesToFilter = this.props.classes.filter(c => c.userId*1 === this.state.selectedCoachId*1)
        
            if(this.state.gymFilter === 'OakBrook Park District'){
               let coachClasses = classesToFilter.filter(c => c.userId*1 === this.state.selectedCoachId*1 );
             

               let filteredClasses = classesToFilter.filter(c => c.location === 'OakBrook Park District');
               console.log(filteredClasses, 'filtered by oakbrook')

               this.setState({classesToDisplay:filteredClasses})
                
            }
             if(this.state.gymFilter === 'Hinsdale Community House'){
                let coachClasses = classesToFilter.filter(c => c.userId*1 === this.state.selectedCoachId*1 );
                let filteredClasses = coachClasses.filter(c => c.location === 'Hinsdale Community House');
                console.log(filteredClasses, 'hinsdale')
                    
                         
                    this.setState({classesToDisplay:filteredClasses})

            }
            if(this.state.gymFilter === 'Connect 44 Center'){
                let coachClasses = classesToFilter.filter(c => c.userId*1 === this.state.selectedCoachId*1  );
                let filteredClasses = coachClasses.filter(c => c.location === 'Connect 44 Center');
                console.log(filteredClasses, 'connecr 44 center')
                 
                      
                 this.setState({classesToDisplay:filteredClasses})

         }
          if(this.state.gymFilter === 'Lemont Park District'){
             let coachClasses = classesToFilter.filter(c => c.userId*1 === this.state.selectedCoachId*1 );
             let filteredClasses = coachClasses.filter(c => c.location === 'Lemont Park District');
             console.log(filteredClasses, 'LPD')
             
                  
             this.setState({classesToDisplay:filteredClasses})
         }
        if (this.state.selectedCoachId === '') {
            console.log('display deez')
             this.setState({classesToDisplay:classesToFilter})
         }

          
      
        }
        // if(prevState.classTimeFilter !== this.state.classTimeFilter ){
        //     const classesTofilter = this.state.classesToDisplay;
        //     let filteredClasses = classesTofilter.filter(c => {
        //         return c.start === this.state.classTimeFilter
        //     })
        //     console.log(filteredClasses)
        // }
        // if(prevState.classDayFilter !== this.state.classDayFilter ){
        //     const classesTofilter = this.state.classesToDisplay;
        //     console.log(classesTofilter, this.state.classDayFilter)
        //     let filteredClasses = classesTofilter.filter(c =>  c.practiceDays === this.state.classDayFilter);
            
        //     console.log(filteredClasses, 'classDAyfilter')
        //     this.setState({classesToDisplay:filteredClasses})
        // }
        
      
}
    
    
    render(){
        const allCoaches = this.props.coaches;
        const allClasses = this.state.classesToDisplay;
        const coachClasses = allClasses.filter(c => c.coachId*1 === this.state.selectedCoachId*1);
        console.log(coachClasses)
        return (
            <div>
                <h2> List View </h2>
                <div>
                    <select 
                    value={this.state.selectedCoachId}
                    onChange={(e)=> this.setState({selectedCoachId:e.target.value})}> 
                        <option value={''}> --select a coach-- </option>
                        {
                            allCoaches.map(coach => {
                                return (
                                    <option key={coach.id} value={coach.id}> {coach.firstName} {coach.lastName} </option> 
                                )
                            })
                        }
                    </select>

                    <select value={this.state.gymFilter} onChange={(e) => this.setState({ gymFilter: e.target.value })}> 
                        <option value={''}> --filter by gym-- </option>
                        <option value={'OakBrook Park District'}> OakBrook Park District </option>
                        <option value={'Lemont Park District'}> Lemont Park District </option>
                        <option value={'Connect 44 Center'}> Connect 44 Center </option>
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
                                    <tr key={c.id}>
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