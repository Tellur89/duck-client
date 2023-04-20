const capitalize = (word) => {
    let str = word.toLowerCase();
    let capitalizedWord = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalizedWord
}

module.exports = {capitalize}
