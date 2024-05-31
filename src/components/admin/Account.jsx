import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import './Account.css';

export default function Account() {
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [accounts, setAccounts] = useState([]);
    const [accountToEdit, setAccountToEdit] = useState(null);

    const handleCreateAccount = (newAccount) => {
        setAccounts([...accounts, newAccount]);
        setShowCreateForm(false);
    };

    const handleDeleteAccount = (index) => {
        setAccounts(accounts.filter((_, i) => i !== index));
    };

    
    const handleUpdateAccount = (updatedAccount) => {
        const updatedAccounts = accounts.map((account, i) =>
            i === accountToEdit ? updatedAccount : account
        );
        setAccounts(updatedAccounts);
        setAccountToEdit(null);
        setShowCreateForm(false);
    };

    const handleEditButtonClick = (index) => {
        setAccountToEdit(index);
        setShowCreateForm(true);
    };

    const handleBackButtonClick = () => {
        setShowCreateForm(false);
        setAccountToEdit(null);
    };

    return (
        <div className="app">
            <h1 style={{ textAlign: 'center' }}>Account Management</h1>
            {!showCreateForm && (
                <button style={buttonStyle} onClick={() => setShowCreateForm(true)}>
                    <FaPlus style={{ marginRight: '5px' }} />
                    Create Account
                </button>
            )}
            {showCreateForm ? (
                <CreateAccountForm
                    onCreate={handleCreateAccount}
                    onUpdate={handleUpdateAccount}
                    account={accountToEdit !== null ? accounts[accountToEdit] : null}
                    onBack={handleBackButtonClick}
                />
            ) : (
                <AccountList
                    accounts={accounts}
                    onDelete={handleDeleteAccount}
                    onEdit={handleEditButtonClick}
                />
            )}
        </div>
    );
}

const CreateAccountForm = ({ onCreate, onUpdate, account, onBack }) => {
    const [name, setName] = useState(account ? account.name : '');
    const [password, setPassword] = useState(account ? account.password : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAccount = { name, password };
        if (account) {
            onUpdate(newAccount);
        } else {
            onCreate(newAccount);
        }
    };

    return (
        <div className="create-account-form">
            <h2>{account ? 'Update Account' : 'Create Account'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" style={buttonStyle}>{account ? 'Update' : 'Create'}</button>
                <button type="button" style={{ ...buttonStyle, backgroundColor: '#6c757d' }} onClick={onBack}>Back</button>
            </form>
        </div>
    );
};

const AccountList = ({ accounts, onDelete, onEdit }) => {
    return (
        <div className="account-list">
            <h2>Account List</h2>
            <ul>
                {accounts.map((account, index) => (
                    <li key={index}>
                        <h3 style={{ fontSize: '1.5rem' }}>{account.name}</h3>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button style={buttonStyle} onClick={() => onEdit(index)}>
                                <FaEdit style={{ marginRight: '5px' }} />
                                Update
                            </button>
                            <button style={{ ...buttonStyle, backgroundColor: '#dc3545' }} onClick={() => onDelete(index)}>
                                <FaTrash style={{ marginRight: '5px' }} />
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '5px'
};
