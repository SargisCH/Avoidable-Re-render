import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import {connect} from 'react-redux';
import {search} from './actions/asinc';

 class SearchBar extends Component{
    constructor(props){
        super(props);
        this.searchTermValue;
        this.getSearchTerm = this.getSearchTerm.bind(this);
        this.search = this.search.bind(this);
        
        
    }
    getSearchTerm(el){
        this.searchTermValue = el
    }
    search(){
        this.props.dispatch(search(this.searchTermValue.value));
    }
    render(){
        return(
            <div className="search_bar">
                <input ref={this.getSearchTerm} type="text" className="search_input"/>
                <button className="search_button" onClick={this.search}>Search</button>

            </div>
        )
    }
}

export default connect()(SearchBar);

