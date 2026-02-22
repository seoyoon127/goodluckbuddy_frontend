const categoryInKorean = (categoryKor) => {
    if (categoryKor == "FAMILY") {
        return "가족";
    } else if (categoryKor == "FRIEND") {
        return "친구";
    } else if (categoryKor == "SENIOR_JUNIOR") {
        return "선후배";
    } else if (categoryKor == "SUPERIOR") {
        return "상사";
    } else if (categoryKor == "LOVER") {
        return "연인";
    } else {
        return "INVALID";
    }
}

export default categoryInKorean;