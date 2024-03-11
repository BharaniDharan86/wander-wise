import jwt from "jsonwebtoken";

export default function sentJwtToken(id) {
  return jwt.sign({ id }, process.env.JWTSECRET, {
    expiresIn: "2 days",
  });
}
