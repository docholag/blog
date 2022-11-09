const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./config/db");

//connection db
db.connect();

app.use(express.static(path.join(__dirname, "public")));

//middlerware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//http logger
app.use(morgan("combined"));

//templates engine
app.engine(
  "hbs",
  handlebars({
    //đổi đuôi file template
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//routes innit (khởi tạo tuyến đường)
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
