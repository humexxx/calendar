import "./App.css"
import BookingCalendar from "./BookingCalendar"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Paper } from "@mui/material";

function App() {
  return (
    <Paper style={{width: 500}}>
      <BookingCalendar />
    </Paper>
  )
}

export default App
