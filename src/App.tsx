import './App.css'

import Grid from '@mui/material/Grid2' 
import DishTable from './components/DishTable'
import Student from './components/Student'
import fetchDish from './functions/fetchDish';

// PENDIENTE: Cree la interfaz
import { type Dish } from './interface/Dish'


function App() {

  
  // PENDIENTE: Variable de estado y la función de modificación. 
  const {dishData} = fetchDish();
  


  // PENDIENTE: 
  // Realizar una petición asíncrona a la URL. La respuesta es un JSON. 
  // Al recibir la respuesta, actualice la variable de estado.

  


  return (
    <Grid container spacing={5}>

        {/* Student */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe sus datos (apellidos, nombres y paralelo) como props del componente */}
          <Student nombre="Santiago" apellido="Villacis" paralelo={2}></Student>

        </Grid>
        
        {/* DishTable */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe la variable de estado como prop */}
           {dishData && (
          <DishTable data={dishData}></DishTable>
           )}
        </Grid>
        
       
    </Grid>
  )
}

export default App
