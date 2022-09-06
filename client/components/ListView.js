import React, {Component} from "react";

import { connect } from 'react-redux';

import Table from 'react-bootstrap/Table';



class ListView extends Component {
    constructor(){
        super();
        this.state={
            selectedCoach:'',
            selectedCoachId:null,
            classToDisplay:{},
            classesToDisplay:[],
            coachClasses:[],
            gymFilter:'',
            classTimeFilter:'',
            classDayFilter:'',
            data:[],
            search:''
        }
        this.getData = this.getData.bind(this);
        this.onChange = this.onChange.bind(this);
        this.showCoachClasses = this.showCoachClasses.bind(this)
    }

    showCoachClasses(coachId){
        console.log(coachId)
     this.setState({selectedCoachId: coachId})
     console.log(this.state)
        this.getData(coachId)

            console.log(this.state.selectedCoachId)
        
    }

    onChange(e){
        this.setState({search: e.target.value })
        this.getData(this.state.search)
      }

    getData = async() => {
        console.log('getDATA selectedCoachId', typeof this.state.selectedCoach)
        let container = [...this.props.classes]
        // if(this.state.selectedCoach.length === 0 ){
        //   this.setState({classesToDisplay:[...container]})
        // }
        if(this.state.selectedCoach !== null){
            const filteredClasses = container.filter(c => c.coachId === this.state.selectedCoach)
            console.log(filteredClasses)
            this.setState({classToDisplay:filteredClasses})
        }
    }
    // handleFilter(){

    //     if(this.state.gymFilter === 'OakBrook Park District'){
    //         let coachClasses = this.props.classes.filter(c => c.userId*1 === this.state.coachId*1 );
          

    //         let filteredClasses = coachClasses.filter(c => c.location === 'OakBrook Park District');
    //         console.log(filteredClasses, 'filtered by oakbrook')

    //         this.setState({classesToDisplay:filteredClasses})
             
    //      }
    // }


    // componentDidMount(prevProps){
    //     this.setState({classesToDisplay:this.props.classes, gymFilter:'', classDayFilter:''})

    // }

    //   componentDidUpdate(prevProps, prevState){
    //     if(prevState.coachId !== this.state.coachId || prevState.gymFilter !== this.state.gymFilter || prevState.classDayFilter !== this.state.classDayFilter ){
    //         if(this.state.gymFilter === 'OakBrook Park District'){
    //            let coachClasses = this.props.classes.filter(c => c.userId*1 === this.state.coachId*1 );
             

    //            let filteredClasses = coachClasses.filter(c => c.location === 'OakBrook Park District');
    //            console.log(filteredClasses, 'filtered by oakbrook')

    //            this.setState({classesToDisplay:filteredClasses})
                
    //         }
    //          if(this.state.gymFilter === 'Hinsdale Community House'){
    //             let coachClasses = this.props.classes.filter(c => c.userId*1 === this.state.coachId*1 );
    //             let filteredClasses = coachClasses.filter(c => c.location === 'Hinsdale Community House');
    //             console.log(filteredClasses, 'hinsdale')
                    
                         
    //                 this.setState({classesToDisplay:filteredClasses})

    //         }
    //         else  if(this.state.gymFilter === 'Connect 44 Center'){
    //             let coachClasses = this.props.classes.filter(c => c.userId*1 === this.state.coachId*1 );
    //             let filteredClasses = coachClasses.filter(c => c.location === 'Connect 44 Center');
    //             console.log(filteredClasses, 'connecr 44 center')
                 
                      
    //              this.setState({classesToDisplay:filteredClasses})

    //      }
    //      else  if(this.state.gymFilter === 'Lemont Park District'){
    //          let coachClasses = this.props.classes.filter(c => c.userId*1 === this.state.coachId*1 );
    //          let filteredClasses = coachClasses.filter(c => c.location === 'Lemont Park District');
    //          console.log(filteredClasses, 'LPD')
             
                  
    //          this.setState({classesToDisplay:filteredClasses})
    //      }

            // else {
            //     let coachClasses = this.props.classes.filter(c => c.userId*1 === this.state.coachId*1 );
    
            //     console.log(coachClasses, 'none')
            //      this.setState({classesToDisplay:coachClasses})

            // }
      
        //}
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
        
      
//}
    
    
    render(){
        const allCoaches = this.props.coaches;
        const {showCoachClasses}= this;
        const allClasses = this.state.classesToDisplay;
        return (
            <div>
                <h2> List View </h2>
                <div>
                    <select onChange={(e)=> showCoachClasses(e.target.value)}> 
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
                        <option value={'Connect 44 Center'}> Connect 44 Center </option>
                        <option value={'Hinsdale Community House'}> Hinsdale Community House </option>

                        
                    </select>
                    {/* <select onChange={(e) => this.setState({ classTimeFilter: e.target.value })}> 
                        <option value={allClasses}> --filter by start time-- </option>
                        <option value={'11:00:00'}> 4:00 PM </option>
                        <option value={'11:15:00'}> 4:15 PM </option>
                        <option value={'11:30:00'}> 4:30 PM </option>
                        <option value={'11:45:00'}> 4:45 PM </option>
                        <option value={'12:00:00'}> 5:00 PM </option>
                        <option value={'12:15:00'}> 5:15 PM </option>
                        <option value={'12:30:00'}> 5:30 PM </option>
                        <option value={'12:45:00'}> 5:45 PM </option>
                        <option value={'13:00:00'}> 6:00 PM </option>
                        <option value={'13:15:00'}> 6:15 PM </option>
                        <option value={'13:30:00'}> 6:30 PM </option>
                        <option value={'13:45:00'}> 6:45 PM </option>
                        <option value={'14:00:00'}> 7:00 PM </option>
                        <option value={'14:15:00'}> 7:15 PM </option>
                        <option value={'14:30:00'}> 7:30 PM </option>
                        <option value={'14:45:00'}> 7:45 PM </option>
                        <option value={'15:00:00'}> 8:00 PM </option>
                        <option value={'15:15:00'}> 8:15 PM </option>
                                
                    </select> */}
               

                    <select onChange={(e) => onChange(e.target.value )}> 
                        <option value={allClasses}> --filter by classDay-- </option>
                        <option value={'Monday'}> Monday  </option>
                        <option value={'Tuesday'}> Tuesday </option>
                        <option value={'Wednsday'}> Wednsday </option>
                        <option value={'Thursday'}> Thursday </option>
                        <option value={'Friday'}> Friday </option>
                        <option value={'Saturday'}> Saturday </option>
                        <option value={'Sunday'}> Sunday </option>

                        
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