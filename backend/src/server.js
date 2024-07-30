const express = require("express");
const AppError = require("./utils/appError");
const routes = require("./routes");

const app = express();
app.use(express.json());
const port = 3333;

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
