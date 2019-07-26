var express = require("express")
var app = express()
var request = require("request")

app.listen(3000, ()=> {
    console.log("running on port 3000")
})

app.get("/", (req, res) => {
    let searchString = req.originalUrl
    searchString = searchString.slice(1,searchString.length)
    console.log(searchString)
    const url = "https://itunes.apple.com/search" + searchString
    let options = {
        url: url,
        json: true
    }
    request(options, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            res.json(processResponse(body.results))
        } else {
            res.json(error)
        }
    })
})

function processResponse(inputArray) {
    var resultDict = {}
    inputArray.forEach( (result) => {
        var item = {
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