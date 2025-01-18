
// validators.jsx
export const validateForm = (formType, data) => {
    switch (formType) {
      case 'addJobs':
        if (!data.type.trim()) {
          return { valid: false, message: "Name is required." };
        }
        if (!data.position.trim()) {
          return { valid: false, message: "Position is required." };
        }
        if (!data.descript.trim()) {
          return { valid: false, message: "Description is required." };
        }
        if (!data.salary.trim()) {
          return { valid: false, message: "Salary is required." };
        }
        if (!data.location.trim()) {
          return { valid: false, message: "Location is required." };
        }
        if (!data.cname.trim()) {
          return { valid: false, message: " Company Name is required." };
        }
        if (!data.cdescript.trim()) {
          return { valid: false, message: "Company Description is required." };
        }
        if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) {
          return { valid: false, message: "Please enter a valid email address." };
        }
        if (!data.mobile.trim()) {
          return { valid: false, message: "Mobile No is required." };
        }
        break;
      
        case 'updateJobs':
        if (!data.type.trim()) {
          return { valid: false, message: "Name is required." };
        }
        if (!data.position.trim()) {
          return { valid: false, message: "Position is required." };
        }
        if (!data.descript.trim()) {
          return { valid: false, message: "Description is required." };
        }
        if (!data.salary.trim()) {
          return { valid: false, message: "Salary is required." };
        }
        if (!data.location.trim()) {
          return { valid: false, message: "Location is required." };
        }
        if (!data.cname.trim()) {
          return { valid: false, message: " Company Name is required." };
        }
        if (!data.cdescript.trim()) {
          return { valid: false, message: "Company Description is required." };
        }
        if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) {
          return { valid: false, message: "Please enter a valid email address." };
        }
        if (!data.mobile.trim()) {
          return { valid: false, message: "Mobile No is required." };
        }
        break;

      case 'login':
        if (!data.email.trim()) {
          return { valid: false, message: "Email is required." };
        }
        if (!data.pass.trim()) {
          return { valid: false, message: "Password is required." };
        }
        break;
  
      case 'register':
        if (!data.name.trim()) {
          return { valid: false, message: "Username is required." };
        }
        if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) {
          return { valid: false, message: "Please enter a valid email address." };
        }
        if (!data.pass1.trim()) {
          return { valid: false, message: "Password is required." };
        }
        if (data.pass1 !== data.pass2) {
          return { valid: false, message: "Passwords do not match." };
        }
        break;
  
      default:
        return { valid: false, message: "Invalid form type." };
    }
    return { valid: true };
  };
  