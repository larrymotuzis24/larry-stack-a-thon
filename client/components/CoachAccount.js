import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
class CoachAccount extends Component {
  constructor() {
    super();
    this.state = {
      avatar: '',
      firstName:'', 
      lastName:''
    };
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    // this.el.addEventListener('change', (ev) =>{
    //   const file = ev.target.files[0];
    //   const reader = new FileReader();
    //   reader.addEventListener('load', () =>{
    //     this.setState({avatar: reader.result})
    //   })
    //   reader.readAsDataURL(file);
    // })
  }

  save(ev) {
    ev.preventDefault();
    const user = {
      id: this.props.auth.id,
      imageUrl: this.state.avatar,
    };
    this.props.saveAvatar(user);
  }

  render() {
    const { auth, match } = this.props;
    const path = match.path;
    const { avatar } = this.state;
    const { save } = this;
    return (
      <main className="container mt-4" style={{ minHeight: '75vh' }}>
        <h2 style={{}}>Account Details</h2>
        <div className="w-100 row row-cols-2 g-4 justify-content-between">
          <div className="mt-5 col-md-6" style={{}}>
            <h6 className="mb-3"> FirstName:  {auth.firstName}  </h6>
            <hr />
            <div className="" style={{}}>
              {path === '/account' ? (
                <div className="flex-column">
                  <div className="d-flex align-items-center my-4">
                   

                    <div className="ms-3">
                      <p style={{}}>
             
                        <br />
                        {auth.email}
                      </p>
                  <hr />
                    </div>
                  </div>
                  <div style={{
                    display:'flex',
                  }}>
                  <Button
                    href="editUser"
                    className="btn btn-light border-dark mb-4 mt-3"
                  >
                    EDIT INFORMATION
                  </Button>
                  <br />
                  <Button 
                  href="#passwordUser"  
                  className="btn btn-light border-dark mb-4 mt-3"
                  style={{
                    background:'red',
                    marginLeft:'5px'
                    
                    
                  }
                  }
                  >
                    CHANGE PASSWORD
                    </Button>
                    </div>
                 
                </div>
              ) : null}
            </div>
          </div>
          <div className="mt-5 col-md-6" style={{}}>
            <h6 className="mb-3">LastName: {auth.lastName} </h6>
            <hr />
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    saveAvatar: (user) => dispatch(editUser(user, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoachAccount);
