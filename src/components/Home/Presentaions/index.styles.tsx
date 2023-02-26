import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ theme }) => theme.screens.desktopMaxWidth};
  justify-content: center;
  align-items: center;
`

export const MainTitle = styled.h1`
  color: ${({ theme }) => theme.secondary};
  font-size: 3rem;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  max-width: 80%;
  margin-bottom: 2rem;

  ${({ theme }) => theme.screens.tablet} {
    font-size: 2rem;
  }

  ${({ theme }) => theme.screens.mobile} {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.tertiary};
  font-size: 1.5rem;
  font-weight: 100;
  line-height: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  max-width: 85%;
  margin-bottom: 2rem;

  ${({ theme }) => theme.screens.tablet} {
    font-size: 1rem;
  }

  ${({ theme }) => theme.screens.mobile} {
    font-size: 0.8rem;
  }
`

export const ItemsSection = styled.div`
  position: relative;
  width: 100%;
  height: 39rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.screens.tablet} {
    max-width: ${({ theme }) => theme.screens.tabletMaxWidth};
  }

  ${({ theme }) => theme.screens.mobile} {
    flex-direction: column;
    margin-bottom: 2rem;
  }
`

export const GraySquare = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.clearGray};
  height: 27rem;
  width: 10rem;

  ${({ theme }) => theme.screens.mobile} {
    height: 8rem;
    width: 10rem;
  }
`

export const BackgroundImage = styled.div`
  width: 100%;
  height: 92%;
  margin: 2rem;
  z-index: 1;
  background-image: url("/images/banner/party1.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  ${({ theme }) => theme.screens.mobile} {
    width: 90%;
  }
`

export const DescriptionGraySquare = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.clearGray};
  height: max-content;
  width: 30rem;
  padding: 1.5rem;
  z-index: 2;
  left: 0;
  bottom: 8rem;

  p {
    font-weight: 300;
    color: ${({ theme }) => theme.tertiary};
    font-size: 1.15em;
    line-height: 1.5em;
  }

  ${({ theme }) => theme.screens.mobile} {
    position: initial;
    width: 90%;
  }
`
export const ItemsSection2 = styled.div`
  position: relative;
  width: 100%;
  height: 39rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${({ theme }) => theme.screens.tablet} {
    max-width: ${({ theme }) => theme.screens.tabletMaxWidth};
  }

  ${({ theme }) => theme.screens.mobile} {
    flex-direction: column-reverse;
    justify-content: center;
  }
`

export const GraySquare2 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.clearGray};
  height: 27rem;
  width: 10rem;

  ${({ theme }) => theme.screens.mobile} {
    display: none;
  }
`

export const BackgroundImage2 = styled.div`
  width: 70%;
  height: 92%;
  margin: 2rem;
  z-index: 1;
  background-image: url("/images/banner/party3.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  ${({ theme }) => theme.screens.mobile} {
    width: 90%;
  }
`

export const DescriptionGraySquare2 = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.clearGray};
  height: max-content;
  width: 25rem;
  padding: 1.5rem;
  z-index: 2;
  right: 0;
  bottom: 8rem;

  h1 {
    color: ${({ theme }) => theme.tertiary};
    font-weight: 500;
    margin-bottom: 1rem;
  }

  p {
    font-weight: 300;
    color: ${({ theme }) => theme.tertiary};
    font-size: 1.15em;
    line-height: 1.5em;
  }

  ${({ theme }) => theme.screens.tablet} {
    width: 20rem;
  }

  ${({ theme }) => theme.screens.mobile} {
    position: initial;
    width: 90%;
  }
`
