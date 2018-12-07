import React from 'react';
import MetisMenu from 'react-metismenu';
import { Link } from "react-router-dom";

//images
import logoCrm from '../../images/logo.svg';

//components
import TopNav from './TopNav';
import CustomLink from './CustomLink';
import { securedRequest } from "../../services/RequestService";
import SideBarTaskList from "../SideBarTaskList";


const menu = [
    {
        icon:  'dashboard',
        label: 'Dashboard',
        to:    '/',
    },
    {
        icon:  'group',
        label: 'Clients',
        to:    '/clients',
    },
    {
        icon:  'check-circle-o',
        label: 'Tasks',
        to:    '/tasks',
    },
    {
        icon:  'calendar',
        label: 'Calendar',
        to:    '/calendar',
    },
    {
        icon:  'signal',
        label: 'Reports',
        to:    '/reports',
    },
    // {
    //     icon:  'bold',
    //     label: 'Billing',
    //     to:    '/access',
    // },
    // {
    //     icon:    'phone',
    //     label:   'Calls',
    //     content: [
    //         {
    //             label: 'Income',
    //             icon:  'arrow-circle-right',
    //             to:    '/error',
    //         },
    //         {
    //             label: 'Outcome',
    //             icon:  'arrow-circle-o-left',
    //             to:    '/access',
    //         }
    //     ],
    // },
    {
        icon:  'cog',
        label: 'Settings',
        to:    '/settings',
    }
];

class Main extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            menuToogle:   false,
            searchForm:   false,
            tooltipOpen:  false,
            user:         {},
        };

        this.leftMenuToogle = this.leftMenuToogle.bind(this);
        this.toggle = this.toggle.bind(this);
        this.getClassForMenu = this.getClassForMenu.bind(this);

        this.searchFormToogle = this.searchFormToogle.bind(this);
        this.getClassForSearch = this.getClassForSearch.bind(this);
    }

    componentDidMount () {
        // this.getMe();
    }

    leftMenuToogle () {
        this.setState({
            menuToogle: !this.state.menuToogle,
        });
    }

    toggle () {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen,
        });
    }

    searchFormToogle () {
        this.setState({
            searchForm: !this.state.searchForm,
        });
    }

    getClassForMenu () {
        if (this.state.menuToogle) {
            return 'nav-collapsed';
        }

        return '';
    }

    getClassForSearch () {
        if (this.state.searchForm) {
            return 'open';
        }

        return '';
    }

    getMe () {
        securedRequest.post('/api/core/auth/me')
            .then((res) => {
                const user = res.data;

                this.setState({ user });
            });
    }


	render () {
	    const classToogle = `body-wrapper ${this.getClassForMenu()}`;
	    const classSearch = `navbar-search-form ${this.getClassForSearch()}`;

	    return (
    <div>
                <div>
            <div className = { classToogle }>

                        <div className = 'topbar'>
                    <div className = 'topbar-logo'><Link to = '/'><img alt = 'logo' src = { logoCrm } /></Link></div>
                    <div className = 'topbar-nav'>

                                <form action = '' className = { classSearch } role = 'search'>
                            <div className = 'form-group'>
                                        <input
                                    className = 'form-control navbar-search' placeholder = 'Search and press enter...'
                                    type = 'text'
                                />
                                        <i className = 'la la-close search-close' onClick = { this.searchFormToogle } />
                                    </div>
                            <button className = 'd-none' type = 'submit'>Submit</button>
                        </form>
                                <div className = 'topbar-nav-left'>
                            <div className = 'left-menu-toggle' onClick = { this.leftMenuToogle }>
                                        <i className = 'la la-bars' />
                                    </div>
                            <div className = 'topbar-search' onClick = { this.searchFormToogle }>
                                        <i className = 'la la-search' />
                                    </div>
                        </div>

                                <div className = 'topbar-nav-right'>
                            <TopNav logout = { this.props.logout } user = { this.state.user } />
                        </div>

                            </div>
                </div>
                        <nav className = 'left-navigation'>
                    <div className = 'left-navigation-title'>Navigation</div>
                    <MetisMenu
                                activeLinkFromLocation
                                classNameItemActive = 'current'
                                classNameItemHasActiveChild = 'current'
                                content = { menu }
                                iconNamePrefix = 'la la-'
                                iconNameStateHidden = 'angle-right'
                                iconNameStateVisible = 'angle-right open'
                                LinkComponent = { CustomLink }
                            />
                </nav>
                        <div className = 'content-wrapper'>
                    {this.props.children}
                    <SideBarTaskList />
                </div>
                    </div>
        </div>
            </div>
	    );
    }

}

export default Main;
