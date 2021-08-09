const fetch = require("node-fetch");
const jsdom = require("jsdom");

fetch('https://uk.finance.yahoo.com/').then(function(response) {
    // The API call was successful!
    return response.text();
}).then(function(html) {

    // Convert the HTML string into a document object
    const dom = new jsdom.JSDOM(html);
    const doc = dom.window.document

    // Get the Title
    const data = {};
    const title = doc.querySelector('title');
    console.log(title.textContent);

}).catch(function(err) {
    // There was an error
    console.warn('Something went wrong.', err);
});