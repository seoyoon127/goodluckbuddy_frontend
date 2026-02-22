const categoryInEnglish = (categoryKor) => {
    if (categoryKor == "가족") {
        return "FAMILY";
    } else if (categoryKor == "친구") {
        return "FRIEND";
    } else if (categoryKor == "선후배") {
        return "SENIOR_JUNIOR";
    } else if (categoryKor == "상사") {
        return "SUPERIOR";
    } else if (categoryKor == "연인") {
        return "LOVER";
    } else {
        return "INVALID";
    }
}

export default categoryInEnglish;