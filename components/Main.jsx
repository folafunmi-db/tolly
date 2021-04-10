import { useState } from "react";
import tw, { styled } from "twin.macro";
import { SiVisa, SiMastercard } from "react-icons/si";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import Card from "../components/Card";

const Container = tw.div`flex font-nun flex-col h-full w-full justify-start items-center gap-3 py-1`;

const TopBar = tw.div`w-full h-12 flex border-b border-gray-200 justify-start gap-4 items-center`;

const Tab = styled.div`
	${tw`text-gray-400 text-xs py-4 cursor-pointer font-bold relative transition hover:text-gray-800`}
	${({ tab }) =>
		tab === "Credit Card" &&
		`
    color: black;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #000;
    }
  `}
`;

const Group = tw.div`w-full h-full flex gap-8 justify-start items-start`;

const Left = tw.div`flex gap-2.5 justify-start items-start flex-col`;

const Right = tw.div`flex gap-5 w-full justify-between items-start flex-col h-full`;

const ButtonRow = tw.div`flex justify-start items-center gap-8 w-full`;

const Btn = tw.button` bg-black rounded-lg px-6 py-4 text-white text-xs`;

const Cancel = tw.p` text-xs text-gray-400 cursor-pointer`;

const Col = tw.div`flex flex-col items-start justify-start gap-2 w-full`;

const Name = tw.p`text-gray-400 text-xs`;

const InputDiv = styled.div`
	background-color: #f5f8f9;
	${tw`h-12 rounded-md w-20 flex p-2 justify-start items-center gap-3 text-gray-300`};

	svg {
		width: 2rem;
		height: 2rem;
		cursor: pointer;
	}
`;

const InputDiv2 = styled(InputDiv)`
	width: 100%;

	svg {
		width: 2.2rem;
		height: 2.2rem;
	}
`;

const Input = tw.input`bg-transparent w-full focus:outline-none h-full placeholder-gray-400 text-xs text-black font-nun`;

const Main = () => {
	const [hide, setHide] = useState(false);
	return (
		<Container>
			<TopBar>
				<Tab tab="Credit Card">Credit Card</Tab>
				<Tab>Paypal</Tab>
				<Tab>Other</Tab>
			</TopBar>
			<Group>
				<Left>
					<Card
						numbers="4323"
						add={false}
						icon={<SiMastercard />}
						bgColor="#CED9FD"
					/>
					<Card
						numbers="5442"
						add={false}
						icon={<SiVisa />}
						bgColor="#F9CBA1"
					/>
					<Card
						numbers=""
						add={true}
						icon={<SiMastercard />}
						bgColor="#BDDBA6"
					/>
				</Left>
				<Right>
					<Col>
						<Name>Credit Card</Name>
						<InputDiv2>
							<Input type="text" />
							<SiMastercard />
						</InputDiv2>
					</Col>
					<Col>
						<Name>Name</Name>
						<InputDiv2>
							<Input type="text" />
						</InputDiv2>
					</Col>

					<ButtonRow>
						<Col>
							<Name>Expiration date</Name>
							<InputDiv>
								<Input type="text" />
							</InputDiv>
						</Col>
						<Col>
							<Name>CVV</Name>
							<InputDiv>
								<Input type={hide ? "password" : "text"} />
								{hide ? (
									<AiOutlineEye
										onClick={() => setHide(!hide)}
									/>
								) : (
									<AiOutlineEyeInvisible
										onClick={() => setHide(!hide)}
									/>
								)}
							</InputDiv>
						</Col>
					</ButtonRow>

					<ButtonRow>
						<Btn>Confirm order</Btn>
						<Cancel>Cancel and Return</Cancel>
					</ButtonRow>
				</Right>
			</Group>
		</Container>
	);
};

export default Main;
