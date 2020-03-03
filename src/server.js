import app from './app';
import options from './config/documentation';

const expressSwagger = require('express-swagger-generator')(app);

expressSwagger(options);
app.listen(processo.env.PORT || 5000);
