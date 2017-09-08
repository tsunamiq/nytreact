
import React from "react";
import {Input, Row , Col , Button, div, Card, CardTitle} from 'react-materialize';


const SearchResults = props =>
  	
	<Col m={12} s={12}>
		<Card  textClassName='black-text' title={props.article_title} actions={[<a href='#'>save</a>]}>
		{props.article_content}
		</Card>
	</Col>

export default SearchResults;  