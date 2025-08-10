import React, { useState, useEffect } from "react";

// The Header component, self-contained within this file.
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownItems = [
    { label: "Thrust Area", key: "thrust-area", href: "#" },
    {
      label: "On Going Research Projects",
      key: "ongoing-research-projects",
      href: "#",
    },
    {
      label: "Completed Research Projects",
      key: "completed-research-projects",
      href: "#",
    },
    { label: "Joint Project", key: "joint-project", href: "#" },
    {
      label: "Important Laboratories",
      key: "important-laboratories",
      href: "/laboratories",
    },
    {
      label: "Departmental Committees",
      key: "departmental-committees",
      href: "#",
    },
    {
      label: "Alumni Relations",
      key: "alumni-relations",
      href: "/alumni-relations",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".dropdown-toggle") &&
        !e.target.closest(".dropdown-menu")
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <style>{`
        /* --- HEADER STYLES --- */
        .amu-header-horizontal {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #ffffff;
          border-radius: 20px;
          padding: 12px 20px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          flex-wrap: wrap; /* Allows items to wrap to a new line on small screens */
        }

        .amu-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .amu-left img {
          height: 45px;
        }

        .amu-title {
          font-weight: bold;
          font-size: 1.2em;
          color: #004d40;
        }

        .amu-nav {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
        }

        .amu-nav-link, .dropdown-toggle {
          text-decoration: none;
          color: #004d40;
          font-weight: 600;
          font-size: 0.95em;
          cursor: pointer;
          transition: color 0.2s ease-in-out;
        }

        .amu-nav-link:hover, .dropdown-toggle:hover {
          color: #00796b;
        }

        .dropdown-wrapper {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          background: white;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          padding: 10px;
          top: 100%;
          right: 0;
          z-index: 999;
          min-width: 250px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .dropdown-menu-item {
          display: block;
          padding: 8px;
          color: #004d40;
          text-decoration: none;
          font-size: 14px;
          transition: background-color 0.2s ease-in-out;
        }

        .dropdown-menu-item:hover {
          background: #e0f2f1;
          border-radius: 4px;
        }

        /* Responsive adjustments for the header on tablets and mobile devices */
        @media (max-width: 768px) {
          .amu-header-horizontal {
            flex-direction: column;
            align-items: flex-start;
            padding: 15px;
          }
          .amu-left {
            margin-bottom: 15px;
          }
          .amu-nav {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            width: 100%;
          }
          .amu-nav-link, .dropdown-toggle {
            width: 100%;
            text-align: left;
            padding: 8px 0;
          }
          .dropdown-wrapper {
            width: 100%;
          }
          .dropdown-menu {
            position: static;
            width: 100%;
            box-shadow: none;
            border: none;
            padding: 0;
            margin-top: 5px;
            background: #f8f8f8;
          }
          .dropdown-menu-item {
            padding-left: 15px;
          }
        }

        /* Further adjustments for very small mobile devices */
        @media (max-width: 480px) {
          .amu-title {
            font-size: 1em;
            text-align: center;
            width: 100%;
          }
          .amu-left {
            flex-direction: column;
          }
          .amu-left img {
            height: 35px;
          }
        }
      `}</style>
      <header className="amu-header-horizontal">
        <div className="amu-left">
          <img
            src="https://amubuddy.com/wp-content/uploads/2023/06/amu-logo.jpg"
            alt="AMU Logo"
            className="amu-logo"
          />
          <span className="amu-title">Aligarh Muslim University</span>
        </div>
        <nav className="amu-nav">
          <a href="/" className="amu-nav-link">
            Home
          </a>
          <a href="/about" className="amu-nav-link">
            About
          </a>
          <a href="/programs" className="amu-nav-link">
            Programs
          </a>
          <a href="/faculty" className="amu-nav-link">
            Faculty
          </a>
          <a href="/contact" className="amu-nav-link">
            Contact
          </a>
          <div className="dropdown-wrapper">
            <span
              className="dropdown-toggle"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Links ▼
            </span>
            {showDropdown && (
              <div className="dropdown-menu">
                {dropdownItems.map((item) => (
                  <a
                    href={item.href}
                    key={item.key}
                    className="dropdown-menu-item"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>
      </header>
      <div className="amu-underline"></div>
    </>
  );
};

// The Footer component, self-contained within this file.
const Footer = () => {
  return (
    <>
      <style>{`
        /* --- FOOTER STYLES --- */
        .amu-footer {
          background-color: #ffffff;
          color: #004d40;
          padding: 20px 0;
          margin-top: auto;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }

        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid; /* Changed to use CSS Grid */
          grid-template-columns: 1fr 1fr; /* Two columns for desktop */
          gap: 20px;
          align-items: center;
        }

        .footer-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .footer-logo {
          height: 50px;
        }

        .footer-text {
          font-size: 0.9em;
          line-height: 1.6;
          color: #004d40;
        }

        .footer-right {
          text-align: right;
          font-size: 0.85em;
          color: #004d40;
        }

        /* Responsive adjustments for the footer on tablets and mobile devices */
        @media (max-width: 768px) {
          .amu-footer {
            padding: 15px 0;
          }
          .footer-container {
            grid-template-columns: 1fr; /* Single column on small screens */
            justify-items: center; /* Center items horizontally */
            text-align: center;
            padding: 0 15px;
          }
          .footer-left {
            flex-direction: column;
            gap: 10px;
            margin-bottom: 10px;
          }
          .footer-logo {
            margin-bottom: 5px;
          }
        }
      `}</style>
      <footer className="amu-footer">
        <div className="footer-container">
          <div className="footer-left">
            <p className="footer-text">
              &copy; {new Date().getFullYear()} Aligarh Muslim University. All
              Rights Reserved.
            </p>
          </div>
          <div className="footer-right">
            <p>Designed and Developed by Department of Computer Science</p>
            <p>Contact: info@amu.ac.in</p>
          </div>
        </div>
      </footer>
    </>
  );
};

const Layout = ({ children }) => {
  return (
    <>
      <style>{`
        /* Global Styles (apply to the entire page body) */
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: #ffffff;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Main content area styling */
        .main-content-wrapper {
          flex-grow: 1;
          max-width: 1100px;
          margin: 20px auto;
          padding: 0 20px;
          width: 100%;
        }

        .amu-underline {
          height: 4px;
          background: #004d40;
          width: 100%;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          margin-bottom: 20px;
        }
      `}</style>
      <Header />
      <main className="main-content-wrapper">{children}</main>
      <Footer />
    </>
  );
};

// --- PHOTO GALLERY COMPONENT ---
const PhotoGalleryPage = () => {
  const photos = [
    {
      url: "https://api.amu.ac.in/storage//images/3/photo-gallery/1692012446_WhatsApp%20Image%202023-08-14%20at%201.30.49%20PM.jpeg",
      alt: "AMU Computer Science Department Photo 1",
    },
    {
      url: "https://api.amu.ac.in/storage//images/3/photo-gallery/1692012431_WhatsApp%20Image%202023-08-14%20at%201.30.48%20PM.jpeg",
      alt: "AMU Computer Science Department Photo 2",
    },
    {
      url: "https://api.amu.ac.in/storage//images/3/photo-gallery/1692012521_WhatsApp%20Image%202023-08-14%20at%201.30.53%20PM.jpeg",
      alt: "AMU Computer Science Department Photo 3",
    },
    {
      url: "https://api.amu.ac.in/storage//images/3/photo-gallery/1692012461_WhatsApp%20Image%202023-08-14%20at%201.30.50%20PM.jpeg",
      alt: "AMU Computer Science Department Photo 4",
    },
    {
      url: "https://api.amu.ac.in/storage//images/3/photo-gallery/1692012507_WhatsApp%20Image%202023-08-14%20at%201.30.53%20PM%20(2).jpeg",
      alt: "AMU Computer Science Department Photo 5",
    },
    {
      url: "https://api.amu.ac.in/storage//images/3/photo-gallery/1692012413_WhatsApp%20Image%202023-08-14%20at%201.30.47%20PM.jpeg",
      alt: "AMU Computer Science Department Photo 6",
    },
    {
      url: "https://api.amu.ac.in/storage//images/3/photo-gallery/1692012491_WhatsApp%20Image%202023-08-14%20at%201.30.53%20PM%20(1).jpeg",
      alt: "AMU Computer Science Department Photo 7",
    },
  ];
  return (
    <div className="gallery-container">
      <style>{`
        /* --- STYLES FOR THE PHOTO GALLERY --- */
        .gallery-container {
          padding: 20px;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          min-height: 400px;
        }

        .gallery-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #004d40;
          margin-bottom: 2rem;
          text-align: center;
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }
        
        .gallery-item {
          background-color: #f8f8f8;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease-in-out;
        }
        
        .gallery-item:hover {
          transform: translateY(-5px);
        }
        
        .gallery-item img {
          display: block;
          width: 100%;
          height: 250px; /* Fixed height for consistent grid layout */
          object-fit: cover; /* Ensures images fill the space without distortion */
          transition: transform 0.3s ease-in-out;
        }
        
        .gallery-item img:hover {
          transform: scale(1.05);
        }
        
        .image-caption {
          padding: 15px;
          text-align: center;
          font-size: 1rem;
          color: #333;
          font-weight: 500;
        }

        /* Responsive adjustments for the gallery on tablets and mobile devices */
        @media (max-width: 768px) {
          .gallery-grid {
            gap: 15px;
          }
          .gallery-item img {
            height: 200px;
          }
        }
        @media (max-width: 480px) {
          .gallery-title {
            font-size: 2rem;
          }
          .gallery-item img {
            height: 180px;
          }
        }
      `}</style>
      <h1 className="gallery-title">Photo Gallery</h1>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div key={index} className="gallery-item">
            <img src={photo.url} alt={photo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Layout>
      <PhotoGalleryPage />
    </Layout>
  );
};

export default App;
