import UserModel from "../../../../DB/model/User.model.js";

export const getAuthModule = (req, res, next) => {
  return res.json({ message: "Auth module" });
};
export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await UserModel.create({ name, email, password: password });
    return res.json({ message: "User is added Successfully", user });
  } catch (err) {
    if (err.original?.errno == 1062) {
      return res.json({ message: "Email Exist" });
    }

    return res.json({ message: "Catch Error", err });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const checkUser = await UserModel.findAll({
      attributes: ["name", "id","password"],
      where: {
        email,
      },
    });
    if (!checkUser.length) {
      return res.json({ message: "Email Not Found" });
    }
    if (checkUser[0].password !== password) {
      return res.json({ message: "Invalid Password Or Email" });
    }
    return checkUser.length && res.json({ message: "Done", checkUser });
  } catch (err) {
    return res.json({ message: "Catch Error", err });
  }
};
