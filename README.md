# **My Portfolio - CS601 Web Application Development**

Welcome to **My Portfolio**, a comprehensive web application designed to showcase my skills, interests, projects, and professional background. This interactive and user-friendly portfolio aims to provide a dynamic experience for visitors while highlighting the technical expertise gained through the **CS601 Web Application Development** course.


## **Features**
### **General**
- Fully responsive design optimized for desktop and mobile devices.
- Modern and visually appealing user interface.
- Interactive components for navigation and engagement.

### **Pages**
1. **Homepage**  
   - Features a brief introduction and overview of the portfolio's purpose.  
   - Clean design with a background image and centered content.

2. **Biography**  
   - Highlights my academic and career journey with an engaging story.  
   - Displays structured text in a visually pleasing container.  

3. **Interests**  
   - Interactive grid layout featuring four NYC landmarks.  
   - Each place has an image, description, and a button linking to Google Maps.

4. **Skills**  
   - Displays technical projects with descriptions and demo links.  
   - Each project card features an image, name, and direct links to hosted demos.  

5. **Resume**  
   - Includes an embedded PDF viewer for easy accessibility.  
   - Option to download the resume as a PDF file.

6. **Contact**  
   - Interactive contact form with input validation for name, email, and message fields.  
   - Provides direct communication for potential clients or collaborators.

### **Navigation and Search**
- **Navbar**: Sidebar navigation with clickable icons and links for easy access to all sections.  
- **Search Bar**: Allows global filtering of content across all pages.  

### **Footer**
- Social media links and copyright information displayed cleanly at the bottom of the page.

---

## **Technology Stack**
- **Frontend Framework**: React  
- **Routing**: React Router v6  
- **Styling**: CSS (custom styles for responsive design and interactive features)  
- **Hosting**: GitHub Pages  
- **Tools**: JavaScript, HTML5, Node.js  

---

## **File Structure**
```plaintext
my-portfolio/
├── public/
│   ├── images/          # Static images (logos, project thumbnails, etc.)
│   ├── documents/       # Resume PDF
│   └── index.html       # Entry point for the application
├── src/
│   ├── components/      # Reusable components (Navbar, Header, Footer, etc.)
│   ├── pages/           # Individual pages (Home, Biography, etc.)
│   ├── App.js           # Main application file
│   ├── App.css          # Global CSS styles
│   └── index.js         # Entry point for React
├── README.md            # Project documentation
└── package.json         # Dependencies and project configuration

Project Structure:
+ App.js:
    Main entry point for routing and layout.
    Integrates the navbar, footer, and routes to individual pages.

+ Components"
    * Navbar: Sidebar with icons and text for navigation.
    * Footer: Includes social media links and a copyright notice.
    * Header: Displays the page title, social media links, and a logo.

+ Pages:
    Each page contains structured content and interactive elements specific to its purpose.
    
+ Navigation:
    Use the sidebar to navigate between pages.

+ Interactive Elements:
    * Click on project cards to view live demos.
    * Use the buttons on the Interests page to open Google Maps.

+ Resume:
    View the embedded PDF or download it using the "Download PDF" button.

+ Contact Form:
Fill out the form with valid details and submit to send a message.

Credits:
+ Developed by: John Gutierrez
+ Course: CS601 Web Application Development, Boston University