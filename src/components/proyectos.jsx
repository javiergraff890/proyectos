import '/src/components/proyectos.css'
import { data } from '/src/assets/dataProyects'
import { useState, useRef, useEffect } from 'react'


export default function Proyectos(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [pantallaChica, setPantallaChica] = useState(false);
    const listRef = useRef(null);
    const initialized = useRef(false);

    //pedido a gpt
    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 500px)');
    
        const handleMediaQueryChange = (event) => {
            setPantallaChica(event.matches);
        };
    
        mediaQuery.addEventListener('change', handleMediaQueryChange);
        setPantallaChica(mediaQuery.matches);
    
        return () => {
          mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
      }, []);


    useEffect( () => {
        if (initialized.current){
            console.log("asdad")
            const img = listRef.current.querySelectorAll("li > img")[currentIndex];
            if (img){
                img.scrollIntoView({
                    behavior: "smooth"
                });
            }
        } else {
            initialized.current = true;
        }
        
    }, [currentIndex])

    const cambiarImagen = (dir) => {
        if (dir == "der"){
            if (currentIndex == data.length-1)
                setCurrentIndex(0);
            else
                setCurrentIndex(currentIndex+1);
        } else if (dir == "izq"){
            if (currentIndex == 0)
                setCurrentIndex(data.length-1);
            else
                setCurrentIndex(currentIndex-1);
        }
    }

    const iraProyecto = (indice) => {
        setCurrentIndex(indice);
    }

    return(
        <>
        <h1 className="titulo-principal">PROYECTOS</h1>
        <div className="main-conteiner">
            <div className="slider-conteiner">
                <div onClick={ () => cambiarImagen("izq")} className="flecha-izquierda">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" ><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                    
                </div>
                <div onClick={ () => cambiarImagen("der")} className="flecha-derecha">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" ><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                </div>
                <div className="conteiner-images">
                    <ul className="ul-imagenes" ref={listRef}>
                    {
                        data.map( (item) => {
                            return <a key={item.id} href={item.url}>
                            <li className="li-imagenes" key={item.id}>
                                { pantallaChica ?
                                    <img src={item.imgUrl} />
                                    :
                                    <img src={item.imgUrlVert} />
                                }
                            </li>
                            </a>
                        })
                    }
                    </ul>
                </div>
                <div className="conteiner-puntos">
                    {
                        data.map( (_, indx) => (
                            <div key={indx} className="conteiner-puntos-item" onClick={ () => iraProyecto(indx)}>
                                {indx == currentIndex ?
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" ><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path></svg>
                                : 
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12c.001 5.515 4.487 10.001 10 10.001 5.514 0 10-4.486 10.001-10.001 0-5.514-4.486-10-10.001-10zm0 18.001c-4.41 0-7.999-3.589-8-8.001 0-4.411 3.589-8 8-8 4.412 0 8.001 3.589 8.001 8-.001 4.412-3.59 8.001-8.001 8.001z"></path></svg>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        </>
        
    )
}