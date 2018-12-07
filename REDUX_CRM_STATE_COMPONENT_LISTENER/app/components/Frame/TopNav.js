import React from 'react';
import { Nav, NavItem, DropdownItem, DropdownToggle, DropdownMenu, UncontrolledDropdown } from 'reactstrap';

//images
import userAvatar from "../../images/avatar-2.jpg";
import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from "redux";
import { doLogout } from "../../../containers/user/actions";
import { getTaskList } from "../../../containers/taskList/actions";
import { withRouter, Link } from "react-router-dom";

class TopNav extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            dd1:  false,
            ddTL: false,
        };
        this.dropdownToggle = this.dropdownToggle.bind(this);
        this.doLogout = this.doLogout.bind(this);
        this.dropdownTaskList = this.dropdownTaskList.bind(this);
    }

    dropdownToggle () {
        this.setState({
            dd1: !this.state.dd1,
        });
    }

    dropdownTaskList () {
        this.setState({
            ddTL: !this.state.ddTL,
        });
    }

    doLogout () {
        this.props.doLogout();
    }

  componentDidUpdate () {
        this.props.getTaskList(this.state.ddTL);
    }

    render () {

        return (
            <Nav className = 'topbar-user-list'>
                <UncontrolledDropdown className = 'no-caret' id = 'top-notification' nav>
                    <DropdownToggle caret nav>
                        <span>
                            <i className = 'la la-bell notify-icon' /><span className = 'notify-amount'>15</span>
                        </span>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem className = 'notify-block'>
                            <div className = 'notify-icon bg-red'>
                                <i className = 'la la-times-circle' />
                            </div>
                            <span className = 'notify-details'>
                                <p>Caleb Flakelar commented on Admin</p>
                                <span className = 'notify-time'>1 min ago</span>
                            </span>
                        </DropdownItem>
                        <DropdownItem className = 'notify-block'>
                            <div className = 'notify-icon bg-green'>
                                <i className = 'la la-check-circle' />
                            </div>
                            <span className = 'notify-details'>
                                <p>Caleb Flakelar commented on Admin</p>
                                <span className = 'notify-time'>1 min ago</span>
                            </span>
                        </DropdownItem>
                        <DropdownItem className = 'notify-block unread'>
                            <div className = 'notify-icon bg-yellow'>
                                <i className = 'la la-warning' />
                            </div>
                            <span className = 'notify-details'>
                                <p>Caleb Flakelar commented on Admin</p>
                                <span className = 'notify-time'>1 min ago</span>
                            </span>
                        </DropdownItem>
                        <DropdownItem className = 'notify-block'>
                            <div className = 'notify-icon bg-blue'>
                                <i className = 'la la-envelope' />
                            </div>
                            <span className = 'notify-details'>
                                <p>Caleb Flakelar commented on Admin</p>
                                <span className = 'notify-time'>1 min ago</span>
                            </span>
                        </DropdownItem>
                        <DropdownItem className = 'notify-block bottom'>
                                See all
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown className = 'nav-top-user no-caret narrow' id = 'top-user' nav>
                    <DropdownToggle nav>
                        <span className = 'top-user-wrapper'>
                            <span className = 'nav-top-img'><img alt = 'user' src = { userAvatar } /></span>
                            <div className = 'top-account-info'>
                                <div className = 'top-account-name'>{ `${this.props.user.profile.name} ${this.props.user.profile.surname}` }</div>
                                <div className = 'top-account-position'>Personal Manager</div>
                            </div>
                        </span>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            <i className = 'la la-user' />
                            <span>My Account</span>
                        </DropdownItem>
                        <Link to = '/profile/2'>
                            <DropdownItem>
                                <i className = 'la la-cog' />
                                <span>
                                    FAQs
                                </span>
                            </DropdownItem>
                        </Link>
                        <DropdownItem onClick = { this.doLogout }>
                            <i className = 'la la-sign-out' />
                            <span>Logout</span>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>

                <NavItem className = 'top-menu-tasks' ><i className = 'la la-terminal' onClick = { this.dropdownTaskList } /></NavItem>
                {/*{this.state.ddTL ?'1' : '2'}*/}
            </Nav>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        user: store.user,
    };
};

export default withRouter(connect(
    mapStateToProps,
    (dispatch) =>
        bindActionCreators({
            doLogout,
            getTaskList,
        }, dispatch)
)(TopNav));
