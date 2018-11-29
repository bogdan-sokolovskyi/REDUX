import React from "react";
import Select from 'react-select';

const options = [
    { value: '10', label: '10' },
    { value: '25', label: '25' },
    { value: '50', label: '50' }
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

class PageSelect extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {

        return (
            <div className = 'table-amount-select'>
                Search:&nbsp;
                <Select
                    className = 'form-select page-select'
                    classNamePrefix = 'select'
                    defaultValue = { { value: 'page', label: '10' } }
                    options = { options }
                    styles = { customStyles }
                    onChange = { this.props.onChange }
                />
                <span>from <b>{this.props.total}</b> </span>
            </div>

        );
    }
}

export default PageSelect;
