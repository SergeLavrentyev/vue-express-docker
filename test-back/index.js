const express = require("express");
const cors = require("cors");
const { success, error } = require("consola");
const { connect } = require("mongoose");
const { routes } = require("./src/routes");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes.forEach((item) => {
  app.use(`/api/v1/${item}`, require(`./src/routes/${item}`))
})

app.listen(PORT, () => {
  success({
    message: `Server is up and running on http://localhost:${PORT}`,
    badge: true,
  });
});

connect(`mongodb://mongodb:27017/citizens`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() =>
    success({
      message: `DB is connected`,
      badge: true,
    })
  )
  .catch((err) => error({ message: `${err}`, badge: true }));
