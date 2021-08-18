import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { clearError } from '../../redux/app_state/actions'

function ErrorPopup({ error, isLoading, clearError }) {
    const [display, setDisplay] = useState('none')

    const error_styling = {
        display: display,
        width: '66%',
        maxWidth: '500px',
        height: 'auto',
        fontSize: '1.2em',
        color: 'white',
        background: 'transparent',
        position: 'fixed',
        top: '25px',
        right: '2%',
        zIndex: '1000',
    }

    const btn_style = {
        display: 'inline',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '22px',
        padding: '1px',
    }

    const text_style = {
        marginLeft: '15px',
        padding: '15px 0',
        fontSize: '16px',
    }

    const bootstrap_alert = {
        height: 'auto',
        boxShadow: '1px 1px 7px silver',
        border: 'solid 1px #ff11007a'
    }


    useEffect(() => {
        if (error) {
            setDisplay('block')
        }
        else {
            setDisplay('none')
        }

        if (isLoading) setDisplay('none')

        if (display === 'block') {
            setTimeout(() => {
                clearError()
                setDisplay('none')
            }, 9000)
        }

    }, [error, isLoading, display, clearError])


    return (
        typeof error === 'object' ?
            (<div style={error_styling}>
                <div style={bootstrap_alert} className="alert alert-danger" role="alert">
                    <div>
                        {/* <p className="btn" onClick={() => setDisplay('none')} style={btn_style}>{'x'}</p> */}
                    
                        {/* display error the here! */}
                        {error?.username && (<span style={text_style}>{error?.username}.<br /></span>)}
                        {error?.email && (<span style={text_style}>{error?.email}.<br /></span>)}
                        {error?.password && (<span style={text_style}>{ error?.password }.<br /></span>)}

                    </div> 
                </div>
            </div>) : 
         (<div style={error_styling}>
            <div style={bootstrap_alert} className="alert alert-danger" role="alert">
                <div>
                    <p className="btn" onClick={() => setDisplay('none')} style={btn_style}>{'x'}</p>
                
                    {/* display error the here! */}
                    <span style={text_style}>{ error }</span>
                </div> 
            </div>
        </div>)
    )
}

const mapStateToProps = state => {
    return {
        error: state.dashboard_state.error,
        isLoading: state.dashboard_state.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearError: () => dispatch(clearError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPopup)
