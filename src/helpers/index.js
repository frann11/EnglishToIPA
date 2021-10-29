const removeWhiteSpaces = function(words){
    return (words.replace(/\s+/g, " ").trim())
}

module.exports = {removeWhiteSpaces}