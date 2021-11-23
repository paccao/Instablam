import styled from "styled-components"
import { Link } from "react-router-dom"
import { AiOutlineArrowLeft } from "react-icons/ai"

export default function GalleryHeader() {
	return (
		<header>
			<Top>
				<Link to="/">
					<AiOutlineArrowLeft />
				</Link>
				<Header>Gallery</Header>
			</Top>
			<hr />
			<Bottom>
				<button>T</button>
				<div>
					<button>S</button>
					<button>G</button>
				</div>
			</Bottom>
		</header>
	)
}

const Top = styled.nav`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`

const Header = styled.h2`
	margin: 0;
`

const Bottom = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`
