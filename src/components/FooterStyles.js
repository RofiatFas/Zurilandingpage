import styled from 'styled-components';

export const Box = styled.div`
padding: 200px 180px;
position: absolute;
bottom: -1000px;
width: 100%;
// backgroud:white;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
// color: red;
font-size: 15px;
text-decoration: none;
cursor:pointer;
font-weight: 500;


&:hover {
	// color: green;
	// transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 20px;
color: black;
margin-bottom: 40px;
font-weight: 600;
`;
// export const IconContext = styled.fa`
// font-size: 12px;
// justify-content: space-;
// `;


