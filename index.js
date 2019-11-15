const express = require('express');
const app = express();

app.use(express.static(__dirname + '/Group06'));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log("server is listening on port ${app.get('port')}");
});

