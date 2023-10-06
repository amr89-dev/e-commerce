const Token = require("../db/models/token.model");

class TokenService {
  async getToken(id) {
    const token = Token.findByPk(id);
    return token;
  }
  async createToken(token, id) {
    const newToken = await Token.create(token);
  }
}

module.exports = TokenService;
