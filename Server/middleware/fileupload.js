import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/resume"); // Specify the destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname.split(" ").join("")}`); // Generate a unique filename
  },
});

export const uploadFile = multer({ storage }).single("resume");
