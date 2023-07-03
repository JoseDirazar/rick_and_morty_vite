const users = require("../utils/Users");
function login(req, res) {
  const { email, password } = req.query;
  const logueando = users.find(
    (usuario) => usuario.email === email && usuario.password === password
  );

  return logueando
    ? res.status(200).json({ access: true })
    : res.status(500).json({ access: false });
}
module.exports = {
    login
};
