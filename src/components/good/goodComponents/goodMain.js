import styled from 'styled-components';

import GoodMainInfo from './goodMainInfo';

const GoodMainWrapper = styled.main`
	flex: 1 0 auto;
	padding: 70px 0 30px;
`;

const GoodMain = () => {
	return (
		<GoodMainWrapper>
			<GoodMainInfo />
		</GoodMainWrapper>
	);
};

export default GoodMain;
