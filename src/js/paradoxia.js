let paradoxia = [];

paradoxia.proto = [
    'selector.html',
    'selectorOption.html'
]

paradoxia.init = function() {
    paradoxia.screen = document.querySelector('main')
    paradoxia.chapter = parseInt(mainframe.parameters('chapter'));
    if (paradoxia.chapter === null) { paradoxia.screen = 'selector' };
}

paradoxia.fetch = function() {
    paradoxia.files = {}
    for (let i = 0; i < paradoxia.proto.length; i++) {
        const folder = 'src/assets/protofiles/'
        const file = paradoxia.proto[i];
        const fileName = file.split('.')[0]
        fetch(folder + file)
            .then(response => response.text())
            .then(data => paradoxia.files[fileName] = data)
    }
    fetch('chapters/chapters.json')
        .then(response => response.json())
        .then(data => paradoxia.chapters = data);

    fetch('src/assets/consoleArt.txt')
        .then(response => response.text())
        .then(data => console.log(data))
}

paradoxia.fetch()

paradoxia.test = function() {
    paradoxia.selector()
}