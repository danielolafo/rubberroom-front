import React, { useState } from 'react';

function User(props){
    
    const [editMode, setEditMode] = useState(true);
    const [createMode, setCreateMode] = useState(false);

    return (
        <div>
            editMode ? <Update /> : <Create />
        </div>
    );
}

function Create(){
    return (
        <BaseForm/>
    );
}

function Update(){
    return (
        <BaseForm />
    );
}

function BaseForm(){
    <div>
            <form>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" />
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" name="password" />
                </div>
                <div>
                    <label>Confirm password</label>
                    <input type="text" name="confirmPassword" />
                </div>
            </form>
        </div>
}

