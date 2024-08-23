import React, { useState, useMemo } from 'react';
import TileSet from '../Tileset/tileset';


export default function Appointments({appointments, handleAppointments, contacts}) {

    const [time, setTime] = useState();
    const [date, setDate] = useState();
    const [title, setTitle] = useState()
    const [contact, setContact] = useState();

    const getTodayString = () => {
        const [month, day, year] = new Date()
          .toLocaleDateString("en-US")
          .split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    };

    const handleContact = ({target}) => setContact(target.value);

    const handleTitle = ({target}) => setTitle(target.value);

    const handleTime = ({target}) => setTime(target.value);

    const handleDate = ({target}) => setDate(target.value);

    const contactNames = useMemo(() => {
        return contacts.map((contact) => contact.name);
      }, [contacts]);


    const handleSubmit = e => {
        e.preventDefault();
        const makeObj = (title, time, date, contact) => {
            return {
                title,
                time,
                date,
                contact
            }
        };
        handleAppointments(makeObj(title, time, date, contact));
        setContact('');
        setDate('');
        setTitle('');
        setTime('');
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit} >
                    <label for='title' >Please put in Name:</label>
                    <input type='text' id='title' name='title' value={title} required onChange={handleTitle}/>
                    <br />
                    <label for='date' >Please pick a Date:</label>
                    <input type='date' name='date' id='date' value={date} required onChange={handleDate} />
                    <br />
                    <label for='time'>Please Choose a Time:</label>
                    <input type='time' name='time' id='time' value={time} min={getTodayString()} required onChange={handleTime} />
                    <br />
                    <select onChange={handleContact}>
                        <option>No Option chosen</option> 
                        {
                            contacts.map(obj => (
                                <option value={obj.name} >{obj.name}</option>
                            ))
                        }
                    </select>
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <div>
                <TileSet tiles={appointments}/>
            </div>
        </div>
    )
}