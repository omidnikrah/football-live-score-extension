import { injectGlobal } from 'styled-components';
import VazirLightEot from '../assets/fonts/Vazir-Light.eot';
import VazirLightWoff from '../assets/fonts/Vazir-Light.woff';
import VazirLightWoff2 from '../assets/fonts/Vazir-Light.woff2';
import VazirLightTtf from '../assets/fonts/Vazir-Light.ttf';
import VazirBoldEot from '../assets/fonts/Vazir-Bold.eot';
import VazirBoldWoff from '../assets/fonts/Vazir-Bold.woff';
import VazirBoldWoff2 from '../assets/fonts/Vazir-Bold.woff2';
import VazirBoldTtf from '../assets/fonts/Vazir-Bold.ttf';
import VazirNormalEot from '../assets/fonts/Vazir.eot';
import VazirNormalWoff from '../assets/fonts/Vazir.woff';
import VazirNormalWoff2 from '../assets/fonts/Vazir.woff2';
import VazirNormalTtf from '../assets/fonts/Vazir.ttf';
import VazirMediumEot from '../assets/fonts/Vazir-Medium.eot';
import VazirMediumWoff from '../assets/fonts/Vazir-Medium.woff';
import VazirMediumWoff2 from '../assets/fonts/Vazir-Medium.woff2';
import VazirMediumTtf from '../assets/fonts/Vazir-Medium.ttf';
import VazirThinEot from '../assets/fonts/Vazir-Thin.eot';
import VazirThinWoff from '../assets/fonts/Vazir-Thin.woff';
import VazirThinWoff2 from '../assets/fonts/Vazir-Thin.woff2';
import VazirThinTtf from '../assets/fonts/Vazir-Thin.ttf';

const fonts = injectGlobal`
	@font-face {
		font-family: 'Vazir';
		src: url(${VazirLightEot});
		src: url(${VazirLightEot}?#iefix') format('embedded-opentype'),
			url('${VazirLightWoff2}') format('woff2'),
			url('${VazirLightWoff}') format('woff'),
			url('${VazirLightTtf}') format('truetype');
		font-weight: 200;
		font-style: normal;
	}

	@font-face {
		font-family: 'Vazir';
		src: url('${VazirThinEot}');
		src: url('${VazirThinEot}?#iefix') format('embedded-opentype'),
			url('${VazirThinWoff2}') format('woff2'),
			url('${VazirThinWoff}') format('woff'),
			url('${VazirThinTtf}') format('truetype');
		font-weight: 100;
		font-style: normal;
	}

	@font-face {
		font-family: 'Vazir';
		src: url('${VazirBoldEot}');
		src: url('${VazirBoldEot}?#iefix') format('embedded-opentype'),
			url('${VazirBoldWoff2}') format('woff2'),
			url('${VazirBoldWoff}') format('woff'),
			url('${VazirBoldTtf}') format('truetype');
		font-weight: bold;
		font-style: normal;
	}

	@font-face {
		font-family: 'Vazir';
		src: url('${VazirMediumEot}');
		src: url('${VazirMediumEot}?#iefix') format('embedded-opentype'),
			url('${VazirMediumWoff2}') format('woff2'),
			url('${VazirMediumWoff}') format('woff'),
			url('${VazirMediumTtf}') format('truetype');
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: 'Vazir';
		src: url('${VazirNormalEot}');
		src: url('${VazirNormalEot}?#iefix') format('embedded-opentype'),
			url('${VazirNormalWoff2}') format('woff2'),
			url('${VazirNormalWoff}') format('woff'),
			url('${VazirNormalTtf}') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
`;

export default fonts;
