import React, { useState } from "react";
// import Model from "../component/model";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/home.css";

const Home = () => {
  const navigate = useNavigate();
  const task = [
    {
      id: 1,
      Title: "Home",
      status: "Pending",
    },
    {
      id: 2,
      Title: "Abc",
      status: "InProgress",
    },
    {
      id: 3,
      Title: "Xyz",
      status: "InReview",
    },
    {
      id: 4,
      Title: "Mnnn",
      status: "Pending",
    },
    {
      id: 5,
      Title: "Hkkkk",
      status: "InProgress",
    },
    {
      id: 6,
      Title: "Jjjj",
      status: "Completed",
    },
  ];
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState(task);
  // console.log("tassss", tasks);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [dragData, setDragData] = useState();
  // console.log("first task", tasks);
  // console.log("status", tasks);

  const onDragStart = (evt) => {
    console.log("===on drage start", evt);
    // console.log("===on drage start", taskData);
    console.log("on drag start cureent id", evt.currentTarget.id);
    console.log("on drag startfffffff cureent id", evt.currentTarget.id);
    // setDragData(taskData);
    let element = evt.currentTarget;
    element.classList.add("dragged");
    evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
    evt.dataTransfer.effectAllowed = "move";
  };
  const onDragEnd = (evt) => {
    // console.log("in on drag end", evt);
    evt.currentTarget.classList.remove("dragged");
  };

  const onDragLeave = (evt) => {
    // console.log("in onDragLeave", evt);
    let currentTarget = evt.currentTarget;
    let newTarget = evt.relatedTarget;
    if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
      return;
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.remove("dragged-over");
  };

  const onDragEnter = (evt) => {
    // console.log("in on drage ennter", evt);
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.add("dragged-over");
    evt.dataTransfer.dropEffect = "move";
  };

  const onDragOver = (evt) => {
    // console.log("in drag over", evt);
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
  };

  //drop function

  const onDrop = (evt, value, status) => {
    evt.preventDefault();
    // console.log("drop data view", evt);
    // console.log("drop data view", value);
    // console.log("drop data view", status);
    // console.log("evt.dataTransfer", evt.dataTransfer);
    evt.currentTarget.classList.remove("dragged-over");
    const data = evt.dataTransfer.getData("text/plain");
    const tasks2 = tasks;
    // console.log("taskssssss add ", tasks2);
    // console.log("data printnew", data, status);
    console.log("data data ", data);
    const updated = tasks2.map((item) => {
      // console.log("item drop", item);
      // console.log("item id", item.id);
      console.log("data string", data.toString());
      console.log("data item id string", item.id.toString());
      if (item.id.toString() === data.toString()) {
        item.status = status;
      }
      return item;
    });
    // this.setState({ tasks: updated });
    setTasks(updated);
    console.log("update data var", updated);
  };
  console.log("new tasks update", tasks);

  // api drop function
  // const onDrop = (evt, value, status) => {
  //   evt.preventDefault();
  //   console.log("evt", evt)
  //   console.log("evt.dataTransfer", evt.dataTransfer)
  //   // console.log("evt.dataTransfer.getData", evt.dataTransfer.getData())
  //   evt.currentTarget.classList.remove("dragged-over");
  //   let data = evt.dataTransfer.getData("text/plain");
  //   console.log("")
  //   // let tasks = tasks;
  //   console.log("data", data);
  //   console.log("status", status);
  //   console.log("tasks", tasks);
  //   let updated = tasks.map((task) => {
  //     console.log("teytrse", task._id.$oid, data.toString())
  //     if (task._id.$oid === data.toString()) {
  //       console.log("in if condition", dragData)
  //       let payload = {
  //         title: dragData.title,
  //         description: dragData.description,
  //         ETA: dragData.ETA,
  //         current_status: status,
  //         timestamp: new Date()
  //       }
  //       axios.patch(" http://192.168.6.82:57557/update_task_status", payload).then(response => {
  //         setTask(response?.data?.data)
  //       }).catch(err => {
  //         console.log("error in fetching task", err)
  //       });
  //       task.current_status = status;
  //     }
  //     return task;
  //   });
  //   console.log("updated", updated);
  // };
  /////////

  const pending = tasks.filter((item) => item.status === "Pending");
  const inReview = tasks.filter((item) => item.status === "InReview");
  const inProgress = tasks.filter((item) => item.status === "InProgress");
  const completed = tasks.filter((item) => item.status === "Completed");

  console.log("pending tasks", pending);
  const list = () => {
    // navigate("/List");
    navigate("/List", { state: tasks });
  };
  return (
    <div className="container-fuild">
      <div className=" bg-secondary" style={{ height: 60 }}>
        {/* <Link to="/List"> */}
        <button
          type="submit"
          className="btn btn-info "
          style={{ float: "right", margin: "10px" }}
          onClick={list}
        >
          ADIT TRIAL
        </button>
        {/* </Link> */}
        <button
          type="button"
          className="btn btn-info"
          style={{ float: "right", margin: "10px" }}
          onClick={handleShow}
        >
          CREATE NEW
        </button>
      </div>
      <div className="row border  ">
        <div
          className="col bg-light m-2"
          onDragLeave={(e) => onDragLeave(e)}
          onDragEnter={(e) => onDragEnter(e)}
          onDragEnd={(e) => onDragEnd(e)}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, false, "Pending")}
        >
          <h4>PENDING</h4>
          {pending?.map((item) => (
            <div
              className="card"
              key={item.name}
              id={item.id}
              draggable
              // onDragStart={(e) => this.onDragStart(e)}
              // onDragEnd={(e) => this.onDragEnd(e)}
              onDragStart={(e) => onDragStart(e, item)}
              onDragEnd={(e) => onDragEnd(e)}
            >
              <div
                className="row"
                style={{
                  width: "100%",
                  height: "40px",
                  marginLeft: "10px",
                }}
              >
                <div className="col-8" style={{}}>
                  <p style={{}}>Title::{item.Title}</p>
                  <p style={{}}>id::{item.id}</p>
                </div>
                <div className="col-4" style={{}}>
                  <p style={{}}>{item.status}</p>
                </div>
              </div>

              <div
                className="row"
                style={{
                  width: "100%",
                  height: "40px",
                  marginLeft: "10px",
                }}
              >
                {/* <div className="col-8">
                  <p>discription</p>
                </div>
                <div className="col-4">
                  <p>date</p>
                </div> */}
              </div>
            </div>
          ))}
        </div>
        <div
          className="col bg-light m-2"
          onDragLeave={(e) => onDragLeave(e)}
          onDragEnter={(e) => onDragEnter(e)}
          onDragEnd={(e) => onDragEnd(e)}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, false, "InReview")}
        >
          <h4>IN REVIEW</h4>
          {inReview?.map((item) => (
            <div
              className="card"
              key={item.name}
              id={item.id}
              draggable
              // onDragStart={(e) => this.onDragStart(e)}
              // onDragEnd={(e) => this.onDragEnd(e)}
              onDragStart={(e) => onDragStart(e, item)}
              onDragEnd={(e) => onDragEnd(e)}
            >
              <div
                className="row"
                style={{
                  width: "100%",
                  height: "40px",
                  marginLeft: "10px",
                }}
              >
                <div className="col-8" style={{}}>
                  <p style={{}}>Title::{item.Title}</p>
                  <p style={{}}>id::{item.id}</p>
                </div>
                <div className="col-4" style={{}}>
                  <p style={{}}>{item.status}</p>
                </div>
              </div>

              <div
                className="row"
                style={{
                  width: "100%",
                  height: "40px",
                  marginLeft: "10px",
                }}
              >
                {/* <div className="col-8">
                  <p>discription</p>
                </div>
                <div className="col-4">
                  <p>date</p>
                </div> */}
              </div>
            </div>
          ))}
        </div>
        <div
          className="col bg-light m-2"
          onDragLeave={(e) => onDragLeave(e)}
          onDragEnter={(e) => onDragEnter(e)}
          onDragEnd={(e) => onDragEnd(e)}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, true, "InProgress")}
        >
          <h4>IN PROGRESS</h4>
          {inProgress?.map((item) => (
            <div
              className="card"
              key={item.name}
              id={item.id}
              draggable
              // onDragStart={(e) => this.onDragStart(e)}
              // onDragEnd={(e) => this.onDragEnd(e)}
              onDragStart={(e) => onDragStart(e, item)}
              onDragEnd={(e) => onDragEnd(e)}
            >
              <div
                className="row"
                style={{
                  width: "100%",
                  height: "40px",
                  marginLeft: "10px",
                }}
              >
                <div className="col-8" style={{}}>
                  <p style={{}}>Title::{item.Title}</p>
                  <p style={{}}>id::{item.id}</p>
                </div>
                <div className="col-4" style={{}}>
                  <p style={{}}>{item.status}</p>
                </div>
              </div>

              <div
                className="row"
                style={{
                  width: "100%",
                  height: "40px",
                  marginLeft: "10px",
                }}
              >
                {/* <div className="col-8">
                  <p>discription</p>
                </div>
                <div className="col-4">
                  <p>date</p>
                </div> */}
              </div>
            </div>
          ))}
        </div>
        <div
          className="col bg-light m-2"
          onDragLeave={(e) => onDragLeave(e)}
          onDragEnter={(e) => onDragEnter(e)}
          onDragEnd={(e) => onDragEnd(e)}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, true, "Completed")}
        >
          <h4>COMPLETED</h4>
          {completed?.map((item) => (
            <div
              className="card"
              key={item.name}
              id={item.id}
              draggable
              // onDragStart={(e) => this.onDragStart(e)}
              // onDragEnd={(e) => this.onDragEnd(e)}
              onDragStart={(e) => onDragStart(e, item)}
              onDragEnd={(e) => onDragEnd(e)}
            >
              <div
                className="row"
                style={{
                  width: "100%",
                  height: "40px",
                  marginLeft: "10px",
                }}
              >
                <div className="col-8" style={{}}>
                  <p style={{}}>Title::{item.Title}</p>
                  <p style={{}}>id::{item.id}</p>
                </div>
                <div className="col-4" style={{}}>
                  <p style={{}}>{item.status}</p>
                </div>
              </div>

              <div
                className="row"
                style={{
                  width: "100%",
                  height: "40px",
                  marginLeft: "10px",
                }}
              >
                {/* <div className="col-8">
                  <p>discription</p>
                </div>
                <div className="col-4">
                  <p>date</p>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ManagementModal</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ justifyContent: "center" }}>
            <div>
              <input
                type="text"
                placeholder="Title"
                style={{ height: "60PX", margin: "5px" }}
              />
              <input
                type="text"
                placeholder="Assign employee"
                style={{ height: "60PX" }}
              />
            </div>
            <div className="row " style={{ margin: "5px" }}>
              <div style={{ width: "50%" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker label="Basic date picker" />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <input
                type="text"
                placeholder="status"
                style={{ height: "60PX", margin: "5px" }}
              />
            </div>
            <textarea
              type="text"
              placeholder="some w....ssss"
              style={{ height: "60PX", width: "100%", margin: "10" }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
