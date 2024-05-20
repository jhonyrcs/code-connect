function PaginaDeLogin() {
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('email ' + email)
        console.log('senha ' + senha)
    }
    
    return (
        <div className='container-login'>
            <img src='./img/imagem-login.png' alt='Uma mulher negra de cabelos crespos usando óculos e mexendo no computador, também há o logo da CodeConnect' />
            <section>
                <form onSubmit={handleSubmit}>
                    <Titulo>Login</Titulo>
                    <Subtitulo>Boas-vindas! Faça seu login.</Subtitulo>
                    <CampoDeDigitacao 
                        label='E-mail ou usuário'
                        tipo='email'
                        placeholder='Digite o seu e-mail ou usuário'
                        id='email'
                        value={email}
                        setValor={setEmail} />
                    
                    <CampoDeDigitacao 
                        label='Senha'
                        tipo='password'
                        placeholder='Digite sua senha'
                        id='senha'
                        value={senha}
                        setValor={setSenha} />
                    <fieldset className='form__opcoes'>
                        <Checkbox />
                        <p>
                            <a href='#' aria-label='Recuperar senha esquecida'>Esqueci a senha</a>
                        </p>
                    </fieldset>
                    <Botao>Login</Botao>
                </form>
                <div className='container-links'>
                    <Texto classe='container-links__titulo'>ou entre com outras contas</Texto>
                    <ul>
                        <ItemRedesSociais link='https://github.com' nome='Github' />
                        <ItemRedesSociais link='https://google.com' nome='Google' />
                    </ul>
                    <Texto classe='container-links__texto'>Ainda não tem conta?</Texto>
                    <Link link='./cadastro.html'>Crie seu cadastro!</Link>
                </div>
            </section>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PaginaDeLogin />);
