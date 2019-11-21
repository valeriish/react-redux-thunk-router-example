import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMenuItemAsync, addPageAsync } from '../store/actions'
import store from '../store'

const mapDispatchToProps = dispatch => ({
    addPage: item => {
        const result = dispatch(addPageAsync(item))
        result.then(() => {
            const state = store.getState()
            const newPage = state.pages.filter(page => page.title === item.title)
            if (newPage.length && newPage[0].id) {
                dispatch(addMenuItemAsync({
                    label: newPage[0].title,
                    path: '/page/' + newPage[0].id,
                    active: false
                }))
            }
        })
    }
})

class NewPageForm extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.titlet = React.createRef()
        this.content = React.createRef()
    }
  
    handleSubmit(event) {
        event.preventDefault()
        this.props.addPage({
            title: this.titlet.current.value,
            content: this.content.current.value
        })
        this.titlet.current.value = ''
        this.content.current.value = ''
    }
  
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form">
                <div className="field">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" ref={this.titlet} id="title" />
                </div>
                <div className="field">
                    <label htmlFor="content">Content:</label>
                    <textarea name="content" ref={this.content} id="content" />
                </div>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default connect(null, mapDispatchToProps)(NewPageForm)
