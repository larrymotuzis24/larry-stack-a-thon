import axios from 'axios';

import React, {Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import Pagination from './Pagination';
import SearchBar from './SearchBar';



class Players extends Component {
    constructor() {
        super();
        this.state = {
          currPage: 1,
          playersPerPage: 24,
          option: '',
          category: '',
          selectAll: '',
        };
        this.setCurrentPage = this.setCurrentPage.bind(this);
        this.onChange = this.onChange.bind(this);
      }
    
      setCurrentPage(currPage) {
        this.setState({ currPage: currPage });
      }
    
      onChange(ev) {
        this.setState({ [ev.target.name]: ev.target.value });
        if (window.location.href.includes('/page/')) {
          window.location.href = '/players/page/1';
        }
        const filters = document.getElementsByClassName('category-filters');
        const filtersArr = Array.from(filters);
        filtersArr.map(
          (filter) => (filter.style.borderBottom = '2px solid rgba(0, 0, 0, 0)')
        );
    
        ev.target.style.borderBottom = '2px solid black';
      }
    
      componentDidMount() {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto',
        });
      }

      render() {
        const pageNumber = this.props.match.params.id * 1;
        const { players } = this.props;
        const { option } = this.state;
        const { setCurrentPage, onChange } = this;
    
        let idxOfLastRecord;
        if (!pageNumber) {
          idxOfLastRecord = this.state.currPage * this.state.playersPerPage;
        } else {
          idxOfLastRecord = pageNumber * this.state.playersPerPage;
        }
    
        const filteredPlayers = players.filter(
          (player) => player.id === option * 1
        );
    
        const idxOfFirstRecord = idxOfLastRecord - this.state.playersPerPage;
        const listPlayers =
          filteredPlayers.length === 0
            ? players.slice(idxOfFirstRecord, idxOfLastRecord)
            : filteredPlayers.slice(idxOfFirstRecord, idxOfLastRecord);
        const numPages =
          filteredPlayers.length === 0
            ? Math.ceil(players.length / this.state.playersPerPage)
            : Math.ceil(filteredPlayers.length / this.state.playersPerPage);
            
            
            return (
                <div>
                    <div style={{
                        padding:'20px'
                    }}>
                        <SearchBar /> 

                    </div>
                      <div className="row" style={{ gap: '2rem' }}>
                    <div className="row row-cols-2 row-cols-lg-4">
                    {
                    listPlayers.map((player) => {
                        return (
                                <div key={player.id} className="col">
                                     <div
                    className="card border-0 bg-transparent mb-5"
                    style={{ 
                      background: '#eef7ea',
                     }}
                  >
                    <Link
                      id={player.id}
                      to={`/players/${player.id}`}
                      className="text-decoration-none"
                    >
                      <div
                        className="card-body pt-3 pb-0 px-0"
                        style={{ background: '#eef7ea' }}
                      >
                        <p className="my-0 text-black lead" style={{
                          textAlign:'center'
                        }}>{player.firstName} {player.lastName}</p>

                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Pagination
          numPages={numPages}
          setCurrentPage={setCurrentPage}
          pageNumber={pageNumber}
        />

        </div>
            )
        }
}

const mapStateToProps = ({auth, players}) => {
    return {
        auth, 
        players
    }
}
export default connect(mapStateToProps, null) (Players);