var express = require("express")
var app = express()
var request = require("request")
var cors = require('cors')

app.use(cors())

app.listen(8675, ()=> {
    console.log("running on port 8675")
})

app.get("/", (req, res) => {
    const inputURL = req.originalUrl;
    const searchString = inputURL.slice(1,inputURL.length)
    const url = "https://itunes.apple.com/search" + searchString
    console.log("calling: " + url)
    const options = {
        url: url,
        json: true
    }
    request(options, function(error, response, body) {
        if(!error && response.statusCode === 200) {
            res.json(processResponse(body.results))
        } else {
            res.json(error)
        }
    })
})

function processResponse(inputArray) {
    let resultDict = {}
    inputArray.forEach( (result) => {
        let item = {
            "id" : result.trackId,
            "name" : result.trackName,
            "artwork" : result.artworkUrl100,
            "genre" : result.primaryGenreName,
            "url" : result.trackViewUrl,
        }
        if (resultDict[result.kind]) {
            resultDict[result.kind].push(item)
        } else {
            resultDict[result.kind] = [item]
        }
    })
    return resultDict
}