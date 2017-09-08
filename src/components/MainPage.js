import React, { Component } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import Saved from "./Saved";
import {Row , Col} from 'react-materialize';
import API from "../utils/API"


class MainPage extends Component {
state = {
    result: {},
    topic: "",
    start_date: "",
    end_date:""
    };
  
 

  searchArticles = (query) => {
    API.search(query)
      .then(res => 
      		this.setState({ result: res.data.response}) )
      		
      .catch(err => console.log(err));
      console.log("==============================")
      console.log("=========result==============")
      console.log(this.state.result.docs)
      let test = this.state.result
 
      console.log(this.state.topic)

  };

  TopicInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

    start_dateInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

    end_dateInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticles(this.state.topic);
  };


  renderArticles() {
    return this.state.result.docs.map(article => (
      <SearchResults
        article_title={article.headline.main}
        article_content={article.snippet}
      />
    ));
  }

  render() {
    return (
      <Row>	
      	<Col s={4}>
        	<Search
        		topic_value={this.state.topic}
        		start_date_value={this.state.start_date}
        		end_date_value={this.state.end_date}
                TopicInputChange={this.TopicInputChange}
                start_dateInputChange={this.start_dateInputChange}
                end_dateInputChange={this.end_dateInputChange}

                handleFormSubmit={this.handleFormSubmit}
        	/>
        	
        	<Saved />
        </Col>
        <Col s={8}>


         {this.state.result.docs
                ? this.renderArticles()
                : <h3>No Results to Display</h3>}


        	
        </Col>
      </Row>
    );
  }
}

export default MainPage;  