import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import './LandingPage.css';
import '../../App.css';

export function LandingPage(props) {
	if (props.loggedIn) {
		return <Redirect to="/garage" />
	}
	return (
		<div className="LandingPage">
			<header role="banner" id="title-banner">
				<h1>AutoMate</h1>
			</header>
			<section aria-labelledby="showcase" id="showcase-section">
				<img id="automate-infographic" src="https://i.imgur.com/k8nU9hz.png" alt="automate infographic"></img>
				<p><b>AutoMate</b> is intended to help vehicle owners ( cars, recreational vehicles, motorcycles ) track and log their vehicle maintenance in one uniform web application. Add vehicles and start tracking by adding the most recent vehicle maintenance records. When you forget when the last time you had done a particular maintenance, use this app for reference.</p>
				<div className="demo">
					<h3><b>Demo Account</b></h3>
					<span><b>username:</b> administrator</span><br></br>
					<span><b>password:</b> adminpassword</span>
				</div>

				<Link to='/signup'>
					<button className="signup landing-button">
						Sign Up
						</button>
				</Link>
				<Link to='/login'>
					<button className="login landing-button">
						Login
						</button>
				</Link>

			</section>
			<footer>AutoMate 2018 / Website by Kevin Crawford</footer>
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(LandingPage);