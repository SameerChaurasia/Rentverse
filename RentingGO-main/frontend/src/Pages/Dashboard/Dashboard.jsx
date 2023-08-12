import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import Header from '../../components/Header/Header';

function Dashboard() {

    const [Forms, setForms] = useState([]);

    const fetchingFunc = async () => {
        try {
            const res = await fetch('https://rentinggoapi.onrender.com/getform');
            const data = await res.json();
            const formsArray = Object.values(data);
            const sortedForms = formsArray.sort((a, b) => new Date(b.submitDate) - new Date(a.submitDate));
            setForms(sortedForms);
        } catch (error) {
            alert('error occured while fetching the forms');
            console.log(error);
        }
    }

    useEffect(() => {
        fetchingFunc();

        const intervalId = setInterval(() => {
            fetchingFunc();
        }, 10000);

        return () => clearInterval(intervalId);
    }, []);

    const formatDate = (dateStr) => {
        const dateObj = new Date(dateStr);
        const day = dateObj.getDate().toString().padStart(2, '0');
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
        const year = dateObj.getFullYear();
        const hours = dateObj.getHours().toString().padStart(2, '0');
        const minutes = dateObj.getMinutes().toString().padStart(2, '0');
        return `${day}/${month}/${year}, ${hours}:${minutes}`;
    }

    const deleteFunc = async (formId) => {
        try {
            await fetch(`https://rentinggoapi.onrender.com/getform/${formId}`, {
                method: 'DELETE'
            });
            setForms((prevForm) => prevForm.filter((form) => form._id !== formId));
            alert('deleted the form by id ' + formId);
        } catch (error) {
            alert('error occured while deleting the form');
            console.log('error occured while deleting the form, ', error);
        }
    };

    const checkFunc = async (formId)=>{
        console.log('this is the checked form', formId);
        try {
            await fetch(`https://rentinggoapi.onrender.com/getform/${formId}`, {
                method: 'PUT'
            });
            // setForms((prevForm) => prevForm.filter((form) => form._id !== formId));
            fetchingFunc()
            alert('updated the form by id ' + formId);
        } catch (error) {
            alert('error occured while updating !')
            console.log(error)
        }
        
    }

    return (
        <div>
            <Header headTxt1="Dash" headTxt2="Board" back="none" />
            <div className="DashWrap container-fluid pt-5">
                <div className="tableHeadingDiv pt-5 border-bottom pb-2">
                    <div className="tableHeading row p-0 ps-3">
                        <h4 className='col-md-2 text-center p-0'>Product Name</h4>
                        <h4 className='col-md-2 text-center p-0'>Amount</h4>
                        <h4 className='col-md-2 text-center p-0'>Number</h4>
                        <h4 className='col-md-2 text-center p-0'>Date</h4>
                        <h4 className='col-md-2 text-center p-0'>Date of filling</h4>
                        <h4 className='col-md-2 text-center p-0'>Call of Action</h4>
                    </div>
                </div>

                {
                    Forms.map((form) => (
                        <div key={form._id} className="tableData row align-items-center pt-3 ps-3 border-bottom">
                            <p className="col-md-2 p-0 text-center fs-6">{form.proname}</p>
                            <p className="col-md-2 p-0 text-center fs-6">{form.amount}</p>
                            <p className="col-md-2 p-0 text-center fs-6">{form.phoneNo}</p>
                            <p className="col-md-2 p-0 text-center fs-6">{form.day}</p>
                            <p className="col-md-2 p-0 text-center fs-6">{formatDate(form.submitDate)}</p>
                            <p className={`col-md-2 p-0 text-center fs-6 ${form.delivered ? 'd-none' : ''}`}><i className="fas fa-check text-primary pe-2 actionIcon" onClick={()=> checkFunc(form._id)}></i> | <i className="fas fa-trash-alt ps-2 text-danger actionIcon" onClick={() => deleteFunc(form._id)}></i></p>
                            <p className={`col-md-2 p-0 text-center fs-5 text-success fw-bold ${!form.delivered ? 'd-none' : ''}`}>Delivered | <i className="fas fa-trash-alt ps-2 text-danger actionIcon" onClick={() => deleteFunc(form._id)}></i></p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Dashboard