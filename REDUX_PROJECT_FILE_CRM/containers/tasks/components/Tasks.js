import React from 'react';

import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from "redux";
import { getAllTasks } from "../../tasks/services/AccountService";
import TableList from "../../../app/components/TableTasks";

class Tasks extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            //
        };
    }

    componentDidMount () {
        this.props.getAllTasks(this.objectToQueryString(this.state.params));
    }

    objectToQueryString (obj) {
        const qs = _.reduce(obj, (result, value, key) => {
            return !_.isNull(value) && !_.isUndefined(value) ? result += `${key}=${value}&` : result;
        }, '').slice(0, -1);

        return qs;
    }

    render () {

        const list = this.props.tasks;
        console.log('!!!!!!!!!!!!!!!!!!!!!!', list);

        return (
            <div>

                <div className = 'content-block'>
                    <div className = 'top-page-block'>
                        <div className = 'title-wrapper'>
                            <h1 className = 'page-title'>Task List</h1>
                            <div className = 'breadcrumbs'><a href = '#'>dashboard</a>   >   <a href = '#'>task list</a></div>
                        </div>
                        <div className = 'top-button-area'>
                            <div className = 'button turquoise'>Create New</div>
                        </div>
                    </div>
                </div>

                <div className = 'content-block'>
                    <div className = 'table-wrapper'>
                        <div className = 'position-relative'>

                            <TableList />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (store) => {
    return {
        tasks:      store.tasks.data,
    };
};

Tasks.defaultProps = {};

export default connect(
    mapStateToProps,
    (dispatch) =>
        bindActionCreators({
            getAllTasks,
        }, dispatch)
)(Tasks);
