// @flow

import React from 'react';
import styled from 'styled-components';
import LiveItems from './components/LiveItems';
import './styles/global';

const Wrapper = styled.div`
	width: 350px;
	height: 420px;
	padding: 30px;
	text-align: center;
	overflow-y: scroll;
`;

const Title = styled.h3`
	font-size: 15px;
	font-weight: bold;
	color: #333;
`;

const App = () => (
	<Wrapper>
		<Title>نتایج زنده فوتبال امروز</Title>
		<LiveItems />
	</Wrapper>
);

export default App;
