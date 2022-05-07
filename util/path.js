const path = require('path');

// gives us the path to the file that is responsible for the fact that our app is running
module.exports = path.dirname(require.main.filename);
