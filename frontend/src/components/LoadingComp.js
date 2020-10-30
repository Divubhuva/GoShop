import React, { Component } from 'react'

export default class LoadingComp extends Component {
    render() {
        return (
            <div className="Loading">
            <div className ="loader"> </div>
            <div className = "LoadingText">Loading...</div>
            </div>
        )
    }
}
