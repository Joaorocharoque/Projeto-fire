import { useState } from 'react';


function Cadastro() {
    const [formValues, setFormValues] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

    };

    return (

        <form onSubmit={handleSubmit}>

            <div align="center" class="title">
                <h1>Cadastro Cliente</h1>
            </div>

            <br></br>

            <div align="center">
                <input type="text" name="name" placeholder="Nome do Dragão:" onChange={handleInputChange} value={formValues.name || ''} />
                <br></br><br></br>
                <input type="date" name="date" placeholder="Data da Criação:" onChange={handleInputChange} value={formValues.date || ''} />
                <br></br><br></br>
                <input type="text" name="tipo" placeholder="Tipo:" onChange={handleInputChange} value={formValues.tipo || ''} />
                <br></br><br></br>
            </div>
            
            <br></br>
            <div align="center" class="wrapper">
            <a href="/"><button class="button" >Enviar</button></a>
            </div>

            <br></br>
        </form>
    );
}

export default Cadastro;