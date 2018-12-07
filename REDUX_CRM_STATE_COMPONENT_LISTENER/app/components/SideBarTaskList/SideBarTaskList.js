import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";

class SideBarTaskList extends Component {

    render () {

        return (
            <React.Fragment>
                {this.props.taskList.task ?
                    <div className = 'sideBarTaskList' >
                        <h3>SideBarTask</h3>
                    </div>
                    : null}
            </React.Fragment>

        );
    }
}

function stateToProps (state) {
    return { taskList: state.taskList };
}
export default connect(stateToProps)(SideBarTaskList);
