import React, { useState } from "react";
import { config } from "../config";
import "./styles/Admin.css";
import {
  FiSettings,
  FiUser,
  FiBriefcase,
  FiFolder,
  FiCode,
  FiMail,
  FiMenu,
  FiX,
  FiPlus,
  FiSave,
} from "react-icons/fi";

type Section = "General" | "About" | "Experiences" | "Projects" | "Skills" | "Contact";

const Admin = () => {
  const [activeSection, setActiveSection] = useState<Section>("General");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Deep clone initial config
  const [formData, setFormData] = useState(() => JSON.parse(JSON.stringify(config)));

  const handleSidebarToggle = () => setIsSidebarOpen(!isSidebarOpen);

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
    setIsSidebarOpen(false); // Close on mobile after selection
  };

  const handleNestedChange = (keys: string[], value: string) => {
    setFormData((prev: any) => {
      const newData = { ...prev };
      let current = newData;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const handleArrayItemChange = (arrayKey: string, index: number, field: string, value: string) => {
    setFormData((prev: any) => {
      const newData = { ...prev };
      newData[arrayKey][index][field] = value;
      return newData;
    });
  };

  const handleStringArrayChange = (
    basePath: string[],
    arrayKey: string,
    index: number | null,
    subIndex: number,
    value: string
  ) => {
    setFormData((prev: any) => {
      const newData = { ...prev };
      let current = newData;
      basePath.forEach((key) => { current = current[key]; });
      if (index !== null) { current = current[index]; }
      current[arrayKey][subIndex] = value;
      return newData;
    });
  };

  const addStringArrayItem = (basePath: string[], arrayKey: string, index: number | null = null) => {
    setFormData((prev: any) => {
      const newData = { ...prev };
      let current = newData;
      basePath.forEach((key) => { current = current[key]; });
      if (index !== null) { current = current[index]; }
      current[arrayKey].push("");
      return newData;
    });
  };

  const removeStringArrayItem = (basePath: string[], arrayKey: string, index: number | null, subIndex: number) => {
    setFormData((prev: any) => {
      const newData = { ...prev };
      let current = newData;
      basePath.forEach((key) => { current = current[key]; });
      if (index !== null) { current = current[index]; }
      current[arrayKey].splice(subIndex, 1);
      return newData;
    });
  };

  const handleSave = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "config.json");
    document.body.appendChild(downloadAnchorNode); 
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    alert("Saved config downloaded! In a real app, this would send an API request to your backend.");
  };

  const renderNav = () => (
    <ul className="admin-nav">
      <li className={activeSection === "General" ? "active" : ""} onClick={() => handleSectionChange("General")}>
        <FiSettings /> General
      </li>
      <li className={activeSection === "About" ? "active" : ""} onClick={() => handleSectionChange("About")}>
        <FiUser /> About
      </li>
      <li className={activeSection === "Experiences" ? "active" : ""} onClick={() => handleSectionChange("Experiences")}>
        <FiBriefcase /> Experiences
      </li>
      <li className={activeSection === "Projects" ? "active" : ""} onClick={() => handleSectionChange("Projects")}>
        <FiFolder /> Projects
      </li>
      <li className={activeSection === "Skills" ? "active" : ""} onClick={() => handleSectionChange("Skills")}>
        <FiCode /> Skills
      </li>
      <li className={activeSection === "Contact" ? "active" : ""} onClick={() => handleSectionChange("Contact")}>
        <FiMail /> Contact
      </li>
    </ul>
  );

  return (
    <div className="admin-wrapper">
      <aside className={`admin-sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="admin-logo">
          <h2>Admin<span>Panel</span></h2>
          <button className="close-sidebar" onClick={handleSidebarToggle}>
            <FiX />
          </button>
        </div>
        {renderNav()}
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <button className="menu-btn" onClick={handleSidebarToggle}>
            <FiMenu />
          </button>
          <h2>{activeSection} Management</h2>
          <button className="save-btn" onClick={handleSave}>
            <FiSave /> Save Changes
          </button>
        </header>

        <div className="admin-content-area">
          <div className="admin-card fade-in">
            {activeSection === "General" && (
              <div className="form-group-list">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" value={formData.developer.name} onChange={(e) => handleNestedChange(["developer", "name"], e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" value={formData.developer.fullName} onChange={(e) => handleNestedChange(["developer", "fullName"], e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Title</label>
                  <input type="text" value={formData.developer.title} onChange={(e) => handleNestedChange(["developer", "title"], e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea rows={4} value={formData.developer.description} onChange={(e) => handleNestedChange(["developer", "description"], e.target.value)} />
                </div>
              </div>
            )}

            {activeSection === "About" && (
              <div className="form-group-list">
                <div className="form-group">
                  <label>Section Title</label>
                  <input type="text" value={formData.about.title} onChange={(e) => handleNestedChange(["about", "title"], e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Detailed Description</label>
                  <textarea rows={12} value={formData.about.description} onChange={(e) => handleNestedChange(["about", "description"], e.target.value)} />
                </div>
              </div>
            )}

            {activeSection === "Experiences" && (
              <div className="form-group-list">
                {formData.experiences.map((exp: any, index: number) => (
                  <div key={index} className="item-card slide-up">
                    <div className="item-header"><h3>Experience #{index + 1}</h3></div>
                    <div className="form-row">
                      <div className="form-group"><label>Position</label><input type="text" value={exp.position} onChange={(e) => handleArrayItemChange("experiences", index, "position", e.target.value)} /></div>
                      <div className="form-group"><label>Company</label><input type="text" value={exp.company} onChange={(e) => handleArrayItemChange("experiences", index, "company", e.target.value)} /></div>
                    </div>
                    <div className="form-row">
                      <div className="form-group"><label>Period</label><input type="text" value={exp.period} onChange={(e) => handleArrayItemChange("experiences", index, "period", e.target.value)} /></div>
                      <div className="form-group"><label>Location</label><input type="text" value={exp.location} onChange={(e) => handleArrayItemChange("experiences", index, "location", e.target.value)} /></div>
                    </div>
                    <div className="form-group"><label>Description</label><textarea rows={3} value={exp.description} onChange={(e) => handleArrayItemChange("experiences", index, "description", e.target.value)} /></div>
                  </div>
                ))}
                <button className="add-btn"><FiPlus /> Add Experience</button>
              </div>
            )}

            {activeSection === "Projects" && (
              <div className="form-group-list">
                {formData.projects.map((proj: any, index: number) => (
                  <div key={proj.id} className="item-card slide-up">
                    <div className="item-header"><h3>{proj.title || "New Project"}</h3></div>
                    <div className="form-row">
                      <div className="form-group"><label>Title</label><input type="text" value={proj.title} onChange={(e) => handleArrayItemChange("projects", index, "title", e.target.value)} /></div>
                      <div className="form-group"><label>Category</label><input type="text" value={proj.category} onChange={(e) => handleArrayItemChange("projects", index, "category", e.target.value)} /></div>
                    </div>
                    <div className="form-row">
                      <div className="form-group"><label>Technologies</label><input type="text" value={proj.technologies} onChange={(e) => handleArrayItemChange("projects", index, "technologies", e.target.value)} /></div>
                      <div className="form-group"><label>Image URL</label><input type="text" value={proj.image} onChange={(e) => handleArrayItemChange("projects", index, "image", e.target.value)} /></div>
                    </div>
                    <div className="form-group"><label>Description</label><textarea rows={3} value={proj.description} onChange={(e) => handleArrayItemChange("projects", index, "description", e.target.value)} /></div>
                  </div>
                ))}
                 <button className="add-btn"><FiPlus /> Add Project</button>
              </div>
            )}

            {activeSection === "Skills" && (
              <div className="form-group-list">
                {["develop", "design"].map((skillKey) => {
                  const skillData = formData.skills[skillKey];
                  return (
                    <div key={skillKey} className="item-card slide-up">
                      <h3>{skillKey === "develop" ? "Frontend & Full Stack" : "Automation & Backend"}</h3>
                      <div className="form-group"><label>Title</label><input type="text" value={skillData.title} onChange={(e) => handleNestedChange(["skills", skillKey, "title"], e.target.value)} /></div>
                      <div className="form-group"><label>Description</label><input type="text" value={skillData.description} onChange={(e) => handleNestedChange(["skills", skillKey, "description"], e.target.value)} /></div>
                      <div className="form-group"><label>Details</label><textarea rows={3} value={skillData.details} onChange={(e) => handleNestedChange(["skills", skillKey, "details"], e.target.value)} /></div>
                      <div className="form-group">
                        <label>Tools & Technologies</label>
                        <div className="tags-container">
                          {skillData.tools.map((tool: string, idx: number) => (
                            <div className="tag-edit" key={idx}>
                              <input type="text" value={tool} onChange={(e) => handleStringArrayChange(["skills", skillKey], "tools", null, idx, e.target.value)} />
                              <button onClick={() => removeStringArrayItem(["skills", skillKey], "tools", null, idx)}><FiX /></button>
                            </div>
                          ))}
                          <button className="add-tag-btn" onClick={() => addStringArrayItem(["skills", skillKey], "tools")}><FiPlus /> Add</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {activeSection === "Contact" && (
              <div className="form-group-list">
                <div className="item-card slide-up">
                  <h3>Contact Links</h3>
                  {Object.keys(formData.contact).map((key) => (
                    <div className="form-group" key={key}>
                      <label style={{textTransform: "capitalize"}}>{key}</label>
                      <input type="text" value={formData.contact[key]} onChange={(e) => handleNestedChange(["contact", key], e.target.value)} />
                    </div>
                  ))}
                </div>
                 <div className="item-card slide-up">
                  <h3>Social Overview</h3>
                   {Object.keys(formData.social).map((key) => (
                    <div className="form-group" key={key}>
                      <label style={{textTransform: "capitalize"}}>{key}</label>
                      <input type="text" value={formData.social[key as keyof typeof formData.social]} onChange={(e) => handleNestedChange(["social", key], e.target.value)} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {isSidebarOpen && <div className="admin-overlay" onClick={handleSidebarToggle}></div>}
    </div>
  );
};

export default Admin;
