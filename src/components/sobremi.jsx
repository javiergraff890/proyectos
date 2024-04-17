import './sobremi.css'

export default function SobreMi(){

    return(
        <>
            <h1 className="titulo-principal">SOBRE MI</h1>
            <div className="conteiner-sobremi">
                <p>
                    En este sitio iré subiendo proyectos realizados.
                </p>
                <p>
                    Para más información personal consultar en mi <a href="#">Curriculum</a>. 
                </p>

                <p>
                    Lo más reciente con lo que he trabajado involucra a .NET (C#), React (Javascript), SQL server. 
                </p>
                <p>
                    Estoy principalmente interesado en profundizar el aprendizaje en Frameworks para Backend, además por una cuestión de velocidad de desarrollo aprendí lo basico de React para la parte front. Css no es mi fuerte por lo que trato de dedicarle el menor tiempo posible.
                </p>

                <p>
                    Por el momento está subido un único proyecto, proximamente serán más.
                </p>
            </div>
        </>

    )
}