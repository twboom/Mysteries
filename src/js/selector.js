paradoxia.selector = function() {
    document.querySelector('h2.header').innerHTML = 'Chapter Selector'
    let options = []
    for (let i = 0; i < paradoxia.chapters.length; i++) {
        const thisOption = paradoxia.chapters[i]
        let option = paradoxia.files.selectorOption;
        console.log(option)
        option.replace('<!--LevelNumber-->', thisOption.number)
        option.replace('<!--LevelTitle-->', thisOption.title)
        options.push(option)
        console.log(option)
    }
    optionString = ''
    for (let i = 0; i < options.length; i++) {
        optionString += options[i]
    }
}