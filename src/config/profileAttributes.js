const profileAttributes = {
    general: [
        { key: "first_name", label: "First Name", type: "text" },
        { key: "last_name", label: "Last Name", type: "text" },
        { key: "dob", label: "Date of Birth", type: "date" },
        { key: "add_line_1", label: "Address Line 1", type: "text" },
        { key: "add_line_3", label: "Address Line 3", type: "text" },
        { key: "county", label: "County", type: "text" },
        { key: "city", label: "City", type: "text" },
        { key: "state", label: "State", type: "text" },
        { key: "pin_code", label: "Pin Code", type: "text" },
        { key: "country", label: "Country", type: "text" },
        { key: "current_status", label: "Current Status", type: "text" },
        { key: "gender", label: "Gender", type: "dropdown", options: ["Male", "Female", "Other"] },
        { key: "race", label: "Race", type: "dropdown", options: ["Race 1", "Race 2", "Other"] },
        { key: "email", label: "Email", type: "email" },
        { key: "ssn", label: "Social Security Number", type: "text" },
      ],
    
      job_search: [
        // Section 1: General Details
        { key: "first_name", label: "First Name", type: "text" },
        { key: "last_name", label: "Last Name", type: "text" },
        { key: "dob", label: "Date of Birth", type: "date" },
        { key: "add_line_1", label: "Address Line 1", type: "text" },
        { key: "add_line_3", label: "Address Line 3", type: "text" },
        { key: "county", label: "County", type: "text" },
        { key: "city", label: "City", type: "text" },
        { key: "state", label: "State", type: "text" },
        { key: "pin_code", label: "Pin Code", type: "text" },
        { key: "country", label: "Country", type: "text" },
        { key: "current_status", label: "Current Status", type: "dropdown", options: ["Employed", "Unemployed", "Student"] },
        { key: "gender", label: "Gender", type: "dropdown", options: ["Male", "Female", "Other"] },
        { key: "race", label: "Race", type: "dropdown", options: ["Race 1", "Race 2", "Other"] },
        { key: "h1b_sponsorship", label: "H1B Sponsorship", type: "dropdown", options: ["Yes", "No"] },
        { key: "current_visa_status", label: "Current Visa Status", type: "text" },
        { key: "email_alternate", label: "Alternate Email", type: "email" },
    
        // Section 2: Experiences
        { key: "company_name_1", label: "Company Name 1", type: "text" },
        { key: "location_1", label: "Location 1", type: "text" },
        { key: "from_1", label: "From (1)", type: "date" },
        { key: "to_1", label: "To (1)", type: "date" },
        { key: "description_1", label: "Description (1)", type: "text" },
        { key: "company_name_2", label: "Company Name 2", type: "text" },
        { key: "location_2", label: "Location 2", type: "text" },
        { key: "from_2", label: "From (2)", type: "date" },
        { key: "to_2", label: "To (2)", type: "date" },
        { key: "description_2", label: "Description (2)", type: "text" },
        { key: "company_name_3", label: "Company Name 3", type: "text" },
        { key: "location_3", label: "Location 3", type: "text" },
        { key: "from_3", label: "From (3)", type: "date" },
        { key: "to_3", label: "To (3)", type: "date" },
        { key: "description_3", label: "Description (3)", type: "text" },
    
        // Section 3: School
        { key: "school_name_1", label: "School Name 1", type: "text" },
        { key: "school_location_1", label: "School Location 1", type: "text" },
        { key: "school_from_1", label: "From (School 1)", type: "date" },
        { key: "school_to_1", label: "To (School 1)", type: "date" },
        { key: "major_1", label: "Major (1)", type: "text" },
        { key: "degree_1", label: "Degree (1)", type: "text" },
        { key: "school_description_1", label: "Description (School 1)", type: "text" },
        { key: "school_name_2", label: "School Name 2", type: "text" },
        { key: "school_location_2", label: "School Location 2", type: "text" },
        { key: "school_from_2", label: "From (School 2)", type: "date" },
        { key: "school_to_2", label: "To (School 2)", type: "date" },
        { key: "major_2", label: "Major (2)", type: "text" },
        { key: "degree_2", label: "Degree (2)", type: "text" },
        { key: "school_description_2", label: "Description (School 2)", type: "text" },
    
        // Section 4: Skills
        { key: "skills", label: "Skills", type: "list" },
    
        // Section 5: Certifications
        { key: "certificates", label: "Certifications", type: "list" },
      ],
    gaming: [
      { key: "favorite_game", label: "Favorite Game", type: "text" },
      { key: "hours_played", label: "Hours Played", type: "number" },
    ],
  };
  
  export default profileAttributes;


