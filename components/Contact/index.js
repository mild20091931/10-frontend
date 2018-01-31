import react from 'react'
import Bg from '../Core/BgStory.js'
import styled from 'styled-components'
import HeartBox from './HeartBox'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'

const DivContact = styled.div`
  text-align: center;    
  width: 100%;  
  overflow: hidden;
`
const ImgLeft = styled.img`
  width:5vw;
  @media(max-width:720px) {
    width : 13vw;
  }
`
const ImgCenter = styled.img`
  width:5vw;
  cursor:pointer;
  margin-top : 17px;
  margin-left : 1vw;
  margin-right : 1vw;
  @media(max-width:720px) {
    width : 13vw;
  }
`
const ImgRight = styled.img`
  width : 5vw;
  @media(max-width:720px) {
    margin-top : 7vw;
    width : 13vw;
  }
`
const Line = styled.div`
  border-left: thick solid #000;
  border-right: thick solid #000;
  @media(max-width:575px) {
    border-left: none;
    border-right: none;
  }
`

const Linerespon = styled.div`
    width : 50vw;
    height : 2px;
    margin-left : 20vw;
    margin-top : 5vw;
    background-color: #000;
  @media(min-width:576px){
    display : none;
  }
`

const ContentBg = Bg.extend`
  min-height: 90vh;
  z-index:1;
`

const FooterBg = Bg.extend`
  min-height: 10vh;
  background-color:#154051;  
`

const Space = styled.div`
  margin-top: 5%;
  margin-bottom: 10%;
`

const Bgdin = styled.img`
  position : absolute;
  z-index : 1;
  bottom : 0vh;
  left : 0vw;
  width : 100.5%;
`

const Relative = styled.div`
  position : relative;
`


const index = () => (
  <DivContact>
    <Relative>
      <Bgdin src = '/static/image/Din.svg'/>
    <ContentBg bgColor="#444B52" className="">
      <div className="container-fluid">
        <div className="row">
          <Space className="col-md-12">
            <H1>Contact</H1>
            <H2>ติดต่อเรา</H2>
            <div className="row">
              <div className="col-sm-3 col-md-3 img-responsive">
                <ImgLeft src="/static/image/ContactPhone.svg" />
                <p className="mt-3"><strong>พี่วิปโป้: 08-3082-2189</strong></p>
              </div>
              <Line className="col-sm-6 col-md-6">
                <Linerespon />
                <a href="https://www.facebook.com/wipcamp/" target="_blank">
                  <ImgCenter src="/static/image/facebook ci logo.png" />
                </a>
                <a href="http://line.naver.jp/ti/p/Z_Qg6KlFnU#~" target="_blank">
                  <ImgCenter src="/static/image/LINEa ci logo.png" />
                </a>
                <a href="https://twitter.com/WIPCamp" target="_blank">
                  <ImgCenter src="/static/image/Twiiter ci logo.png" />
                </a>
                <a href="https://www.instagram.com/wipcamp/" target="_blank">
                  <ImgCenter src="/static/image/ig ci logo.png" />
                </a>
                <a href="https://www.youtube.com/channel/UC_Lhso9PxSlxNuw2wG9zYIA" target="_blank">
                  <ImgCenter src="/static/image/Youtube ci logo.png" />
                </a>
                <Linerespon />
              </Line>
              <div className="col-sm-3 col-md-3 img-responsive">
                <ImgRight src="/static/image/ContactMail.svg" />
                <p className="mt-3"><strong>wippo@wipcamp.com</strong></p>
              </div>
            </div>
          </Space>
        </div>
        <div className="row">
          <div className="col-md-12">
            <HeartBox />
          </div>
        </div>
      </div>
    </ContentBg>
    </Relative>

    <FooterBg className="d-flex justify-content-center align-items-center text-white">
      <div className="fa fa-code" aria-hidden="true" />&nbsp;with&nbsp;<div className="fa fa-heart" aria-hidden="true" />&nbsp;by 10 I'm Developer
    </FooterBg>
  </DivContact>
)

export default index
