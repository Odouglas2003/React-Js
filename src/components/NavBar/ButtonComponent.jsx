import './NavBar.css';
export default function ButtonComponent({nombre}){
    const handleClick = () => {
        alert(`Estas en la seccion de ${nombre}`);
      };

    return(
        <>
        <button onClick={handleClick} className="boton mt-3 ms-5">
            {nombre}
        </button>
        </>
    );
}