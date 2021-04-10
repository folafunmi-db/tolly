import tw, { styled } from "twin.macro";
import { MdAddCircle } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";

const Container = styled.div`
	background-color: ${({ bgColor }) => `${bgColor}`};
	${tw`flex relative w-52 h-28 rounded-md text-xs font-bold font-nun text-black p-3`}

	svg {
		width: 24px;
		height: 24px;
	}
`;

const Add = tw.div`flex justify-center items-center gap-2 absolute top-11 right-6`;

const Details = tw.div`absolute right-3 top-3 h-24 flex flex-col justify-between items-center`;

const Card = ({ numbers, add, bgColor, icon }) => {
	return (
		<>
			{add ? (
				<Container bgColor={bgColor}>
					<Add>
						Add new <MdAddCircle />
					</Add>
				</Container>
			) : (
				<Container bgColor={bgColor}>
					<Details>
						**** {numbers}
						{icon}
					</Details>
				</Container>
			)}
		</>
	);
};

export default Card;
