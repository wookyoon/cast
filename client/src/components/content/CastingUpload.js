import React, { useState, useEffect  } from 'react';
import { Typography, Button, Input } from 'antd';
import Form from 'react-bootstrap/Form';
import TagSearch from './TagSearch';
import ContentStore from "../../store/ContentStore";
import CastingStore from "../../store/CastingStore";

const { Title } = Typography;

function CastingUpload() {
    const [title, setTitle] = useState("")
    const [genre, setGenre] = useState("")
    const [role, setRole] = useState("")
    const [category, setCategory] = useState("")
    const [shootingDateYear, setShootingDateYear] = useState()
    const [shootingDateMonth, setShootingDateMonth] = useState()
    const [shootingDateDay, setShootingDateDay] = useState()
    const [dDayYear, setDDayYear] = useState()
    const [dDayMonth, setDDayMonth] = useState()
    const [dDayDay, setDDayDay] = useState()
    const [location, setLocation] = useState("")
    const [production, setProduction] = useState("")
    const [director, setDirector] = useState("")
    const [explanation, setExplanation] = useState("")
    const [roleExplanation, setRoleExplanation] = useState("")
    const [note, setNote] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault();

        let now = new Date();  
        let y = now.getFullYear();
        let m = now.getMonth() + 1;
        let d =now.getDate();
        console.log(ContentStore.tags)

        const created = y.toString()+"."+m.toString()+"."+d.toString()
        const shootingDate = shootingDateYear+"."+shootingDateMonth+"."+shootingDateDay;
        const dDay = dDayYear+"."+dDayMonth+"."+dDayDay;

        const data = {
            tag : ContentStore.tags,
            name : localStorage.getItem('name'),
            title : title,
            genre : genre,
            role : role,
            category : category,
            created : created,
            shootingDate : shootingDate,
            dDay : dDay,
            location : location,
            production : production,
            director : director,
            explanation : explanation,
            roleExplanation : roleExplanation,
            note : note
        }

        // console.log(data)
        CastingStore.castingCreate(data)

    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Upload Casting</Title>
            </div>


            <Form onSubmit={onSubmit} >

                <br />
                <label>제목</label>
                <Input
                    onChange = {(e)=>{setTitle(e.target.value);}}
                    value={title}
                />
                <br />
                <br />
                <br />
                <label>장르</label>
                <Input
                    onChange = {(e)=>{setGenre(e.target.value);}}
                    value={genre}
                />
                <br />
                <br />
                <br />
                <label>역할</label>
                <Input
                    onChange = {(e)=>{setRole(e.target.value);}}
                    value={role}
                />
                <br />
                <br />
                <br />
                <label>카테고리</label>
                <Form.Select aria-label="Default select example" onChange={(e)=>{setCategory(e.target.value);}}>
                    <option>Open this select menu</option>
                    <option value="단편">단편</option>
                    <option value="장편">장편</option>
                    <option value="기타">기타</option>
                </Form.Select>
                <br />
                <br />
                <br />
                <label>촬영일</label>
                <Input
                    onChange = {(e)=>{setShootingDateYear(e.target.value);}}
                    value={shootingDateYear}
                    placeholder="2022"
                />
                 <Input
                    onChange = {(e)=>{setShootingDateMonth(e.target.value);}}
                    value={shootingDateMonth}
                    placeholder="09"
                />
                 <Input
                    onChange = {(e)=>{setShootingDateDay(e.target.value);}}
                    value={shootingDateDay}
                    placeholder="00"
                />
                <br />
                <br />
                <br />
                <label>마감일</label>
                <Input
                    onChange = {(e)=>{setDDayYear(e.target.value);}}
                    value={dDayYear}
                    placeholder="0000"
                />
                <Input
                    onChange = {(e)=>{setDDayMonth(e.target.value);}}
                    value={dDayMonth}
                    placeholder="00"
                />
                <Input
                    onChange = {(e)=>{setDDayDay(e.target.value);}}
                    value={dDayDay}
                    placeholder="00"
                />
                <br />
                <br />
                <br />
                <label>로케이션</label>
                <Input
                    onChange = {(e)=>{setLocation(e.target.value);}}
                    value={location}
                />
                <br />
                <br />
                <br />
                <label>제작</label>
                <Input
                    onChange = {(e)=>{setProduction(e.target.value);}}
                    value={production}
                />
                <br />
                <br />
                <br />
                <label>감독</label>
                <Input
                    onChange = {(e)=>{setDirector(e.target.value);}}
                    value={director}
                />
                <br />
                <br />
                <br />
                <label>작품설명</label>
                <Input
                    onChange = {(e)=>{setExplanation(e.target.value);}}
                    value={explanation}
                />
                <br />
                <br />
                <br />
                <label>역할설명</label>
                <Input
                    onChange = {(e)=>{setRoleExplanation(e.target.value);}}
                    value={roleExplanation}
                />
                <br />
                <br />
                <br />
                <label>참고사항</label>
                <Input
                    onChange = {(e)=>{setNote(e.target.value);}}
                    value={note}
                />
                <br />
                <br />
                <label>Tags</label>
                <TagSearch />
                <br />
                <br />

                <Button  onClick={onSubmit} >
                    Submit
                </Button>

            </Form>
            
            
        </div>
    );
}

export default CastingUpload;