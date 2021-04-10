import React from "react";
import tw, { styled } from "twin.macro";
import { FiChevronDown } from "react-icons/fi";
import { BiLock, BiRefresh } from "react-icons/bi";
import { RiLuggageCartLine } from "react-icons/ri";
import { AiOutlineCreditCard } from "react-icons/ai";
import Step from "../components/Step";
import Accordion from "../components/Accordion";
import Main from "../components/Main";

const list = [
	{
		category: "Prada",
		sub: [
			{ title: "Leather mini-bag", amount: "$1850.00" },
			{ title: "Estimated shipping", amount: "$370.00" },
			{ title: "Discount", amount: "$0.00" },
			{ title: "Total", amount: "$2220.00" },
		],
	},
	{
		category: "Dr. Martens",
		sub: [
			{ title: "Leather mini-bag", amount: "$1850.00" },
			{ title: "Estimated shipping", amount: "$370.00" },
			{ title: "Discount", amount: "$0.00" },
			{ title: "Total", amount: "$2220.00" },
		],
	},
	{
		category: "Chanel",
		sub: [
			{ title: "Leather mini-bag", amount: "$1850.00" },
			{ title: "Estimated shipping", amount: "$370.00" },
			{ title: "Discount", amount: "$0.00" },
			{ title: "Total", amount: "$2220.00" },
		],
	},
];

const Shell = styled.div`
	background-color: #d1dcdf;
	${tw`font-nun  min-h-screen flex justify-center items-center`}
`;

const AppContainer = styled.div`
	background-color: #f5f8f9;
	height: 80%;
	min-height: 570px;
	width: 90%;
	max-width: 1000px;
	padding: 1.5rem;
	margin: 3rem 1rem;
	display: grid;
	grid-template-columns: 1.5fr 1fr;
`;

const Left = tw.div`p-8 h-full w-full bg-white rounded-md flex flex-col justify-start items-center gap-2`;

const Heading = tw.div`flex justify-between items-center w-full mb-8`;

const Name = tw.h2`font-bold text-black text-base`;

const Account = styled.div`
	background-color: #f5f8f9;
	${tw`w-32 h-10 p-1.5 rounded-full text-black text-xs font-bold flex justify-between items-center `}
`;

const Top = tw.div`w-full font-bold text-2xl flex justify-between items-start`;

const Secure = tw.div`font-nun flex justify-center gap-2 items-start`;

const Deck = styled.div`
	max-width: 8.5rem;
	font-size: 0.67rem;
	${tw`flex flex-col font-normal justify-start items-start line-height[1.5] text-gray-400`}
`;

const SecureText = tw.p`font-bold text-xs text-black`;

const Image = tw.div`rounded-full w-8 h-8 bg-red-100`;

const Right = tw.div`px-6 py-8 h-full w-full bg-transparent flex flex-col justify-start items-start gap-2`;

const Title = tw.h1`font-bold text-black text-2xl`;

const StepList = tw.div`w-full flex justify-between items-center my-12`;

const List = tw.p`text-gray-600 w-full font-bold text-xs  my-1 flex justify-between items-center`;

const Amount = tw.p`text-black text-sm font-bold`;

export default function Home() {
	return (
		<Shell>
			<AppContainer>
				<Left>
					<Heading>
						<Name>Tolly</Name>
						<Account>
							<FiChevronDown />
							Anniette <Image />
						</Account>
					</Heading>
					<Top>
						Payment details
						<Secure>
							<BiLock />
							<Deck>
								<SecureText>Card is Secure</SecureText>
								Your data is protected, everything will be
								private
							</Deck>
						</Secure>
					</Top>
					<Main />
				</Left>
				<Right>
					<Title>Order Summary</Title>
					<StepList>
						<Step
							title="Shipping"
							number="1"
							color="#5A6791"
							bgColor="#CED9FD"
							icon={<RiLuggageCartLine />}
						/>
						<Step
							title="Payment"
							number="2"
							color="#BD7E44"
							bgColor="#F9CBA0"
							icon={<AiOutlineCreditCard />}
						/>
						<Step
							title="Review"
							number="3"
							color="#6B8457"
							bgColor="#BDDBA6"
							icon={<BiRefresh />}
						/>
					</StepList>
					{list.map((item, idx) => (
						<Accordion list={item} key={`Accordion ${idx}`} />
					))}
					<List>
						Total Amount: <Amount>$3850</Amount>
					</List>
				</Right>
			</AppContainer>
		</Shell>
	);
}
