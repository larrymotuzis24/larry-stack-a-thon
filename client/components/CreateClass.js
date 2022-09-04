import React, { Component } from "react";

import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



class CreateClass extends Component {
    constructor(){
        super();
        this.state= {
            className:'',
            start:'',
            end:'',
            date:'',
            leadCoach:''

        }
    }
    render(){
        console.log('readasd')
        return (
            <div>
                <div>
                    <h2> Create Class </h2>
                </div>
                <main>

                <fieldset style={{
                    width:'80%',
                    display:'flex',
                    justifyContent:'space-around',
                    display:'column'
                }}>
                    <Form.Group className="mb-3">
                    <Form.Label > Class Title </Form.Label>
                    <Form.Control placeholder="enter class title" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                   
                    </Form.Group>
                    <Form.Group className="mb-3">

                    <Form.Select style={{
                        
                    }}>
                        <option>Lead Coach </option>
                    </Form.Select>
                    <div style={{
                        display:'flex',
                        justifyContent:'space-between',
                        width:'80%'
                    }}>
                        
                            <Form.Select style={{
                                width:'80%'
                            }}> 
                                <option> Class Start </option>
                            </Form.Select>
                            <Form.Select style={{
                                width:'80%%'
                            }}> 
                                <option> Class End </option>
                            </Form.Select>

                        </div>
                        </Form.Group>
                        <InputGroup>
                            <InputGroup.Text>Class Description </InputGroup.Text>
                            <Form.Control as="textarea" aria-label="With textarea" />
                        </InputGroup>
                        </fieldset>
                        <Button type="submit">Submit</Button>
                
                </main>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = (dispacth) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateClass)

{/* <div>
<Form>
    <input placeholder="className" />
    <input placeholder="class date" />
    <input placeholder="startTime " />
    <input placeholder="endTime" />
    <input placeholder="leadCoach" />
    <input placeholder="assistant Coaches" />

</Form>

</div> */}