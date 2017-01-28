var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/destination', function(req, res, next) {
  res.json(




      {

          "title": "Hello From SPF",
          "head": "<link href=\"stylesheets/style2.css\" rel=\"stylesheet\">",
          "body": {
              "testspf": "<h1>Hello From SPF</h1>"
          },

          "attr": {
              "demolink": {
                  "href": "/"

              }

          },
          "foot": "<!-- Scripts -->"
      }


  );
});

module.exports = router;
