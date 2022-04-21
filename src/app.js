import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";

// config express
const app = express();

// config express-handlebars
const exphbs = create({
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
  defaultLayout: "main",
  extname: ".hbs",
});
app.set("view engine", ".hbs");
app.engine(".hbs", exphbs.engine);
app.set("views", path.join(__dirname, "views"));

// Routes
app.use(indexRoutes);

export default app;
