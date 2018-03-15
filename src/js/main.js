import React, { Component } from 'react';

const apikey = 'ad94cad8-dfd1-411b-bb75-0640b9fb4117';
const baseUrl = 'https://content.guardianapis.com/search';


export const GoButton = (props) => {
  if(props.loading){
    return <span id="goButton" style={{flex: 1, marginRight: '10px', marginLeft: '10px'}}>...</span>
  }else{
    return <button
      onClick={props.clickHandler}
      id="goButton"
      style={{flex: 1, marginRight: '10px', marginLeft: '10px'}}>Go</button>
  }
}

export class StatefulReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      currentPage: 1,
      maxPage: 1,
      articles: [],
      loading: false
    }

    this.handleTyping = this.handleTyping.bind(this);
    this.callout = this.callout.bind(this);
  }

  async callout() {
    this.setState({loading: true});
    let url = `${baseUrl}?api-key=${apikey}&q=${this.state.searchTerm}&page=${this.state.currentPage}`;

    const response = await fetch(url);
    const jsonResp = await response.json();
    const data = jsonResp.response;
    console.log(jsonResp);
    this.setState({
      currentPage: data.currentPage,
      maxPage: data.pages,
      articles: data.results,
      loading: false
    });
  }

  handleTyping(ev){
    this.setState({
      searchTerm: ev.target.value
    });
  }

  render() {
    console.log(this.state);
    return (
      <div class="container">
        <div class="mainBody">
          <div class="searchBar">
            <i class="ion-search" style={{flex: 1, textAlign: 'center'}}></i>
            <input
              id="input"
              type="text"
              name="search"
              placeholder = "Search"
              style={{flex: 8, marginRight: '10px'}}
              onChange={this.handleTyping}
            />
            <GoButton loading={this.state.loading} clickHandler={this.callout} />
          </div>
          <ol id="demo" style={{flex: 8, borderStyle: 'dashed', listStyleType: 'none'}}>
            {this.state.articles.map( article => {
              return (
                <li><a href={article.webUrl} target="_blank">{article.webTitle}</a></li>
              )
            })}
          </ol>
          <div style={{display: 'flex', flexDirection: 'row', margin: '10px 10px 10px 10px'}}>
            <button id="backButton" style={{flex: 1}}>Back</button>
            <div id="pageNum" style={{flex: 9, textAlign: 'center'}}></div>
            <button id="forwardButton" style={{flex: 1}}>Forward</button>
          </div>
        </div>
      </div>
    )
  }
}
