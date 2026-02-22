const genderInKorean = (gender) => {
    if (gender == "MALE") {
        return "남성";
    } else if (gender == "FEMALE") {
        return "여성";
    } else {
        return "선택안함";
    }
}

export default genderInKorean;