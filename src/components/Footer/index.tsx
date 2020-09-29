import React from "react";
import { Container } from "./styles";
import { FooterContainer, Parag } from "../../styles";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterContainer>
        <div className="social">
          <Parag>TESTE</Parag>
          <Parag>TESTE</Parag>
          <Parag>TESTE</Parag>
          <Parag>TESTE</Parag>
        </div>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
