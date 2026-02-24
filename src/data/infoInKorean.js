const INFO_MAP = {
    Distance: "거리감",
    Awkwardness: "어색함",
    Blunder: "말실수",
    Misunderstanding: "오해",
    Apology: "사과하기",
    Rudeness: "무례함",
    Discomfort: "불편함",
    Hierarchy: "서열",
    Anxiety: "불안함",
    Fear: "두려움",
    Reconciliation: "화해"
};

const infoInKorean = (infoEng) => INFO_MAP[infoEng] || "";

export default infoInKorean;