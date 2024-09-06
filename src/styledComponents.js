import styled from 'styled-components'

export const HeadingContainer = styled.div`
  width: 100px;
  padding: 0;
  margin: 0;
`

export const Heading = styled.h1`
  font-size: 18px;
  font-family: 'Bree Serif';
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const YourNamePara = styled.h1`
  font-size: 18px;
  margin-right: 10px;
  color: #fcba03;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`
export const BothScoresMainContainer = styled.div`
  display: flex;
  align-items: center;
`

export const GameResMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0;
`

export const GameResIconCard = styled.div`
  width: 50%;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const GameResIcon = styled.img`
  width: 85%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const GameResOwner = styled.p`
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin: 0;
`

export const GameResText = styled.p`
  color: white;
  font-weight: bold;
  font-size: 32px;
  margin: 0;
`

export const PlayAgainBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`

export const PlayAgainBtn = styled.button`
  outline: none;
  border: none;
  background-color: white;
  padding: 10px 32px;
  color: #223a5f;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Bree Serif';

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.96);
  }
`

export const SpanEle = styled.span`
  font-size: 22px;
  font-weight: bold;
`

export const FinalResTxt = styled.h1`
  font-size: 24px;
  color: #fcba03;
  text-align: center;
  margin: 20px;
`
