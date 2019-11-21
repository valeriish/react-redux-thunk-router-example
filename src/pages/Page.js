import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"
import PropTypes from 'prop-types'

const mapStateToProps = (state, props) => {
    let currentPage = state.pages.length
        ? state.pages.filter(page => page.id === parseInt(props.id))
        : []
    return currentPage.length ? { page: currentPage[0] } : { page: null }
}

class Page extends Component {
    render() {
        const pageExist = this.props.page && this.props.page.id
        return (
            <div>
                { pageExist ? (
                    <div>
                        <h3>{this.props.page.title}</h3>
                        <p>{this.props.page.content}</p>
                    </div>
                ) : (
                    <Redirect to='/404' />
                )}
            </div>
        )
    }
}

Page.propTypes = {
    page: PropTypes.object
};

export default connect(mapStateToProps, null)(Page)
