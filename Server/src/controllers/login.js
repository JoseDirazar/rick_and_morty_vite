const users = require("../utils/Users");

let status = false
function login(req, res) {
  const { email, password } = req.query;
  const logueando = users.find(
    (usuario) => usuario.email === email && usuario.password === password
  );

  return logueando
    ? res.status(200).json({ access: !status })
    : res.status(500).json({ access: status });
}
module.exports = {
    login
};
