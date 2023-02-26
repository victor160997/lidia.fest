import styled from "styled-components"

export const BannerContainer = styled.section<{ backgroundImage: string }>`
  width: 100%;
  height: max-content;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  transition: all ease 4s;
  animation: zoom 45s linear infinite;
  overflow: hidden;

  @keyframes zoom {
    0% {
      background-size: 100%;
    }
    50% {
      background-size: 120%;
    }
    100% {
      background-size: 100%;
    }
  }
`

export const GradientDiv = styled.div`
  /* background: linear-gradient(to top, rgb(29, 27, 27) 5%, transparent 98%); */
  width: 100%;
  height: 100%;
  min-height: 35rem;
  ${({ theme }) => theme.screens.mobile} {
    min-height: 10rem;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: rgb(29, 27, 27, 0.7);

  section {
    background-color: rgb(132, 89, 95, 0.2);
    height: 55px;
    width: 100%;
    div {
      background-color: rgb(132, 89, 95, 0.2);
      height: 55px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      div {
        height: 45px;
        background-color: rgb(132, 89, 95, 0.4);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        div {
          height: 35px;
          background-color: rgb(132, 89, 95, 0.6);
          div {
            height: 25px;
            background-color: rgb(132, 89, 95, 0.8);
            div {
              height: 15px;
              background-color: ${({ theme }) => theme.primary};
            }
          }
        }
      }
    }
  }
`

export const Title = styled.h1`
  font-family: "Gloria Hallelujah", cursive;
  border-radius: 25px;
  padding: 1rem;
  margin-top: 5rem;
  color: white;
  font-size: 3rem;
  letter-spacing: 0.3rem;
  text-shadow: 2px 2px 2px ${({ theme }) => theme.primary};

  ${({ theme }) => theme.screens.tablet} {
    font-size: 2.5rem;
  }

  ${({ theme }) => theme.screens.mobile} {
    font-size: 1.1rem;
    margin: 3rem 0;
  }
`
