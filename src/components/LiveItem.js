// @flow

import React from 'react';
import styled from 'styled-components';

const LiveItemWrapper = styled.li`
	width: 100%;
	display: inline-block;
	margin-bottom: 5px;
`;

const TeamInfo = styled.div`
	width: calc(50% - 10px);
	margin: 0 5px;
	display: inline-block;
	float: ${(props: any) => (props.team === 'host' ? 'left' : 'right')};
	padding: 10px;
	background-color: ${(props: any) => (props.win ? '#2bc76a' : '#fff')};
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.05);
	span{
		color: ${(props: any) => (props.win ? '#fff' : '#444')};
	}
`;

const TeamName = styled.span`
	display: block;
	font-weight: 500;
	color: #444;
`;

const TeamLogo = styled.img.attrs({
	src: (props: any) => props.src,
})`
	width: calc(50%);
`;

const GoalsNumber = styled.span`
	display: block;
	font-weight: bold;
    font-size: 30px;
	position: relative;
	color: #444;
	margin-right: -10px;
	&::after{
		content: '${(props: any) => props.after}';
		position: absolute;
		font-size: 13px;
		font-weight: 100;
		bottom: 10px;
		margin-right: 2px;
	}
`;

const LiveItem = (props: any) => (
	<LiveItemWrapper key={props.key}>
		<TeamInfo team="guest" win={props.guest.goals > props.host.goals}>
			<TeamLogo src={props.guest.logo} />
			<TeamName>{props.guest.name}</TeamName>
			<GoalsNumber after="گل">{props.guest.goals}</GoalsNumber>
		</TeamInfo>
		<TeamInfo team="host" win={props.host.goals > props.guest.goals}>
			<TeamLogo src={props.host.logo} />
			<TeamName>{props.host.name}</TeamName>
			<GoalsNumber after="گل">{props.host.goals}</GoalsNumber>
		</TeamInfo>
	</LiveItemWrapper>
);

export default LiveItem;
