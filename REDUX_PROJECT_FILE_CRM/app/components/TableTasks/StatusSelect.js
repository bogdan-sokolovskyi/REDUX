import React from "react";
import Select from 'react-select';

const options = [
    { value: 1, label: 'Active', name: 'core-account-status'},
    { value: 2, label: 'Inactive', name: 'core-account-status' },
    { value: 3, label: 'Blocked', name: 'core-account-status' }
];



class StatusSelect extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {

        return (
            <div className = 'table-filter-select'>
                <Select
                    className = 'form-select page-select'
                    name = { this.props.name }
                    classNamePrefix = 'select'
                    defaultValue = { { value: 0, label: 'status' } }
                    options = { options }
                    styles = { customStyles }
                    onChange = { this.props.onChange }
                />
            </div>

        );
    }
}

export default StatusSelect;
