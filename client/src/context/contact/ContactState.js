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
                type: 'personal'
            },
            {
                id: 50,
                name: 'Kevin Franks',
                email: 'KevinF@yahoo.com',
                phone: '111-123-1111',
                type: 'professional'
            }
        ],
        current: null,
        filtered: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);
    
    // Add contact
    const addContact = contact => {
        contact.id = 50;
        dispatch({type: ADD_CONTACT, payload: contact })
    };

    // Delete contact
    const deleteContact = id => {
        dispatch({type: DELETE_CONTACT, payload: id })
    };
    // Set current contact
    const setCurrent = contact => {
        dispatch({type: SET_CURRENT, payload: contact})
    };
    //  Clear current contact
    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT})
    };
    // Update contact
    const updateContact = contact => {
        dispatch({type: UPDATE_CONTACT, payload: contact})
    };
    // Filter contacts
    const filterContacts = text => {
        dispatch({type: FILTER_CONTACTS, payload: text})
    };
    // Clear Filter
    const clearFilter = () => {
        dispatch({type: CLEAR_FILTER})
    };


    return (
        <contactContext.Provider
         value= {{
            contacts: state.contacts,
            current: state.current,
            filtered: state.filtered,
            filterContacts,
            clearFilter,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact
        }}>
            { props.children }
        </contactContext.Provider>
    )
};

export default ContactState;