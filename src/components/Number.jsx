import {useParams} from "react-router-dom";


export const Number = () => {
	const {num} = useParams();
	console.log(isNaN(num))
	return (
		<>
			the {isNaN(num)? 'word': 'number'} is {num}
		</>
	)
}