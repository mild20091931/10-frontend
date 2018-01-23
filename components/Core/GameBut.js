import react from 'react'
import styled from 'styled-components'

const GameButton = styled.div`
  width: 60px;
  height: 160px;    
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  background-color: #E23D37;
  transition:all 550ms ease-in-out;
  cursor: pointer;
  position:fixed;
  right: 0%;
  top:35%;          
  color: white;
  z-index: 1;
  
  @media(max-width:1200px) {
    width: 70px;            
    height: 80px;          
  }
  @media(max-width:720px) {
    width: 50px;            
    height: 55px; 
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;         
  }

`
const Rotate = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: 0px;
    margin-left: -38px;
`
const Font = styled.div`
  position: absolute;
  font-size: 1.4em;
  font-weight: bold;  
  letter-spacing: 5px;
  -webkit-transform:rotate(270deg);
  @media(max-width:1200px) {
    font-size: 0em;            
  }
`
const IconGame = styled.img`
  width: 50%; 
  position: relative;
  top: -65px;
  left: 8px;
  -webkit-transform:rotate(0deg);
  @media(max-width:1200px) {
    width: 50%; 
    top: -20px;         
  }
  @media(max-width:720px) {
    width: 50%; 
    top: -16px;         
  }
`


const GameBut = () => (
  <GameButton className="justify-content-center align-items-center" data-toggle="" data-target="#">
       <Rotate><Font>GAME</Font><IconGame src="/static/image/icongame-monkey.png"/></Rotate>
  </GameButton>
)

export default GameBut