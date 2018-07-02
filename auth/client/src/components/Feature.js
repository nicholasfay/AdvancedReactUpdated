//Dummy component for any sort of feature that you want locked by authentication

import React, {Component} from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
	render(){
		return(
			<div>This is the feature!</div>
		);
	}
}

export default requireAuth(Feature);