import React, { useState } from 'react';
import TileSet from '../Tileset/tileset.js'



export default function Contacts({contacts, handleContacts}) {

    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();

    const handleName = ({target}) => setName(target.value);
    

    const handlePhone = ({target}) => setPhone(target.value);

    const handleEmail = ({target}) => setEmail(target.value);

    const handleSubmit = e => {
        e.preventDefault();

        const makeObj = (name, phone, email) => {
            return {
                name,
                phone,
                email
            }
        };


        handleContacts(makeObj(name, phone, email));
        setName('');
        setPhone('');
        setEmail('');
    };
    
 

    return (
        <div>
            <div>
                <div className='section-title'>
                    <h2>Add Contacts</h2>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label for='name'>Please Add Name:</label>
                        <input type='text' id='name' name='name' value={name} onChange={handleName} required />
                        <br />
                        <label for='phone'>Please Add Phone Number:</label>
                        <input type='tell' id='phone' name='phone' value={phone} onChange={handlePhone} required pattern='^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$' />
                        <br />
                        <label for='email'>Please Add Email:</label>
                        <input type='email' name='email' id='email' value={email} onChange={handleEmail} required />
                        <br />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
            <div>
                <div>
                    <h2>Contact List</h2>
                </div>
                <div>
                    <TileSet tiles={contacts} />
                </div>
            </div>
        </div>
    )
}