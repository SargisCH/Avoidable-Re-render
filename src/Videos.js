import React, {Component} from 'react';
import {connect} from 'react-redux';

class Videos extends Component{
    render(){
        console.log(this.props.videos)
        return (
            <div></div>
        )
    }
}

function mapStateToProps(state){
    return {
        videos: state.search.videos
    }
}

export default connect(mapStateToProps)(Videos)