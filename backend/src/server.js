const express = require("express");
const AppError = require("./utils/appError");
const routes = require("./routes");
const uploadConfig = require('./configs/upload')
const cors = require('cors')

const app = express();
app.use(cors())

app.use(express.json());
const port = 3333;


app.use('/files', express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes);

app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }
  console.log(error);
  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
