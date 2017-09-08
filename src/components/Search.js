
import React, { Component } from "react";
import {Input, Row , Button, div} from 'react-materialize';


const Search = props =>
	<div>
	 	<Row>
			<Input  
				s={10} label="Topic" 
				onChange={props.TopicInputChange}
		        value={props.topic_value}
		        name="topic"
		        type="text"
			/>
		</Row>
		<Row>
			<Input 
				s={10} label="Start Year" 
				onChange={props.start_dateInputChange}
		        value={props.start_date_value}
		        name="start_date"
		        type="text"
			/>
		</Row>
		<Row>
			<Input 
				s={10} label="End Year" 
				onChange={props.end_dateInputChange}
		        value={props.end_date_value}
		        name="end_date"
		        type="text"
			/>
		</Row>
		<Row>
			<div>
			<Button  onClick={props.handleFormSubmit} waves='light' >Search</Button>
			</div>
		</Row>
	</div>


export default Search;  