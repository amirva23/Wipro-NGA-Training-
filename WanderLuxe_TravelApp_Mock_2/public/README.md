# WanderLuxe – Travel Booking React App

WanderLuxe is a modern travel booking web application built using React + Vite.  
It allows users to explore destinations, view detailed packages, and book their trips through a simple and elegant interface.



##  Features

#  Home Page
- Clean hero section  
- Popular destination cards (Goa, Kerala, Andaman, Dubai, etc.)  
- Smooth navigation  

# Packages Page
- Displays curated travel packages  
- Each package includes:  
  - Image  
  - Price  
  - Trip duration  
  - “View Details” button  

# Package Details Page
- Large featured image (optimized for landscape view)  
- Complete description  
- Duration & price  
- **Book Now** button (navigates to booking form)

#  Booking Form
- User can enter:  
  - Name  
  - Email  
  - Number of travellers  
  - Travel date  
- Form data is sent to **JSON server backend** (`db.json`)

#   Contact Page
- Support information  
- Styled with inline CSS (no extra file needed)

# About Page
- App overview  
- Credits to creator (Amirtha Varshini S)  
- Minimal and aesthetic layout

# Tech Stack
- React(Vite)
- React Router
- JSON Server for backend
- CSS  (custom + inline)
- ES Modules


App runs at:  
👉 `http://localhost:5173`


## Testing the Booking Flow
1. Go to --> Packages
2. Click --> View Details
3. Click --> Book Now
4. Fill the form → Submit
5. Check saved data:
   - Open: `http://localhost:4000/bookings`


