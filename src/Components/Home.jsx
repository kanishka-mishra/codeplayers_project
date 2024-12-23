import React, { useState } from "react";
import { useUserContext } from "./context/usercontext";

function Home() {
  const { name, setName, email, setEmail, phone, setPhone, handleFormSubmit, accid, callid, ticketid, support_user, client_code, module, query_subject, current_status, today_status, report_date, due_date, is_critical, completed_date, licensed_to, formname, notes, querydescription, querysolution, medianame, media, statusdatetime, tags, isknoledgesharing } =
    useUserContext();
  const [showSuccess, setShowSuccess] = useState(false);
  const formId = 11;

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    handleFormSubmit(e, { name, email, phone }, formId);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 10000); // Hide the message after 10 seconds
  };

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-lg-7 text-center text-lg-start">
        </div>
        <div className="col-md-5 mx-auto col-lg-10">
          <h2 className="display-6 fw-bold lh-1 text-white mb-6">
            Enter User Details
          </h2>
          {showSuccess && (
            <div className="alert alert-success mt-5" role="alert">
              Form submitted successfully!
            </div>
          )}
          <form
            className="p-4 p-md-5 border rounded bg-light"
            onSubmit={handleSubmit}
          >
            <div className="d-flex justify-content-end" style={{ marginBottom: '20px' }}>
              <button className="btn btn-primary" type="submit">
                SUBMIT
              </button>
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="User Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="name@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="phoneInput"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="formnameInput"
                placeholder="Form Name"
                value={formname}
                onChange={(e) => setFormname(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="accidInput"
                placeholder="Account ID"
                value={accid}
                onChange={(e) => setAccid(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="callidInput"
                placeholder="Call ID"
                value={callid}
                onChange={(e) => setCallid(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="ticketidInput"
                placeholder="Ticket ID"
                value={ticketid}
                onChange={(e) => setTicketid(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="supportUserInput"
                placeholder="Support User"
                value={support_user}
                onChange={(e) => setSupport_user(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="clientCodeInput"
                placeholder="Client Code"
                value={client_code}
                onChange={(e) => setClient_code(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="moduleInput"
                placeholder="Module"
                value={module}
                onChange={(e) => setModule(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="querySubjectInput"
                placeholder="Query Subject"
                value={query_subject}
                onChange={(e) => setQuery_subject(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="queryDescriptionInput"
                placeholder="Query Description"
                value={querydescription}
                onChange={(e) => setQuerydescription(e.target.value)}
              />
            </div>  
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="querySolutionInput"
                placeholder="Query Solution"
                value={querysolution}
                onChange={(e) => setQuerysolution(e.target.value)}
              />
            </div>  
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="currentStatusInput"
                placeholder="Current Status"
                value={current_status}
                onChange={(e) => setCurrent_status(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="todayStatusInput"
                placeholder="Today's Status"
                value={today_status}
                onChange={(e) => setToday_status(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="reportDateInput"
                placeholder="Report Date (DD-MM-YYYY)"
                value={report_date}
                onChange={(e) => setReport_date(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="dueDateInput"
                placeholder="Due Date (DD-MM-YYYY)"
                value={due_date}
                onChange={(e) => setDue_date(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="isCriticalInput"
                placeholder="Is Critical (1/0)"
                value={is_critical}
                onChange={(e) => setIs_critical(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="completedDateInput"
                placeholder="Completed Date (DD-MM-YYYY)"
                value={completed_date}
                onChange={(e) => setCompleted_date(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="licensedToInput"
                placeholder="Licensed To"
                value={licensed_to}
                onChange={(e) => setLicensed_to(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="mediaNameInput"
                placeholder="Media Name"
                value={medianame}
                onChange={(e) => setMedianame(e.target.value)}
              />
            </div> 
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="mediaInput"
                placeholder="Media"
                value={media}
                onChange={(e) => setMedia(e.target.value)}
              />
            </div>   
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="statusDateTimeInput"
                placeholder="Status Date Time (DD-MM-YYYY)"
                value={statusdatetime}
                onChange={(e) => setStatusdatetime(e.target.value)}
                required
              />
            </div>  
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="tagsInput"
                placeholder="Tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                required
              />
            </div>  
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="notesInput"
                placeholder="Notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>           
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="isKnowledgeSharingInput"
                placeholder="Is Knowledge Sharing (1/0)"
                value={isknoledgesharing}
                onChange={(e) => setIsknoledgesharing(e.target.value)}
                required
              />
            </div>
            <button className="btn btn-primary w-100" type="submit">
              SUBMIT
            </button>
          </form>
          {showSuccess && (
            <div className="alert alert-success mt-5" role="alert">
              Form submitted successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;