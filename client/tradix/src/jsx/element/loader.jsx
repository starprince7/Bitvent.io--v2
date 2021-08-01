import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import loading_blocks from '../../images/loading_blocks.gif'

// #1652f0 - Blue;
// #1b2a4e - Purple;

function Loader({ isLoading }) {
    const [display, setDisplay] = useState('none')

    useEffect(() => {
        if (isLoading === true) {
            setDisplay('block')
        } else if(isLoading === false) {
            setDisplay('none')
        }
    }, [isLoading])


    const back = {
        display: `${display}`
    }
    const back_drop = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        zIndex: '100'
    }
    return (
        <div style={back}>
            <div style={back_drop}>
                <img width={120} src={loading_blocks} alt="" />
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoading: state.dashboard_state.isLoading
    }
}


export default connect(mapStateToProps)(Loader)
