const categoryInKorean = (categoryEng) => {
    if (categoryEng == "FAMILY") {
        return "가족";
    } else if (categoryEng == "FRIEND") {
        return "친구";
    } else if (categoryEng == "SENIOR_JUNIOR") {
        return "선후배";
    } else if (categoryEng == "SUPERIOR") {
        return "상사";
    } else if (categoryEng == "LOVER") {
        return "연인";
    } else {
        return "전체";
    }
}

export default categoryInKorean;