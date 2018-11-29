import React from "react";
import Select from 'react-select';

const options = [
    { value: '1', label: 'lead' },
    { value: '2', label: 'client' }
];

const customStyles = {
    control: () => ({
        width: 100,
    }),
    singleValue: (base, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { opacity, transition };
    },
};

class SystemTypeSelect extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {

        return (
            <div className = 'table-filter-select'>
                <Select
                    className = 'form-select page-select'
                    classNamePrefix = 'select'
                    defaultValue = { { value: 0, label: 'type' } }
                    name = { this.props.name }
                    onChange = { this.props.onChange }
                    options = { options }
                    styles = { customStyles }
                />
            </div>

        );
    }
}

export default SystemTypeSelect;
