import tw, { styled } from "twin.macro";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Container = tw.div`flex justify-start font-nun items-center flex-col gap-2 w-full`;

const Top = tw.div`w-full bg-white cursor-pointer h-10 text-xs font-semibold rounded-md  flex justify-between items-center px-4`;

const Details = tw.div`w-full flex flex-col text-xs justify-center items-center px-5`;

const List = tw.p`text-gray-600 w-full font-normal my-1 flex justify-between items-center`;

const Amount = tw.p`text-black font-bold`;

const Accordion = ({ list }) => {
	const [show, setShow] = useState(false);
	return (
		<Container>
			<Top onClick={() => setShow(!show)}>
				{list.category}
				{show ? <FiChevronUp /> : <FiChevronDown />}
			</Top>
			{show && (
				<Details>
					{list.sub.map((item, idx) => (
						<List key={`${item.title} ${idx}`}>
							{item.title}
							<Amount>{item.amount}</Amount>
						</List>
					))}
				</Details>
			)}
		</Container>
	);
};

export default Accordion;
