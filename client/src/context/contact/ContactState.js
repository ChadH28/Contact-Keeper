import React, { useReducer } from 'react';
import uuid from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jill Jones',
                email: 'JJ@gmail.com',
                phone: '111-111-1111',
                type: 'Personal'
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);
    
    // Add contact
    const addContact = contact => {
        contact.id = 50;
        dispatch({type: ADD_CONTACT, payload: contact })
    }

    // Delete contact

    // Set current contact

    //  Clear current contact

    // Update contact

    // Filter contacts

    // Clear Filter

    return (
        <contactContext.Provider
         value= {{
            contacts: state.contacts,
            addContact
        }}>
            { props.children }
        </contactContext.Provider>
    )
};

export default ContactState;