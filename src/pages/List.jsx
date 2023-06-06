import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";

const List = () => {
  const location = useLocation();
  const tasks = location.state;
  console.log("propssss data pass check", tasks);
  // const [task, setTask] = useState(tasks);
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log("value ::::::", value);
  return (
    <div className="container-fluid">
      <div
        className="row "
        style={{
          width: "100%",
          float: "right",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className="col" style={{ border: "1px solid blue" }}>
          <Link to="/">
            <button
              type="button"
              className="btn btn-info "
              style={{ float: "right", margin: "10px" }}
            >
              Back
            </button>
          </Link>
        </div>
      </div>
      <div>
        <h3>hello</h3>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="Status Timeline View" />
            <Tab value="two" label="ETA Date Timeline View" />
            <Tab value="three" label="hhh  "></Tab>
          </Tabs>
        </Box>
      </div>

      {value == "one" && (
        <div style={{ marginTop: "20px" }}>
          <table
            style={{
              width: "60%",

              justifyContent: "center",

              textAlign: "center",
              border: "1px solid  green",
            }}
          >
            <tr>
              {" "}
              <th>name</th>
              <th>status</th>
              <th>Eta</th>
            </tr>
            {tasks.map((item) => (
              <tr>
                <td>{item.Title}</td>
                <td>{item.status}</td>
                {/* <td>hhhhhhh</td> */}
              </tr>
            ))}
          </table>
        </div>
      )}
      {value == "two" && (
        <div style={{ marginTop: "20px" }}>
          <table
            style={{
              width: "60%",

              justifyContent: "center",

              textAlign: "center",
              border: "1px solid  green",
            }}
          >
            <tr>
              {" "}
              <th>name</th>
              <th>status</th>
            </tr>
            <tr>
              <td>sanjay</td>
              <td>pendding</td>
            </tr>
          </table>
        </div>
      )}
      {value == "three" && (
        <div>
          <p>three</p>
        </div>
      )}
    </div>
  );
};

export default List;
