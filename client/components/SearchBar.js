import React, { useState } from 'react';
import { connect } from 'react-redux';
import players from '../store/players';


const SearchBar = ({players}) => {
    const [query, setQuery] = useState('');
  return (
    <div
      className="dropdown"
      style={{
        zIndex: '10',
      }}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Find Player by first/last name"
        onChange={(e) => setQuery(e.target.value)}
      />
    
      <div id="myDropdown" className="dropdown-content">
      {players
        .filter((player) => {
          if (query === '') {
            return player
          } else if (player.firstName.toLowerCase().includes(query.toLowerCase())) {
            return player;
          }
        })
        .slice(0, 9)
        .map((player) => {
          if (query !== '') {
            return (
              <a
                href={`/players/${player.id}`}
                key={player.id}
                style={{
                  display: 'block',
                  width: '100%',
                  boxSizing: 'border-box',
                  border: '1px solid black',
                  marginTop: '-1px',
                }}
                className="text-link p-2"
              >
                {player.firstName} {player.lastName}
              </a>
            );
          }
        })}
    </div>
    </div>
      )
}

const mapStateToProps = ({players}) => {
    return {
        players
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, null)(SearchBar)