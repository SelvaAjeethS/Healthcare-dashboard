import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSun, FaMoon } from "react-icons/fa";
import './Dashboard.css';

const Dashboard = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        file: null,
    });

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileUpload = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.age && formData.file) {
            console.log(formData);
            toast.success("Form submitted successfully!");
        } else {
            toast.error("Please fill out all fields before submitting.");
        }
    };

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        if (!isDarkTheme) {
            document.body.classList.add("dark-theme");
            document.body.classList.remove("light-theme");
        } else {
            document.body.classList.add("light-theme");
            document.body.classList.remove("dark-theme");
        }
    };

    return (
        <div className="container mt-5 p-4" style={{ backgroundColor: isDarkTheme ? "#2c2c2c" : "#f4f8fb", borderRadius: "8px" }}>
            <div className="d-flex justify-content-between">
                <h2 className="text-center text-primary mb-4">Healthcare Dashboard</h2>
                <button onClick={toggleTheme} className="btn btn-primary">
                    {isDarkTheme ? <FaSun /> : <FaMoon />}
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ border: "2px solid #007bff", borderRadius: "5px" }}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <select
                        className="form-select"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        style={{ border: "2px solid #007bff", borderRadius: "5px" }}
                    >
                        <option value="">Select Age</option>
                        {Array.from({ length: 99 }, (_, i) => i + 1).map((age) => (
                            <option key={age} value={age}>
                                {age}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">File Upload</label>
                    <input
                        type="file"
                        className="form-control"
                        onChange={handleFileUpload}
                        style={{ border: "2px solid #007bff", borderRadius: "5px" }}
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100 py-2 mt-2" style={{ borderRadius: "5px" }}>
                    Submit
                </button>
            </form>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Dashboard;