import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const otpSchema = new mongoose.Schema({
  otp: {
    type: Number,
  },
  username: String,
  email: {
    type: "String",
    unique: true,
  },
  password: String,
});

otpSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const Otp = mongoose.model("Otp", otpSchema);

async function cleanOtps() {
  await Otp.deleteMany({});
}

setInterval(() => {
  cleanOtps();
}, 3 * 60 * 1000);

export default Otp;
