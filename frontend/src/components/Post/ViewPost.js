import React, { Component } from 'react';

class ViewPost extends Component{

    componentWillMount () {

        const {id} = this.props.match.params;
        if (id) {
            console.log(id)
        }
    }

    render () {
        return (
            <div>
                Post View
            </div>
        )
    }
}

export default ViewPost;