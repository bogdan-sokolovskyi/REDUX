import _ from 'lodash';
import { Table, Tooltip } from 'reactstrap';
import TableData from './TableData';
import React, { Component } from 'react';
import { customStyles } from './customStyles';
import Select from 'react-select';
import { get_random_guid } from '../../helpers/OtherHelper';

class TableList extends Component {
    constructor (props) {
        super(props);
        const statusOptions = [
            { value: 0, label: 'empty...', name: 'core-account-status' },
            { value: 3, label: 'active', name: 'core-account-status' },
            { value: 1, label: 'blocked', name: 'core-account-status' },
            { value: 2, label: 'inactive', name: 'core-account-status' }
        ];

        const typeOptions = [
            { value: 0, label: 'empty...', name: 'core-account-system_type' },
            { value: 1, label: 'lead', name: 'core-account-system_type' },
            { value: 2, label: 'client', name: 'core-account-system_type' }
        ];

        this.state = {
            statusSelect: {
                value: null,
                statusOptions,
            },
            typeSelect: {
                value: null,
                typeOptions,
            },
            user:     null,
            tooltips: {
                'core-account-id':    false,
                'core-account-name':  false,
                'core-account-email': false,
                'core-account-phone': false,
                'core-user-nickname': false,
            },
            idTooltip: false,
        };

        this.reset = this.reset.bind(this);
        this.toggle = this.toggle.bind(this);
        this.checkField = this.checkField.bind(this);
    }

    componentWillReceiveProps () {
        this.setState({
            user: this.props,
        });
    }

    toggle (name) {
        this.setState({
            tooltips: { [name.target.id]: !this.state.tooltips[name.target.id] },
        });
    }

    setStatusValue = (value) => {
        this.setState((prevState) => ({
            statusSelect: {
                ...prevState.statusSelect,
                value,
            },
        }));
    };

    setTypeValue = (value) => {
        this.setState((prevState) => ({
            typeSelect: {
                ...prevState.typeSelect,
                value,
            },
        }));
    };

    handleChange = (value) => {
        this.props.onChangeFilterSelect(value);
        this.setStatusValue(value);
    };

    handleChangeType = (value) => {
        this.props.onChangeFilterSelect(value);
        this.setTypeValue(value);
    };

    handleClick = () => {
        this.setStatusValue(null);
        this.setTypeValue(null);
    };

    renderRow () {
        const rows = this.props.data;

        return _.map(rows, (item) => {
            return (<TableData key = { item['core-account-id'] } user = { item } />);
        });

    }

    reset () {
        const inputs = ['id', 'name', 'email', 'phone'];

        inputs.map((input) => {
            this.refs[input].value = '';
        });

        this.handleClick();
        this.props.reset();
    }

    checkField = (field, name) => {

        if (_.has(_.first(this.props.data), field) || _.isEmpty(this.props.data)) {
            return (
                <th key = { field }>
                    <div>{ _.startCase(_.toLower(name)) }<i className = 'fa fa-angle-down' /></div>
                    <div className = 'input-block'>
                        <input
                            className = 'filter form-control'
                            name = { field }
                            placeholder = { name }
                            ref = { name }
                            type = 'text'
                            onChange = { this.props.onChangeFilter }
                            onKeyDown = { this.props.handlePwdKeyUp }
                            id = { field }
                        />
                        <Tooltip isOpen = { this.state.tooltips[field] } placement = 'bottom' target = { field } toggle = { this.toggle }>
                            Press 'Enter' for search.
                        </Tooltip>
                    </div>
                </th>);
        }
    };

    checkActiveField (field) {
        if (_.has(_.first(this.props.data), field) || _.isEmpty(this.props.data)) {
            return (
                <th key = { get_random_guid() }>
                    <div>Status<i className = 'fa fa-angle-down' /></div>
                    <div className = 'input-block'>
                        <div className = 'table-filter-select'>
                            <Select
                                className = 'form-select page-select'
                                classNamePrefix = 'select'
                                name = { field }
                                options = { this.state.statusSelect.statusOptions }
                                styles = { customStyles }
                                value = { this.state.statusSelect.value }
                                onChange = { this.handleChange }
                            />
                        </div>
                    </div>
                </th>
            );
        }
    }

    checkStatusField (field) {
        if (_.has(_.first(this.props.data), field) || _.isEmpty(this.props.data)) {
            return (
                <th key = { get_random_guid() }>
                    <div>System type <i className = 'fa fa-angle-down' /></div>
                    <div className = 'input-block'>
                        <div className = 'table-filter-select'>
                            <Select
                                className = 'form-select page-select'
                                classNamePrefix = 'select'
                                name = { field }
                                options = { this.state.typeSelect.typeOptions }
                                styles = { customStyles }
                                value = { this.state.typeSelect.value }
                                onChange = { this.handleChangeType }
                            />
                        </div>
                    </div>
                </th>
            );
        }
    }

    renderTH () {
        const tableHeads = [];

        _.forEach(this.props.fieldsForChecking, (name, item) => {
            switch (item) {
                case 'core-account-status': {
                    tableHeads.push(this.checkActiveField(item));
                    break;
                }
                case 'core-account-system_type': {
                    tableHeads.push(this.checkStatusField(item));
                    break;
                }
                default: {
                    tableHeads.push(this.checkField(item, name));
                }
            }
        });

        return tableHeads;
    }

    render () {
        const arrayTH = this.renderTH();

        return (
            <div className = 'adminList-table'>

                <Table className = 'table react-bs-table'>
                    <thead className = 'react-bs-container-header'>
                        <tr>
                            {arrayTH.map((item) => {
                                return item;
                            })}
                            <th>
                                <div>Actions</div>
                                <a className = 'table-filters-reset' onClick = { this.reset }>Reset</a>
                            </th>
                        </tr>
                    </thead>
                    <tbody className = 'tbody'>
                        {this.renderRow()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

TableList.defaultProps = {
    fieldsForChecking: {
        'core-account-id':          'id',
        'core-account-name':        'name',
        'core-account-email':       'email',
        'core-account-phone':       'phone',
        'core-account-status':      'status',
        'core-user-nickname':       'nickname',
        'core-account-system_type': 'type',
    },
};

export default TableList;
