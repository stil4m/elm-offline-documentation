var request = require('sync-request');
var _ = require('lodash');
const fs = require('fs-extra');

function fetchDoc(name) {
    console.log('Fetching doc for', name, "...")
    var response = request('GET', 'http://package.elm-lang.org/packages/' + name + '/documentation.json');
    var body = JSON.parse(response.body);
    fs.mkdirsSync(process.cwd() + "/docs/" + name);
    fs.writeFileSync(process.cwd() + "/docs/" + name + "/documentation.json", JSON.stringify(body));
}
(function doStuff() {
    console.log("Fetching docs...");
    var response = request('GET', 'http://package.elm-lang.org/all-packages');
    var body = JSON.parse(response.body);
    const targets = _.flatMap(body, item => {
        return item.versions.map(v => item.name + "/" + v);
    }).filter(name => {
        return !fs.existsSync(process.cwd() + "/docs/" + name);
    });

    targets.forEach(x => {
        fetchDoc(x);
    });
})()
