import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Swal from 'sweetalert2'


const Order = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const confirmBooking= ()=>{
    Swal.fire({
  title: "Confirm Booking?",
  text: "You won't be able to revert this!",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, confirm!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Order placed!",
      text: "You're order is being prepared",
      icon: "success"
    });
  }
});
  }

  return (
    <div>
      <section id="order" style={{ backgroundColor: "#f2aa4cff" }}>
        <div className="d-flex justify-content-center">
          {/* <div className="col-3"></div> */}

          {/* <div className="col-6 mt-5 mb-5"> */}
          <div
            className="card rounded-4 bg-light mt-5 mb-5"
            style={{ width: "50vh" }}
          >
            <h3 className="text-center p-3 fw-bold" style={{fontFamily: "Baumans, system-ui"}}>Order now</h3>
            <TextField
              className="mt-2 mx-3 mb-3"
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <TextField
              className="mx-3 mb-3"
              id="outlined-basic"
              label="Table Number"
              variant="outlined"
            />

            <Box >
              <FormControl className="mx-3 mb-3" style={{width:'45.7vh'}}>
                <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Quantity"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <button type="button" className="btn btn-outline-dark mx-3 py-3 mb-3" onClick={confirmBooking}>
              Place Order
            </button>
          </div>
          {/* </div> */}

          {/* <div className="col-3"></div> */}
        </div>
      </section>
    </div>
  );
};

export default Order;
