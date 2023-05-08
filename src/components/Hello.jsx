import {useParams} from "react-router-dom";

export const Hello = () => {
	const {word, text, background} = useParams()
	return (
		<>
		<p style={{background: background, color: text}}>The word is: {word}</p>
		</>
	)
}