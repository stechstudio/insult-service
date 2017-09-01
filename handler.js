'use strict';

module.exports.insult = (event, context, callback) => {
  var insults = require('./insults.json');
  var source = randomEntry(insults);
  var data = randomEntry(source['quotes']);

  var target = event.queryStringParameters.text.trim().split(' ')[0];

  if (target.startsWith('@')) {
    var payload =  personalQuote(target, data);
  } else {
    var payload =  formalQuote(source, data);
  }

  const response = {
    statusCode: 200,
    body: payload
  };

  callback(null, response);
};

var personalQuote = function (target, data) {
  if (target == '@dp') target = '@bubba';
  return JSON.stringify({
    response_type: "in_channel",
    text: target + " _" + data['quote'] + "_"});
}

var formalQuote = function (source, data) {
  return JSON.stringify({
    "response_type": "in_channel",
    "attachments": [
        {
            "fallback": data['quote'],
            "color": "#764FA5",
            "footer": source['work'] + ' Page: ' + data['page'],
            "author_name": "Martin Luther",
            "author_link": "https://www.flickr.com/photos/elcaarchives/sets/72157605193961728/",
            "author_icon": "https://forallsaints.files.wordpress.com/2011/02/martin-luther.jpg?w=320&h=468",
            "title": "In The Words of the Great Reformer",
            "title_link": "http://www.luther.de/en/index.html",
            "text": data['quote'],
            "thumb_url": "http://www.johnpratt.com/items/docs/lds/meridian/2010/images/luther95.jpg",
        }
    ]
  });
}

var randomEntry = function (obj){
  var keys = Object.keys(obj);
  if (keys.length === 1){
      return obj[0];
  }
  var select = keys.length * Math.random() << 0;
  return obj[keys[select]];
}
