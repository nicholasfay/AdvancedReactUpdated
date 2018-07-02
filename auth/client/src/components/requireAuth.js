import React, {Component} from 'react';
import {connect} from 'react-redux';

//Higher Order Component
export default (ChildComponent) => {
	class ComposedComponent extends Component {
		//Our component just got rendered
		componentDidMount(){
			this.shouldNavigateAway();
		}

		
		componentDidUpdate(){
			this.shouldNavigateAway();
		}

		shouldNavigateAway(){
			if(!this.props.auth){
				this.props.history.push('/')
			}
		}
		render(){
			return <ChildComponent {...this.props} ></ChildComponent>;
		};
	}

	function mapStateToProps(state){
		return {
			auth: state.auth.authenticated
		};
	};

	return connect(mapStateToProps)(ComposedComponent);
};