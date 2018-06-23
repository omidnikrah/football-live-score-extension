// @flow

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: relative;
	height: 75px;
	width: 30px;
	margin: 0 auto;
	&::after {
		background: rgba(0, 0, 0, 0.2);
		bottom: 0;
		content: "";
		height: 30px;
		position: absolute;
		left: 0;
		right: 0;
		border-radius: 50%;
		transform: scaley(0.1);
		transform-origin: center bottom;
		animation-name: bounceballShadow;
		animation-duration: .4s;
		animation-iteration-count: infinite;
		animation-direction: alternate;
		animation-delay: 0;
		animation-play-state: running;
		animation-fill-mode: none;
	}
`;

const Ball = styled.div`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 0;
    left: 0;
	animation-name: bounceball;
    animation-duration: .4s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-delay: 0;
    animation-play-state: running;
    animation-fill-mode: none;
    overflow: hidden;
    svg {
		height: 30px;
		width: 30px;
    }
`;

const Loading = () => (
	<Wrapper>
		<Ball>
			<svg viewBox="0 0 18.9 19">
				<path fill="#fff" d="M11.2 12.9H7.8L6.4 15l1.1 2.7c.6.2 1.3.2 2 .2s1.4-.1 2.1-.3l1-2.6-1.4-2.1zM13 9.3l-1 3 1.5 2.3 2.7.2c1-1.2 1.6-2.8 1.8-4.4l-2.2-1.7-2.8.6zm-5.9 3L6 9.1l-2.8-.7L1 10.1c.1 1.7.8 3.3 1.8 4.6l2.8-.2 1.5-2.2zm-.6-4.1L9 6.4V3.2L6.7 1.5c-1.8.6-3.3 1.8-4.3 3.3l1 2.6 3.1.8zM10 6.4l2.7 1.9 2.9-.7 1-2.7c-1-1.5-2.5-2.7-4.3-3.4L10 3.2v3.2z" />
				<path fill="#2d2a6c" d="M17.3 4c-1-1.5-2.5-2.6-4.2-3.3C12 .3 10.8 0 9.5 0S7 .3 5.9.7c-1.6.7-3 1.8-4.1 3.2C.7 5.4 0 7.4 0 9.5c0 .5 0 .9.1 1.4.2 1.5.8 2.9 1.6 4.1 1.4 2 3.5 3.4 6 3.9.6 0 1.2.1 1.8.1s1.2-.1 1.8-.2c2.5-.5 4.6-1.9 6-4 .8-1.1 1.3-2.4 1.5-3.8.1-.5.1-1 .1-1.5.1-2-.5-3.9-1.6-5.5zM10 3.2l2.3-1.7c1.8.6 3.3 1.8 4.3 3.4l-1 2.7-2.9.7L10 6.4V3.2zM6.7 1.5L9 3.2v3.2L6.5 8.2l-3.1-.8-1-2.6c1-1.5 2.5-2.7 4.3-3.3zM2.8 14.7c-1-1.3-1.7-2.9-1.8-4.6l2.2-1.7 2.8.7 1 3.2-1.5 2.3-2.7.1zm8.8 3c-.7.2-1.4.3-2.1.3-.7 0-1.3-.1-2-.2l-1.1-2.7L7.8 13h3.4l1.4 2.2-1 2.5zm4.6-3l-2.7-.2-1.5-2.2 1-3 2.8-.7 2.2 1.7c-.2 1.7-.8 3.2-1.8 4.4z" />
			</svg>
		</Ball>
	</Wrapper>
);

export default Loading;
