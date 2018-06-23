import { injectGlobal } from 'styled-components';
import fonts from './fonts';

const globalStyles = injectGlobal`
	${fonts}
	*{
		padding: 0;
		margin: 0;
		outline: 0;
		text-decoration: none;
		box-sizing: border-box;
		direction: rtl;
	}
	body{
		font-family: Vazir, serif;
		background-color: #fafafa;
	}
	.scale-enter {
		opacity: 0.01;
		transform: translate(50%, -50%) scale(0.9);
	}

	.scale-enter.scale-enter-active {
		opacity: 1;
		transform: translate(50%, -50%) scale(1);	
		transition: opacity 350ms cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 350ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.scale-leave {
		opacity: 1;
		transform: translate(50%, -50%) scale(1);	
	}

	.scale-leave.scale-leave-active {
		opacity: 0.01;
		transform: translate(50%, -50%) scale(0.9);
		transition: opacity 350ms cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 350ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.opacity-enter {
		opacity: 0.01;
	}

	.opacity-enter.opacity-enter-active {
		opacity: 1;
		transition: opacity 250ms ease-in;
	}

	.opacity-leave {
		opacity: 1;
	}

	.opacity-leave.opacity-leave-active {
		opacity: 0.01;
		transition: opacity 250ms ease-in;
	}

	.fadeFast-enter {
		opacity: 0.01;
	}

	.fadeFast-enter.fadeFast-enter-active {
		opacity: 1;
		transition: opacity 200ms ease;
	}

	.fadeFast-leave {
		opacity: 1;
	}

	.fadeFast-leave.fadeFast-leave-active {
		opacity: 0.01;
		transition: opacity 200ms ease;
	}
	@-webkit-keyframes bounceball {
		from { bottom: 0; height: 20px; }
		10%  { bottom: 0; height: 30px; }
		to   { bottom: 50%; }
	}
	@keyframes bounceball {
		from { bottom: 0; height: 20px; }
		10%  { bottom: 0; height: 30px; }
		to   { bottom: 50%; }
	}

	@keyframes bounceballShadow {
		from {  background: rgba(0, 0, 0, 0.2); transform: scaleY(0.1) scaleX(1); }
		10%  { background: rgba(0, 0, 0, 0.3); transform: scaleY(0.1) scaleX(0.8); }
		to   { background: rgba(0, 0, 0, 0.2); transform: scaleY(0.1) scaleX(1); }
	}
`;

export default globalStyles;
