import React, { useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";


//The Account component renders the component page and is wher ethe front end is handled for processing 
//JSON data for users quotes and projects 
function Account(parentData) {

    const [projects, setProjects] = useState([])
    const [quotes, setQuotes] = useState([])
    const navigate = useNavigate()
    const email = localStorage.getItem('email')

    
    useEffect(() => {
        const getProjects = async () => {
            let updatedProjects = await fetch("/getProjects", {
            method: "post",
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                "email": email
            }),
            }).then((res) => res.json());
            setProjects(updatedProjects)

        };

        const getQuotes = async () => {
            let updatedQuotes = await fetch("/getQuotes", {
            method: "post",
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                "email": email
            }),
            }).then((res) => res.json());
            setQuotes(updatedQuotes)
            
        };

        
            const pageSetup = async() => {
                await getProjects()
                await getQuotes()
            }
            console.log('q:', quotes)

            pageSetup()
        }, []);
    
    const handleDelete = (e) => {
        console.log('called')
        console.log(e.target.className)
        if(e.target.className==='deleteProject'){
            const deleteProject = async () => {
                await fetch("/deleteProject", {
                method: "post",
                headers: {
                    "content-type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    'id': e.target.id
                }),
                }).then((res) => res.json());
            
            };
            console.log('deleteing project')
            
             deleteProject()

        }
        else if(e.target.className==='deleteQuote'){
            console.log(e.target.id)
            var hasDependentProjects = false
            const checkQuoteForProject = async () => {
                let dependentProjects = await fetch("/checkQuoteForProject", {
                method: "post",
                headers: {
                    "content-type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    'id': Number(e.target.id)
                }),
                }).then((res) => res.json());
                if(dependentProjects.length>0){
                    alert('This Quote has dependent projects and cannot be deleted at this time')
                    hasDependentProjects=true
                }
            };

            const deleteQuote = async () => {
                await checkQuoteForProject()
                if(!hasDependentProjects){
                    console.log('deleting')
                    await fetch("/deleteQuote", {
                    method: "post",
                    headers: {
                        "content-type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        'id': Number(e.target.id)
                    }),
                    }).then((res) => res.json());
                }
            
            };

            deleteQuote()

        }
        else
            console.log('neither')

    }

    const handleLogout = () => {
        localStorage.setItem('email', '')
        localStorage.setItem('loginStatus', false)
        navigate('/Home')
        window.location.reload(false)
    } 
  return (
    <>
      <div className = 'accountContainer'>
        <div className = 'editAccountContainer'>
            <div className = 'editAccountButtonContainer'>
                <button className = 'logoutButton' onClick={handleLogout}>Log out</button>
            </div>
        </div>
        <table className = 'accountTable'> 
            <thead> 
                <tr> 
                    <th> Appointment Type </th>
                    <th> ID Number  </th>
                    <th> Date </th>
                    <th> Street  </th>
                    <th> City </th>
                    <th> State  </th>
                    <th> Zipcode </th>
                    <th> Delete Appointment</th>
                  
                </tr>
           </thead>
           <tbody> 
                 {projects.map((element)=> (
                    <tr> 
                        <td> Project </td>
                        <td> {element.projectID}</td>
                        <td> {element.StartDate.substring(0, 10)}</td>
                        <td> {element.street1}</td>
                        <td> {element.city}</td>
                        <td> {element.State}</td>
                        <td> {element.Zipcode}</td>
                        <td className = 'deleteButtonContainer'> 
                            <button id = {element.projectID} className="deleteProject" onClick={handleDelete}> Delete
                            
                            </button>
                        </td>
                    </tr>
                    
                ))}
                  
                {quotes.map((element)=> (
                    <tr> 
                        <td> Quote</td>
                        <td> {element.quoteID}</td>
                        <td> {element.QuoteDate.substring(0,10)}</td>
                        <td> {element.street1}</td>
                        <td> {element.city}</td>
                        <td> {element.State}</td>
                        <td> {element.Zipcode}</td>
                        <td className = 'deleteButtonContainer'> 
                            <button id = {element.quoteID} className="deleteQuote" onClick={handleDelete}> Delete
                            
                            </button>
                        </td>
                    </tr>
                ))}
                
           </tbody>
        </table>
      </div>
    </>
  );
}

export default Account;
