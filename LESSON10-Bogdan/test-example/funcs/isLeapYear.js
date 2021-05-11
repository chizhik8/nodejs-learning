const isLeapYear = (year) => {
    if(year === undefined){
        throw new Error("Аргумент не передан")
    }
    const date = new Date(year, 2, 0);
    const dayInFebruary = date.getDate();
    return (dayInFebruary === 29);
};

module.exports = isLeapYear;