import tw, { styled } from "twin.macro";

const Container = tw.div`flex justify-center items-center gap-3 p-1`;

const Bubble = styled.div`
	${tw`w-8 h-8 rounded-full flex justify-center items-center `}
	background-color: ${({ bgColor }) => `${bgColor}`};
	color: ${({ color }) => `${color}`};
`;

const Deck = tw.div` flex font-normal justify-center text-left items-start flex-col text-gray-400`;

const StepT = styled.p`
	font-size: 0.6rem;
`;
const Title = styled.p`
	font-size: 0.65rem;
	${({ title }) => title === "Payment" && tw`font-bold text-black`}
`;

const Step = ({ number, title, color, bgColor, icon }) => {
	return (
		<Container>
			<Bubble color={color} bgColor={bgColor}>
				{icon}
			</Bubble>
			<Deck>
				<StepT>Step {number}</StepT>
				<Title title={title}> {title}</Title>
			</Deck>
		</Container>
	);
};

export default Step;
