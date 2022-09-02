import axios from 'axios';

import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

const Players = ({auth, players}) => {
    console.log(players)
    return (
        <div>
            <h1> All Players </h1>
            <main>
                <div>
                    {
                        players.map(player => {
                            return  (
                                <div key={player.id}>
                                    <Link to={`/player/${player.id}`}> <a> {player.firstName} {player.lastName}</a> </Link>
                                    </div>
                            )
                        })
                    }
                </div>

            </main>
            
        </div>
    )
};

const mapStateToProps = ({auth, players}) => {
    return {
        auth, 
        players
    }
}
export default connect(mapStateToProps, null) (Players);