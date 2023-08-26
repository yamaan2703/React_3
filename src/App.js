import Input from './components/Input';
import Select from './components/Select';
import Button from './components/Button';
import Table from './components/Table';
import Card from './components/Card';
import React, { useState } from 'react';

import './App.css';

function App() {
  // JS Array .....
   let arr = [
    {
      id: "001",
      name: "Saim Ahmed",
      fatherName: "Ahmed Khan",
      field: "CS/SE",
      institute: "SAIM"
    },
    {
      id: "002",
      name: "Farooq Ali",
      fatherName: "Ali Reyaaz",
      field: "Mechanical",
      institute: "SAIM"
    },
    {
      id: "003",
      name: "Hamza Faizan",
      fatherName: "Faizan Ahmed",
      field: "Diploma",
      institute: "SAIM"
    },
    {
      id: "004",
      name: "Saad Farooq",
      fatherName: "Farooq Ali",
      field: "Electrical",
      institute: "SAIM"
    },
    {
      id: "005",
      name: "Saad Ahmed",
      fatherName: "Ahmed Khan",
      field: "Diploma",
      institute: "SAIM"
    },
   ]

   const [searcValue,setSearchValue] = useState({
    name:'',
    department:''
   });
   const [searchName, setSearchName] = useState('');
   const [filteredArr, setFilteredArr] = useState(arr); 
   const [searchedData,setSearchedData] = useState([])

   const searchInputHandler =(e)=>{
      setSearchValue({
        ...searcValue,
        [e.target.id] : e.target.value
      })
   }

   const handleSearchClick = () => {

    console.log(searcValue)
    //  const filteredData = arr.filter(item => item.name.toLowerCase().includes(searchName.toLowerCase()));
    const filterData = arr.filter((item) => {
      console.log(item.name.toLowerCase())
      console.log(searcValue.department.toLowerCase())
      return item.name.toLowerCase()==searcValue.name.toLowerCase() && item.field.toLowerCase()==searcValue.department.toLowerCase()
    })
    console.log(filterData) 
    setSearchedData(filterData);
   };

  return (
    <div className="">
   <h1 className='text-center text-5xl text-white italic bg-slate-500 p-3'>Assignmnet 3</h1>
   <div className='container m-9'>
  {/* Add Components */}

  {/* First Components */}
   <div className='main_react'>
    {/* <Input /> */}
    <Input onChange={(e)=>searchInputHandler(e)} buttonClick={handleSearchClick} /> 
    {/* <Input onChange={(e) => setSearchName(e.target.value)} />  */}
    {/* <Select /> */}
    {/* <Button buttonValue="Search" buttonClick={()=>{handleSearchClick()}} />  */}
   </div>

   <div className='main_react_2'></div>
    <Table />
    {searchedData.length >0 
    ?
    searchedData.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            name={item.name}
            fatherName={item.fatherName}
            field={item.field}
            institute={item.institute}
          >
          </Card>
      ))
    :
    <h1 className='text-white text-center'>No Data Found</h1>
    }
   </div>


    </div>
  );
}

export default App;
