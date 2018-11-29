import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { get_random_guid } from '../../helpers/OtherHelper';

export default class TableData extends Component {

    statusFormatter (value) {
        const statusType = {
            '1': 'bg-blue',
            '2': 'bg-green',
        };
        const curObj = statusType[value];

        const systemType = {
            '1': 'lead',
            '2': 'client',
        };

        const className = `table-status ${curObj}`;

        return <div className = { className }>{systemType[value]}</div>;
    }

    checkField (field, props) {
        if (_.has(props.user, field)) {
            if (field !== 'core-user-nickname') {
                const uri = `lead/${props.user["core-account-id"]}`;

                return <td key = { get_random_guid() }><Link to = { uri }>{props.user[field]}</Link></td>;
            }

            return <td key = { get_random_guid() }>{props.user[field]}</td>;
        }
    }

    checkActiveField (field, props) {
        const activeType = {
            '2': 'inactive',
            '3': 'active',
            '1': 'blocked',
        };

        if (_.has(props.user, field)) {
            const curObj = `status-active ${activeType[props.user[field]]}`;

            return <td key = { get_random_guid() } ><div className = { curObj } >{activeType[props.user[field]]}</div></td>;
        }
    }

    checkStatusField (field, props) {
        if (_.has(props.user, field)) {
            return <td key = { get_random_guid() }>{this.statusFormatter(props.user[field])}</td>;
        }
    }

    renderCol () {
        const fields = [];

        this.props.fieldsForChecking.map((item) => {
            switch (item) {
                case 'core-account-status': {
                    fields.push(this.checkActiveField(item, this.props));
                    break;
                }
                case 'core-account-system_type': {
                    fields.push(this.checkStatusField(item, this.props));
                    break;
                }
                default: {
                    fields.push(this.checkField(item, this.props));
                }
            }
        });

        return fields;
    }

    render () {
        const arr = this.renderCol();

        return (
            <tr>
                {arr.map((item) => {
                    return item;
                })}
                <td />
            </tr>
        );
    }
}

TableData.defaultProps = {
    fieldsForChecking: [
        'core-account-id',
        'core-account-name',
        'core-account-email',
        'core-account-phone',
        'core-account-status',
        'core-user-nickname',
        'core-account-system_type'
    ],
};
