const validate = ({category, infos}) => {
    let newErrors = {};

    if (!category){
        newErrors.category = "카테고리를 입력해주세요";
    } 

    if (infos.length == 0) {
        newErrors.infos = "상세 정보를 선택해주세요";
    } else if (infos.length > 3) {
        newErrors.infos = "상세 정보는 최대 3개 선택 가능합니다";
    }

    return {
        isValid: Object.keys(newErrors).length === 0,
        errors: {
            category : newErrors.category || "",
            infos : newErrors.infos || ""
        }
    };
}

export default validate;