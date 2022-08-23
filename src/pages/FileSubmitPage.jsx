import axios from "axios";
import { useState } from "react";
// import { useForm } from "../hooks/useForm";

// axios.defaults.headers.common.Authorization =
//   "Bearer ";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzAzODc3OGZlMDdjZDBjZDI1MzBmZDEiLCJzaWQiOiI2MzAzODc3OGZlMDdjZDBjZDI1MzBmZDIiLCJpYXQiOjE2NjExNzU2NzJ9.LE8Whg0Zt6mC8mSVOM1mOY3DDA7FhB9aSR2I5P4o7_4";
axios.defaults.baseURL = "https://kidslike-v1-backend.goit.global/";

const FileSubmitPage = () => {
  //   const [files, setFiles] = useState(null);
  const [form, setForm] = useState({ title: "", reward: "", file: null });

  const { title, reward } = form;

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("reward", form.reward);
    formData.append("file", form.file);

    // console.log("formData :>> ", formData);

    const response = await axios.post("/task", formData, {
      headers: {
        // ["Content-Type"]: "multipart/form-data", // -> form
        ContentType: "multipart/form-data", // -> formData
        Authorization: "Bearer " + TOKEN,
      },
    });
    console.log(response.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input onChange={handleChange} type="text" name="title" value={title} />
      </label>
      <label>
        Reward
        <input
          onChange={handleChange}
          type="text"
          name="reward"
          value={reward}
        />
      </label>
      <label>
        File
        <input
          //   onChange={(e) => {
          //     console.dir(e.target);
          //     const { files } = e.target;
          //     setFiles(files[0]);
          //   }}
          onChange={handleChange}
          type="file"
          name="file"
        />
      </label>
      <button type="submit">Ok</button>
    </form>
  );
};

export default FileSubmitPage;
