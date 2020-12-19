import Pen from "../model/Pen";

const homeController = (req, res) => {
  res.render("screens/home");
};
const penController = async (req, res) => {
  const penList = await Pen.find({}, {});

  res.render("screens/pen", { penList });
};

const globalController = {
  homeController,
  penController,
};

export default globalController;
