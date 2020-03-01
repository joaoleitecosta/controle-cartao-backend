import app from './app';
import options from './config/documentation';

const expressSwagger = require('express-swagger-generator')(app);

expressSwagger(options);
app.listen(3001);
