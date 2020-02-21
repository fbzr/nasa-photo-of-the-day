const convertDateToString = date => {
    return (
        `${String(date.getMonth() + 1).padStart(2, '0')}/
        ${String(date.getDate()).padStart(2,'0')}/
        ${date.getFullYear()}`
    );
}

const convertToUniversalDate = date => {
    return (
        `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2,'0')}`
    );
}

const convertFromUniversalDate = dateString => {
    return new Date(`${dateString}T00:00:00`);
}

export default {
    convertDateToString,
    convertToUniversalDate,
    convertFromUniversalDate
}