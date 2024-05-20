export function Titulo({children}) {
    return (
        <h1 className='form__titulo'>{children}</h1>
    )
}

export function Subtitulo({children}) {
    return (
        <h2 className='form__texto'>{children}</h2 >
    )
}

export function CampoDeDigitacao({label, tipo, placeholder, id, value, setValor}) {
    return (
        <div className='form__campo-digitacao'>
            <label for={id}>{label}</label>
            <input type={tipo}
                placeholder={placeholder}
                required
                id={id}
                value={value}
                onChange={(evento) => setValor(evento.target.value)}/>
        </div>            
    )
}

export function Checkbox() {
    return(
        <>
            <div className='form__campo-checkbox'>
                <input type='checkbox' id='lembrar'/>
                <label for='lembrar' />
            </div>
            <p className='form__opcoes-texto'>Lembrar-me</p>
        </>
    )
}

export function Botao({children}) {
    return(
        <button className='form__botao' type='submit'>{children}</button>
    )
}

export function Texto({classe, children}) {
    return (
        <p className={classe}>{children}</p>
    )
}

export function ItemRedesSociais({link, nome}) {
    return (
        <li>
            <a href={link}>
                <img src={`./img/${nome}.svg`} alt={`ícone do ${nome}`}/>
                {nome}
            </a>
        </li>
    )
}

export function Link({link, children}) {
    return (
        <a href={link} className='container-links__link'>
            {children}
        </a>
    )
}
