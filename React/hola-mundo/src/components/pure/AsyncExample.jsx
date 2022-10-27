import React from 'react';

const AsyncExample = () => {
    async function generateNumber(){
        return 1;
    }

    async function generatePromiseNumber() {
        return Promise.resolve(2)
    }

    function obtainNumber(){
        generateNumber()
        .then((response) => alert(`Response: ${response}`))
        .catch((error) => alert(`Something went wrong: ${error}`))
    }

    function obtainPromiseNumber(){
        generatePromiseNumber().then((response) => alert(`Response: ${response}`))
    }

    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value)
        return Promise.resolve(sessionStorage.setItem(key))
    }

    function showStorage(){ 
        saveSessionStorage('name', 'Giovanna')
        .then((response) => {
            let value = response;
            alert(`Saved Name: ${value}`)
      
        })
        .catch((error) =>{
         alert(`Something went wrong: ${error}`)
        })
        .finally(()=> alert('SUCCESS: Name saved and retreived'))
    }


    return (

        <div>
        <h1>Async, Promise examples</h1>
            <button onClick={obtainNumber}>Obtain number</button>
            <button onClick={obtainPromiseNumber}>Obtain promise number</button>
            <button onClick={showStorage}>Save Name and Show</button>
        </div>
    );
}

export default AsyncExample;
