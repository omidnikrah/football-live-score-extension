// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import LiveItem from './LiveItem';
import EmptyState from './EmptyState';
import Loading from './Loading';

const UlWrapper = styled.ul`
	margin: 0;
	list-style: none;
	width: 100%;
	margin-top: 20px;
`;

class LiveItems extends Component {
	constructor(props: any) {
		super(props);
		this.state = {
			api: 'https://cors-anywhere.herokuapp.com/https://api.aparat.com/fa/v1/aparat/sport/footballmatchlive',
			matches: [],
			loading: false,
		};
	}

	componentDidMount() {
		this.handleLiveLists();
	}

	handleLiveLists = () => {
		this.setState({
			loading: true,
		});
		axios.get(this.state.api, {
			headers: {
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
			},
		}).then(({ data }: any) => {
			this.dataToState(data.data.attributes.data.today);
			this.setState({
				loading: false,
			});
		});
	}

	dataToState = ({ data }: any) => {
		data[0].data.map((item: any) => {
			if (item.status !== 'not-play') {
				this.setState({
					matches: [
						...this.state.matches,
						{
							guest: {
								name: item.guest_name,
								goals: item.guest_goal,
								logo: item.guest_logo,
							},
							host: {
								name: item.host_name,
								goals: item.host_goal,
								logo: item.host_logo,
							},
							status: item.status,
							match_id: item.match_id,
						},
					],
				});
			}
			return true;
		});
	}

	renderLiveItems = (item: any) => (
		<LiveItem key={item.match_id} guest={item.guest} host={item.host} />
	)

	render(): any {
		const { matches, loading } = this.state;
		return (
			<UlWrapper>
				{loading ? <Loading /> : (matches.length !== 0 ? matches.map(this.renderLiveItems) : <EmptyState />)}
			</UlWrapper>
		);
	}
}

export default LiveItems;
