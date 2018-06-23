// @flow

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	margin-top: 30px;
`;

const EmptyStateIcon = styled.span.attrs({
	role: (props: any) => props.role,
	'aria-label': (props: any) => props.ariaLabel,
})`
	font-size: 50px;
	display: block;
`;

const EmptyStateText = styled.span`
	font-size: 16px;
	font-weight: 500;
`;

const EmptyState = () => (
	<Wrapper>
		<EmptyStateIcon role="img" ariaLabel="frowning face">☹️</EmptyStateIcon>
		<EmptyStateText>مسابقه ای درحال برگزاری نمی‌باشد.</EmptyStateText>
	</Wrapper>
);

export default EmptyState;
