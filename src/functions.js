const convertDateToString = (date) => {
    return (
        `${String(date.getMonth() + 1).padStart(2, '0')}/
        ${String(date.getDate()).padStart(2,'0')}/
        ${date.getFullYear()}`
    );
}

const convertToUniversalDate = (date) => {
    return (
        `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2,'0')}`
    );
}

export default {
    convertDateToString,
    convertToUniversalDate
}