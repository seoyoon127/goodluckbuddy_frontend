const validate = ({ title, content }) => {
    let newErrors = {};

    if (!title){
        newErrors.title = "제목을 입력해주세요";
    } else if (title.length > 20) {
        newErrors.title = "제목은 20자 이하여야 합니다";
    }

    if (!content) {
        newErrors.content = "편지 내용을 선택해주세요";
    } else if (content.length > 200) {
        newErrors.content = "편지 내용은 200자 이하여야 합니다"
    }

    return {
        isValid: Object.keys(newErrors).length === 0,
        errors: {
            title : newErrors.title || "",
            content : newErrors.content || ""
        }
    };
};

export default validate;