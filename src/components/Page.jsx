import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 100px 48px 48px 48px;
  width: 100%;
`;

const Container = styled.nav`
  margin: auto;
  max-width: 640px;
  width: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const ImageDescription = styled.p`
  position: absolute;
  z-index: 100;
  color: red;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
`;

export function Page({ page, ...rest }) {
  return (
    <Wrapper color={page.color} {...rest}>
      {
        page.pages[0].contents[0].type == "LINE" && (
          <Container>
            <ImageContainer>
              <Image src={page.pages[0].imageUrl} width={300} height={300} alt="image" />
              <ImageDescription y={page.pages[0].contents[0].value.position.y} x={page.pages[0].contents[0].value.position.x}>{page.pages[0].contents[0].value.text}</ImageDescription>
            </ImageContainer>
          </Container>
        )
      }
    </Wrapper>
  );
}
