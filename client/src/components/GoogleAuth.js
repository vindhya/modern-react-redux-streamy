import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
	// state = { isSignedIn: null };
	// removed above because we're using redux store instead of local state

	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: '716562008584-l1qld930n0eg1kqc058m25tl0tk55v3p.apps.googleusercontent.com',
				scope: 'email'
			}).then(() => {
				this.auth = window.gapi.auth2.getAuthInstance();
				// this.setState({ isSignedIn: this.auth.isSignedIn.get() });
				this.onAuthChange(this.auth.isSignedIn.get());
				this.auth.isSignedIn.listen(this.onAuthChange);
			});
		});
	}

	onAuthChange = isSignedIn => {
		// this.setState({ isSignedIn: this.auth.isSignedIn.get() });
		if (isSignedIn) {
			this.props.signIn();
		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn) {
			return (
				<button onClick={this.onSignOutClick} className="ui red google button">
					<i className="google icon" />Sign Out
				</button>
			);
		} else {
			return (
				<button onClick={this.onSignInClick} className="ui red google button">
					<i className="google icon" />Sign In with Google
				</button>
			);
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

const mapStateToProps = state => {
	return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);