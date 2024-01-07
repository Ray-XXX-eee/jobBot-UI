const CreatePost = () => {
  return (
    <div className="createPostContainer">
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Job Title
          </label>
          <textarea name="jobTitle" type="title" className="form-control" id="title" aria-describedby="titleHelp" />
          <div id="titleHelp" className="form-text">
            Provide a Job Titl, eg: SDET, Java Developer etc
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="orgName" className="form-label">
            Organization Name
          </label>
          <textarea name="orgName" type="orgName" className="form-control" id="orgName" aria-describedby="orgNameHelp" style={{ width: "30%" }} />
          <div id="orgNameHelp" className="form-text">
            Provide a Job Titl, eg: SDET, Java Developer etc
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="orgName" className="form-label">
            Experience
          </label>
          <textarea name="orgName" type="orgName" className="form-control" id="orgName" aria-describedby="orgNameHelp" style={{ width: "30%" }} />
          <div id="orgNameHelp" className="form-text">
            Provide a Job Titl, eg: SDET, Java Developer etc
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="orgName" className="form-label">
            Brief Description :
          </label>
          <textarea name="orgName" type="orgName" className="form-control" id="orgName" aria-describedby="orgNameHelp" />
          <div id="orgNameHelp" className="form-text">
            Provide a Job Titl, eg: SDET, Java Developer etc
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="orgName" className="form-label">
            Tags
          </label>
          <textarea name="orgName" type="orgName" className="form-control" id="orgName" aria-describedby="orgNameHelp" />
          <div id="orgNameHelp" className="form-text">
            Provide a Job Titl, eg: SDET, Java Developer etc
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="orgName" className="form-label">
            closing date
          </label>
          <textarea name="orgName" type="orgName" className="form-control" id="orgName" aria-describedby="orgNameHelp" style={{ width: "30%" }} />
          <div id="orgNameHelp" className="form-text">
            Provide a Job Titl, eg: SDET, Java Developer etc
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="orgName" className="form-label">
            Office type : Hybrid Remorte
          </label>
          <textarea name="orgName" type="orgName" className="form-control" id="orgName" aria-describedby="orgNameHelp" style={{ width: "30%" }} />
          <div id="orgNameHelp" className="form-text">
            Provide a Job Titl, eg: SDET, Java Developer etc
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="orgName" className="form-label">
            Address : post code
          </label>
          <textarea name="orgName" type="orgName" className="form-control" id="orgName" aria-describedby="orgNameHelp" style={{ width: "30%" }} />
          <div id="orgNameHelp" className="form-text">
            Provide a Job Titl, eg: SDET, Java Developer etc
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="orgName" className="form-label">
            Contact
          </label>
          <textarea name="orgName" type="orgName" className="form-control" id="orgName" aria-describedby="orgNameHelp" style={{ width: "30%" }} />
          <div id="orgNameHelp" className="form-text">
            Provide a Job Titl, eg: SDET, Java Developer etc
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="orgName" className="form-label">
            Email
          </label>
          <textarea name="orgName" type="orgName" className="form-control" id="orgName" aria-describedby="orgNameHelp" style={{ width: "30%" }} />
          <div id="orgNameHelp" className="form-text">
            Provide a Job Titl, eg: SDET, Java Developer etc
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default CreatePost;
