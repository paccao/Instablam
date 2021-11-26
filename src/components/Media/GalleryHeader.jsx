import styled from "styled-components"
import { Link } from "react-router-dom"
import { AiOutlineArrowLeft } from "react-icons/ai"

export default function GalleryHeader() {

	return (
		<>
			<Header>
				<Link to="/">
					<AiOutlineArrowLeft className="icon" />
				</Link>
				<h2>Gallery</h2>
			</Header>
			<hr />
		</>
	)
}

const Header = styled.header`
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	h2 {
		margin: 0px;
		text-align: center;
		color: #8d8;
		font-size: 1.7em;
	}

	.icon {
		color: #fff;
	}
`