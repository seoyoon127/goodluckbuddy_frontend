const validate = ({ nickname, gender, year, month, day, category }) => {
    let newErrors = {};

    if (!nickname) newErrors.nickname = "닉네임을 입력해주세요";
    if (!gender) newErrors.gender = "성별을 선택해주세요";

    if (year === "년" || month === "월" || day === "일")
        newErrors.birth = "생년월일을 선택해주세요";

    if (category === "카테고리")
        newErrors.category = "관심 분야를 선택해주세요";

    return {
        isValid: Object.keys(newErrors).length === 0,
        errors: {
            nickname: newErrors.nickname || "",
            gender: newErrors.gender || "",
            birth: newErrors.birth || "",
            category: newErrors.category || ""
        }
    };
};

export default validate;
