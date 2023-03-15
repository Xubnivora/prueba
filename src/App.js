import logo from './logo.svg';
import './App.css';
import PrimeReact from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import React, { useState } from "react";
import 'primereact/resources/themes/lara-light-indigo/theme.css';  
import 'primereact/resources/primereact.css';                       
import 'primeflex/primeflex.css';   
import { InputMask } from 'primereact/inputmask';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import departamentos from './departamentos.json';
import axios from 'axios';





function App() {

  const [name, setName] = useState('');
  const [direction, setDirection] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [nacimiento, setNacimiento] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedMunicipio, setSelectedMunicipio] = useState(null);
  const [selectedTipo, setSelectedTipo] = useState(null);

  const tipo = [
    { name: 'Electronicos', code: 'NY' },
    { name: 'Porcelana', code: 'RM' },
    { name: 'Vidrio', code: 'LDN' },
    { name: 'Madera', code: 'IST' },
    { name: 'Particula', code: 'PRS' }
];







  const load = () => {
  




    setTimeout(() => {


      axios.post(`https://localhost:5000/express_productos`)
      .then(res => {
        const productos = res.data;
  
      })
     
    }, 2000);
};


const groupedItemTemplate = (option) => {
  return (
      <div className="flex align-items-center">
          <img alt={option.label} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
          <div>{option.label}</div>
      </div>
  );
};

  return (
    <div className="App">

    <form>
    <div class="card-container blue-container overflow-hidden">
    <div class="flex">
                <div class="flex-initial flex align-items-center justify-content-center bg-blue-300 font-bold text-white m-1 px-1 py-1 border-round">
                  Formulario de registro de productos</div>
              </div>
            <div class="flex">
                <div class="flex-initial flex align-items-center justify-content-center bg-blue-300 font-bold text-white m-1 px-1 py-1 border-round">
                  Nombre</div>
                <div class="flex-initial flex align-items-center justify-content-center bg-blue-300 font-bold text-white m-1 px-1 py-1 border-round">              
                <InputText id="nombre" value={name} onChange={(e) => setName(e.target.value)} /></div>
              </div>
           <div class="flex">
                <div class="flex-initial flex align-items-center justify-content-center bg-blue-300 font-bold text-white m-1 px-1 py-1 border-round">
                  Direccion</div>
                <div class="flex-initial flex align-items-center justify-content-center bg-blue-300 font-bold text-white m-1 px-1 py-1 ">
                <InputText id="direccion" value={direction} onChange={(e) => setDirection(e.target.value)} /></div>
            </div>  
            <div class="flex">
                <div class="flex-initial flex align-items-center justify-content-center bg-blue-300 font-bold text-white m-1 px-1 py-1 border-round">
                  Correo</div>
                <div class="flex-initial flex align-items-center justify-content-center bg-blue-300 font-bold text-white m-1 px-1 py-1 ">
                <InputText  id="correo" value={correo}   onChange={(e) => setCorreo(e.target.value)} /></div>
            </div>   
            <div class="flex">
                <div class="flex-initial flex align-items-center justify-content-center bg-blue-300 font-bold text-white m-1 px-1 py-1 border-round">
                  Télefono</div>
                <div class="flex-initial flex align-items-center justify-content-center bg-blue-300 font-bold text-white m-1 px-1 py-1 ">
                <InputMask  id="telefono" value={telefono}  mask="(999) 9999-9999" placeholder="(999) 9999-9999" onChange={(e) => setTelefono(e.target.value)} /></div>
            </div>  
            <div class="flex">
                <div class="flex-initial flex align-items-center justify-content-center bg-blue-300 font-bold text-white m-1 px-1 py-1 border-round">
                  Fecha de Nacimiento</div>
                <div class="flex-initial flex align-items-center justify-content-center bg-blue-300 font-bold text-white m-1 px-1 py-1 ">
                <Calendar value={nacimiento} onChange={(e) => setNacimiento(e.value)} /></div>
            </div>  

            <div class="flex">
                <div class="flex-initial flex align-items-center justify-content-center bg-blue-300 font-bold text-white m-1 px-1 py-1 border-round">
                  Municipio</div>
                <div class="flex-initial flex align-items-center justify-content-center bg-blue-300 font-bold text-white m-1 px-1 py-1 ">
                <Dropdown value={selectedMunicipio} onChange={(e) => setSelectedMunicipio(e.value)} options={departamentos} optionLabel="label" 
                optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} className="w-full md:w-14rem" placeholder="Select a City" /></div>
            </div>  
            <div class="flex">
                <div class="flex-initial flex align-items-center justify-content-center bg-blue-300 font-bold text-white m-1 px-1 py-1 border-round">
                  Tipo de producto</div>
                  <div class="flex-initial flex align-items-center justify-content-center bg-blue-300 font-bold text-white m-1 px-1 py-1 ">
            <Dropdown value={selectedTipo} onChange={(e) => setSelectedTipo(e.value)} options={tipo} optionLabel="name" 
                placeholder="Seleccione tipo" className="w-full md:w-14rem" />
                    </div> 
        </div>
          
        </div>
        <Button label="Submit" icon="pi pi-check" loading={loading} onClick={load} />

  
     </form>

    </div>


  );
}

export default App;
