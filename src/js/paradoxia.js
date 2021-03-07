let paradoxia = [];

paradoxia.proto = [
    'selector.html',
    'selectorOption.html'
]

paradoxia.files = {}

paradoxia.init = function() {
    paradoxia.screen = document.querySelector('main')
    paradoxia.chapter = parseInt(mainframe.parameters('chapter'));
    if (paradoxia.chapter === null) { paradoxia.screen = 'selector' };

    for (let i = 0; i < paradoxia.proto.length; i++) {
        const folder = 'src/assets/protofiles/'
        const file = paradoxia.proto[i];
        fetch(folder + file)
            .then(response => response.text())
            .then(data => paradoxia.files[file] = data)
    }
}

fetch('chapters/chapters.json')
    .then(response => response.json())
    .then(data => paradoxia.chapters = data)