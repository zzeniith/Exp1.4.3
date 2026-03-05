import express from "express";
import bookingRoutes from "./modules/booking/booking.route.js"

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Booking API is running 🚀");
});

app.use('/api', bookingRoutes);

export default app;
