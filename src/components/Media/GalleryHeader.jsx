import styled from "styled-components"
import { Link } from "react-router-dom"
import { AiOutlineArrowLeft } from "react-icons/ai"

export default function GalleryHeader() {
	return (
		<>
			<Header>
				<Link className="iconContainer" to="/">
					<AiOutlineArrowLeft className="icon" />
				</Link>
				<h2>Gallery</h2>
			</Header>
			<Hr />
		</>
	)
}

const Header = styled.header`
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	h2 {
		display: flex;
		align-self: center;
		justify-self: center;
		margin: 0px;
		text-align: center;
		color: #8d8;
		font-size: 1.7em;
	}

	.iconContainer {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.iconContainer > * {
		color: #fff;
		font-size: 1.4rem;
	}
`

const Hr = styled.header`
	display: flex;
	justify-self: center;
	width: 100%;
	height: 2px;
	background-color: #ffffff;
	border-radius: 2px;
	margin: 0.5rem 0px;
`
