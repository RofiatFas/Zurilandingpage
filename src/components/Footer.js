import React from "react";
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
// import { IconContext } from "react-icons/lib";
import { IconContext } from "react-icons";
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
	<Box className="box">
	<Container>
		<Row>
        <Column>
			<h4>Zuri<span>.</span>Team</h4>
		</Column>    
		<Column>
			<Heading>Links</Heading>
			<FooterLink href="#" className="red-text footer store-text">Store</FooterLink>
			<FooterLink href="#" className="red-text blog-text">Blog</FooterLink>
		</Column>
		<Column>
			<Heading>Contact</Heading>
			<FooterLink href="#" className="special-text footer">8 Jubliee-CMD Road, Magodo,
            Lagos State</FooterLink>
			<FooterLink href="#" className="red-text footer hello-text">hello@zuri.team</FooterLink>
		</Column>
		<Column>
			<Heading>Follows Us</Heading>
			<FooterLink href="#" className="footer">
			<IconContext.Provider value={{ color: "blue", size: '20px'}} >
			   <FaFacebookSquare/>
			</IconContext.Provider>	
			<IconContext.Provider value={{ color: "#1DA1F2", size: '20px' }}>
			   <FaTwitter/>
			</IconContext.Provider>	
			<IconContext.Provider value={{ color: "red", size: '20px' }} >
			   <FaInstagramSquare/>
			</IconContext.Provider>	
			<IconContext.Provider value={{ color: "blue", size: '20px' }}>
			   <FaLinkedin/>
			</IconContext.Provider>	
			</FooterLink>
			{/* <FooterLink href="#">
			<FaTwitter/>
			</FooterLink>
			<FooterLink href="#">
			<FaInstagramSquare/>
			</FooterLink>
			<FooterLink href="#">
			<FaLinkedin/>
			</FooterLink> */}
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
		  paddingBottom: '-30px',
        }}
      />

	<p className="text-center copy-text bottom">© 2020 ZURI TEAM</p>  
	</Box>
	
);
};
export default Footer;
