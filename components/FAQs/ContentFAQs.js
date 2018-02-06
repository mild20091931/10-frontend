import react from 'react'
import styled from 'styled-components'
import {compose, lifecycle, withState} from 'recompose'

const ImgLefe = styled.img`
  width:30%;
  margin-left:15vw;
  right: 0;
`

const ImgRight = styled.img`
  width:30%;
  margin-right:15vw;
  right: 0;
`

const Box1 = styled.div`
  width: 46vw;
  min-height: 30hw;    
  padding: 1vw;
  background-color:${props => props.color || ''};
  margin-top:1vw;
	margin-bottom:1vw;
	border-radius: 10px;
  &.arrow_box {
    position: relative;
    background: ${props => props.color || ''};
  }
  &.arrow_box:after {
    right: 100%;
    top: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-right-color:${props => props.color || ''};
    border-width: 1vw;
    margin-top: -1vw;
  }
`
const Box = styled.div`
width: 46vw;
min-height: 30hw;    
padding: 1vw;
background-color:#fff;
margin-top:1vw;
margin-bottom:1vw;
border-radius: 10px;
&.arrow_box {
  position: relative;
  background: #FFf;
}
&.arrow_box:after {
	left: 100%;
	top: 50%;
	border: solid transparent;
	content: " ";
	position: absolute;
	pointer-events: none;
	border-left-color:#FFF;
	border-width: 1vw;
	margin-top: -1vw;
}
`
const Zindex = styled.div`
  z-index : 10;
`

const FAQs = [
  { Q: "<strong>Q:</strong> <strong>อยากเป็นส่วนหนึ่งของค่ายนี้</strong>มาก ๆ ต้องทำอย่างไร ?", A: "<strong>A:</strong> น้องเอ๋ย สิ่งที่เจ้าต้องทำมีเพียงตอบคำถามในการสมัครด้วยตัวเองเพื่อแสดงถึงตัวตนของเจ้า จงใช้ความตั้งใจในการตอบคำถาม และอีกสิ่งหนึ่งที่จะลืมไม่ได้ น้องเอ๋ย โปรดจงอัพโหลดเอกสารให้ครบถ้วนและถูกต้องตามที่กำหนดเสียด้วย" },
  { Q: "<strong>Q:</strong> <strong>ไม่มีความรู้เกี่ยวกับคอมพิวเตอร์</strong>มากนัก จะเข้าค่ายนี้ได้หรือไม่ ?", A: "<strong>A:</strong> น้องเอ๋ย ไม่มีใครเก่งทุกอย่างได้โดยไร้การฝึกฝน เพียงแค่เจ้ามีความมุ่งมั่นที่จะศึกษาเรียนรู้หรือมีพื้นฐานมาทางด้านไอทีมาบ้าง และเปิดใจที่จะทำความเข้าในในโลกไอที เจ้าก็สามารถสมัครค่ายนี้ได้" },
  { Q: "<strong>Q:</strong> ค่ายนี้เป็นค่ายวิชาการ <strong>เครียดมากไหม</strong> มีกิจกรรมไหม ?", A: "<strong>A:</strong> ค่ายนี้เต็มที่ทั้งวิชาการและกิจกรรม น้องเอ๋ย เจ้าจะได้รับทั้งความรู้และความสนุกสนาน เจ้าไม่ต้องกลัวว่าจะเครียดหรือว่าค่ายนี้จะโหด พี่ ๆ ทุกคนในค่ายเป็นกันเอง พี่ ๆ พร้อมให้ความรู้และความบันเทิงแก่น้องๆ ตลอดเวลา" },
  { Q: "<strong>Q:</strong> นอนที่ไหน ห้องน้ำเป็นอย่างไรบ้าง ?", A: "<strong>A:</strong> น้องเอ๋ย เจ้าจะได้พักค้างแรมภายในหอพักของทางมหาวิทยาลัย ซึ่งจะมีพี่ๆ คอยดูแลตลอด 24 ชั่วโมง รวมถึงพี่พยาบาลที่ได้รับการอบรมโดยตรงจากทางมหาวิทยาลัยที่จะช่วยเหลือในกรณีที่น้องๆ ไม่สบาย  และพร้อมจะปฐมพยาบาลเบื้องต้นให้น้องๆ ตลอดระยะเวลาค่าย บอกผู้ปกครองได้เลยว่าไม่ต้องกังวล" },
  { Q: "<strong>Q:</strong> น้อง ๆ จะ<strong>ได้รับอะไร</strong>จากการมาค่าย ?", A: "<strong>A:</strong> เจ้าจะได้รู้ว่ากล่องดวงใจสำหรับตัวเจ้าคืออะไร เจ้าจะได้รับความรู้ด้านไอที จากพี่ ๆ หลักสูตรเทคโนโลยีสารสนเทศ คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรีครับ รวมถึงความสนุกสนานที่พี่ ๆ เตรียมไว้สำหรับน้อง ๆ ทุกคน อีกทั้งยังได้มิตรภาพจากเพื่อน ๆ และพี่ ๆ ภายในค่าย ที่สำคัญนะน้องเอ๋ย เจ้าจะได้รับประกาศนียบัตรจากทางค่าย เพื่อรับรองว่าเจ้าได้มาเข้าค่ายนี้" }

]

const Black = styled.p`
  color: #000;
`

const Content = props => (
  <div className="container-fluid">
    {
      FAQs.map((data, i) => (
        <div key={i}>
          <div className="row d-flex">
            <div className="col img-responesive align-self-center">
              <ImgLefe src={props.iconleft.iconl} />
            </div>
            <Zindex className="col-6">
              <Box1 color={props.team.faqs} className=" arrow_box" ><Black dangerouslySetInnerHTML={{__html: data.Q}} /></Box1>
            </Zindex>
            <div className="col">
            </div>
          </div>
          <div className="row d-flex">
            <div className="col">
            </div>
            <Zindex className="col-6">
              <Box className="arrow_box" primary><Black dangerouslySetInnerHTML={{__html: data.A}} /></Box>
            </Zindex>
            <div className="col img-responesive align-self-center">
              <ImgRight src={props.iconright.iconr} />
            </div>
          </div>
        </div>
      ))
    }
  </div>
)
export default compose(
  withState('iconleft','setIconleft',''),
  withState('iconright','setIconright',''),
  withState('team','setTeam',''),
  lifecycle({
    componentDidMount() {
      let iconl = JSON.parse(window.localStorage.getItem("color"))
      this.props.setIconleft(iconl)
      let iconr = JSON.parse(window.localStorage.getItem("color"))
      this.props.setIconright(iconr)
      let team = JSON.parse(window.localStorage.getItem("color"))
      this.props.setTeam(team)
    }
  })
)(Content)
