function introduction(name) {
    return `Hi, my name is ${name}.`;;
}

console.log(introduction("Shokuninja"));

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguage("Samip", "React"));

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguageOptional(Gracie));
console.log(introductionWithLanguageOptional(Gracie, Python));