import styled from "styled-components"
import { useState, useEffect } from "react";
import Navbar from "../components/navbar/navbar"
import Title from "../components/text/Title"
import SubTitle from "../components/text/SubTitle"
import BottomLineInput from "../components/input/BottomLineInput"
import DropdownMenu from "../components/menu/DropdownMenu"
import categories from "../data/categories";
import years from "../data/years";
import months from "../data/months";
import days from "../data/days";
import Button from "../components/button/SquareGreenLongButton"
import InvalidText from "../components/text/InvalidText";
import validate from "../validate/validateProfile";
import usePostNicknameDuplicate from "../apis/usePostNicknameDuplicate";
import usePatchUser from "../apis/usePatchUser";
import categoryInEnglish from "../data/categoryInEnglish";

const ProfileModifyPage = () => {
    const [nickname, setNickname] = useState("");
    const [gender, setGender] = useState(null);
    const [year, setYear] = useState("년");
    const [month, setMonth] = useState("월");
    const [day, setDay] = useState("일");
    const [category, setCategory] = useState("카테고리");

    const [errors, setErrors] = useState({
        nickname: "",
        gender: "",
        birth: "",
        category: ""
    });

    const { mutate:postNicknameDuplicate } = usePostNicknameDuplicate(setErrors);
    const { mutate:patchUser } = usePatchUser();

    const handleNicknameDuplicate = () => {
        postNicknameDuplicate(nickname);
    }

    const profile = {
        nickname: "닉네임",
        gender: "FEMALE",
        birth: "1999-03-21",
        category: "친구"
    };

    useEffect(() => {
        const fetchProfile = async () => {

            setNickname(profile.nickname);
            setGender(profile.gender);

            const [y, m, d] = profile.birth.split("-");
            setYear(y);
            setMonth(m);
            setDay(d);

            setCategory(profile.category);
        };

        fetchProfile();
    }, []);

    const handleSave = () => {
        const { isValid, errors } = validate({
            nickname,
            gender,
            year,
            month,
            day,
            category
        });

        setErrors(errors);
        handleNicknameDuplicate();

        const birth = year + "-" + (month.length < 2 ? "0" + month : month)  + "-" + (day.length < 2 ? "0" + day : day);
        const categoryEng = categoryInEnglish(category);

        const profile = {
            nickname: nickname,
            gender: gender,
            birth: birth,
            category: categoryEng
        }

        if (isValid) {
            if (nickname == profile.nickname && gender == profile.gender && birth == profile.birth && category == profile.category){
                alert("변경사항이 없습니다.")
            }
            else {
                patchUser(profile);
                alert("변경사항이 저장되었습니다.")
            }
        }
    }

    return (
        <>
            <Navbar title={"회원정보 수정"} none={true}/>
            <Wrapper>
                <Title text={"회원 정보를 입력해주세요"}/>
                <InputWrapper>
                    <TextWrapper><SubTitle textE={"닉네임"}/></TextWrapper>
                    <BottomLineInput 
                        hint={"닉네임을 입력하세요"} 
                        value={nickname} 
                        onClick={handleNicknameDuplicate}
                        onChange={(e) => setNickname(e.target.value)}/>
                    <ErrorSlot>
                        <InvalidText text={errors.nickname} valid={errors.nickname.includes("사용 가능")}/>
                    </ErrorSlot>
                    <TextWrapper><SubTitle textE={"성별"}/></TextWrapper>
                    <RadioGroup>
                        <GenderButton selected={gender === "MALE"} onClick={() => setGender("MALE")}> 남성 </GenderButton>
                        <GenderButton selected={gender === "FEMALE"} onClick={() => setGender("FEMALE")}> 여성 </GenderButton>
                        <GenderButton selected={gender === "NONE"} onClick={() => setGender("NONE")}> 선택안함 </GenderButton>
                    </RadioGroup>
                    <ErrorSlot>
                        <InvalidText text={errors.gender} />
                    </ErrorSlot>
                    <TextWrapper><SubTitle textE={"생년월일"}/></TextWrapper>
                    <BirthGroup>
                        <DropdownMenu
                            menus={years}
                            selected={year}
                            onSelect={setYear}
                        />
                        <DropdownMenu
                            menus={months}
                            selected={month}
                            onSelect={setMonth}
                        />
                        <DropdownMenu
                            menus={days}
                            selected={day}
                            onSelect={setDay}
                        />
                    </BirthGroup>
                    <ErrorSlot>
                        <InvalidText text={errors.birth} />
                    </ErrorSlot>
                    <InterestWrapper>
                        <TextWrapper><SubTitle textE={"관심 분야"}/></TextWrapper>
                        <DropdownMenu
                            menus={categories}
                            selected={category}
                            onSelect={setCategory}
                        />
                    </InterestWrapper>
                    <ErrorSlot>
                        <InvalidText text={errors.category} />
                    </ErrorSlot>
                </InputWrapper>
                <Button text={"변경사항 저장"}  
                onClick={handleSave}/>
            </Wrapper>
        </>
    )
}
export default ProfileModifyPage

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

const InputWrapper = styled.div`
    width: 250px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
`;

const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start; 
    margin-top: 10px;
    margin-bottom: 20px;
`;

const RadioGroup = styled.div`
    display:flex;
    gap: 20px;
    margin-bottom: 20px;
`;

const GenderButton = styled.button`
    width: 70px;
    height: 35px;
    border-radius: 5px;
    font-size: 13px;
    cursor: pointer;

    border: 1px solid ${props =>
        props.selected ? "white" : "#93D074"};

    background-color: ${props =>
        props.selected ? "#93D074" : "white"};

    color: ${props =>
        props.selected ? "white" : "#93D074"};

    transition: all 0.2s ease;
`;

const BirthGroup = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-around;
    margin-bottom: 20px;
`;

const InterestWrapper = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`;

const ErrorSlot = styled.div`
    height: 18px;
    width: 100%;
    margin-top: -10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
`;