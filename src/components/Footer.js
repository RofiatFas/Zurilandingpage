import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
        <Column>
			<h4>Zuri<span>.</span>Team</h4>
		</Column>    
		<Column>
			<Heading>Links</Heading>
			<FooterLink href="#">Store</FooterLink>
			<FooterLink href="#">Blog</FooterLink>
		</Column>
		<Column>
			<Heading>Contact</Heading>
			<FooterLink href="#" className="special-text">8 Jubliee-CMD Road, Magodo,
            Lagos State</FooterLink>
			<FooterLink href="#">hello@zuri.team</FooterLink>
		</Column>
		<Column>
			<Heading>Follows us</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	<hr
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'black',
          height: '2px',
		  width: '25cm',
        }}
      />

	<p className="text-center copy-text">© 2020 ZURI TEAM</p>  
	</Box>
	
);
};
export default Footer;
