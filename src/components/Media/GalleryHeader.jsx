import { useEffect, useRef } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { BsFillGridFill } from "react-icons/bs"
import { BiRectangle } from "react-icons/bi"

export default function GalleryHeader({
	galleryFullscreen,
	setGalleryFullscreen,
}) {
	const fullscreenBtn = useRef(null)
	const gridBtn = useRef(null)

	useEffect(() => {
		if (galleryFullscreen) {
			gridBtn.current.classlist = ""
			fullscreenBtn.current.classlist = "highlighted"
		} else {
			fullscreenBtn.current.classlist = ""
			gridBtn.current.classlist = "highlighted"
		}
	}, [galleryFullscreen])

	return (
		<>
			<Header>
				<Link to="/">
					<AiOutlineArrowLeft className="icon" />
				</Link>
				<h2>Gallery</h2>
				<UIButtons>
					<button
						ref={fullscreenBtn}
						onClick={() => setGalleryFullscreen(true)}
					>
						<BiRectangle className="icon" />
					</button>
					<button
						ref={gridBtn}
						onClick={() => setGalleryFullscreen(false)}
					>
						<BsFillGridFill className="icon" />
					</button>
				</UIButtons>
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

const UIButtons = styled.div`
	/* display: grid;
	grid-template-columns: repeat(2, 1fr); */

	button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
		height: max-content;
	}
`
