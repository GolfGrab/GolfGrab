const FormContact = () => {
  return (
    <>
      <h2 className=" pt-5 text-center text-2xl">
        WRITE ME YOUR IDEAS
        <br /> or just say hi 👋
      </h2>
      <form className="flex  flex-col items-center justify-center gap-4 pt-5 ">
        <div className="form-control ">
          <label className="input-group">
            <span>Name</span>
            <input
              type="text"
              placeholder="info@site.com"
              className="input-bordered input "
            />
          </label>
          <label className="label">asdasd</label>
        </div>
        <div className="form-control ">
          <label className="input-group">
            <span>Email</span>
            <input
              type="text"
              placeholder="info@site.com"
              className="input-bordered input "
            />
          </label>
          <label className="label">asdasd</label>
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Your message</span>
          </label>
          <textarea
            className="textarea-bordered textarea h-32"
            placeholder="Bio"
          ></textarea>
          <label className="label">asdasd</label>
          <button className="btn-primary btn w-full">Send Message</button>
        </div>
      </form>
    </>
  );
};

export default FormContact;
