require("dotenv").config();
const mongoose = require("mongoose");
const Admin = require("./models/Admin");

async function createAdmin() {
  await mongoose.connect(process.env.MONGO_URI);

  // Delete existing admin to re-create with correct hashed password
  await Admin.deleteOne({ email: "admin@basmat.com" });

  await Admin.create({
    name: "Admin Basmat",
    phone: "01000000000",
    email: "admin@tbarak.com",
    password: "Mohammed1234",
  });

  console.log("✅ Admin created successfully");
  process.exit(0);
}

createAdmin().catch((e) => { console.error(e); process.exit(1); });
