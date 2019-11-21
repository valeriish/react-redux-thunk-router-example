import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import store from '../store'
import { addMenuItemAsync } from '../store/actions'

store.dispatch(
    addMenuItemAsync(
        {
            label: 'About',
            path: '/about',
            active: false
        }
    )
)

const mapStateToProps = state => ({items: state.menuItems})

class Menu extends Component {
    render() {
        const { location } = this.props;
        return (
            <div>
                <ul>
                {
                    this.props.items.map(item => 
                        (
                            <li key={item.id}>
                                <Link to={item.path} className={item.path === location.pathname ? 'App-link active' : 'App-link'}>{item.label}</Link>
                            </li>
                        )
                    )
                }
                </ul>
            </div>
        )
    }
}

Menu.propTypes = {
    items: PropTypes.array.isRequired
};

export default withRouter(connect(mapStateToProps, null)(Menu))
