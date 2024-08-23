import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import './App.module.css';
import Root from '../src/Components/Root/root.js';
import Appointments from '../src/Components/Appointments/appointments.js';
import Contacts from '../src/Components/Contacts/contact.js';




function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const handleContacts = item => setContacts((prev) => [...prev, item]);
  const handleAppointments = item => setAppointments((prev) => [...prev, item]);

  const route = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root />} >
      <Route index element={<Contacts />} replace />
      <Route path='appointments' element={<Appointments appointments={appointments} handleAppointments={handleAppointments} contacts={contacts}/>} />
      <Route path='contacts' element={<Contacts contacts={contacts} handleContacts={handleContacts} />} />
    </Route>
  
  ));

  console.log(appointments);
  return (
    <div>
      <RouterProvider router={route} />
    </div>
    
  );
}

export default App;
