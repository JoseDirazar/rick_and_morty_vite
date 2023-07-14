const users = require("../utils/Users");

let status = false;

function login(req, res) {
  const { email, password } = req.query;
  const logueando = users.find( usuario => usuario.email === email && usuario.password === password );

  if(logueando) {
    status = true;
    return res.status(200).json({ access: status });
  }
  if(!logueando) {
    status = false;
    return res.status(500).json({ access: status });
  }
}
function getStatus(req, res) {
  return res.status(200).json({ access: status });
}

function logOut(req, res) {
  status = false;
  return res.status(200).json({ access: status });
}
module.exports = {
  login,
  getStatus,
  logOut,
};
