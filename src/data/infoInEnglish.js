const INFO_MAP = {
    거리감: "Distance",
    어색함: "Awkwardness",
    말실수: "Blunder",
    오해: "Misunderstanding",
    사과하기: "Apology",
    무례함: "Rudeness",
    불편함: "Discomfort",
    서열: "Hierarchy",
    불안함: "Anxiety",
    두려움: "Fear",
    화해: "Reconciliation"
};

const infoInEnglish = (infoKor) => INFO_MAP[infoKor] || "";

export default infoInEnglish;