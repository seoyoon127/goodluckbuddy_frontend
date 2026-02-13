const currentYear = new Date().getFullYear();
const years = Array.from(
    { length: currentYear - 2005 + 1 },
    (_, i) => `${1990 + i}`
);

export default years;