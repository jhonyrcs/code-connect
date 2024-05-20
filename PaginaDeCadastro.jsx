function PaginaDeCadastro() {
    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    
    return (
        <div className='container-login'>
            <img src='./img/imagem-cadastro.png' alt='Uma mulher negra de cabelos crespos usando óculos e mexendo no computador, também há o logo da CodeConnect' />
            <section>
                <form onSubmit={handleSubmit}>
                    <Titulo>Cadastro</Titulo>
                    <Subtitulo>Olá! Preencha seus dados.</Subtitulo>
                    <CampoDeDigitacao 
                        label='Nome'
                        tipo='text'
                        placeholder='Digite o seu nome'
                        id='nome'
                        value={nome}
                        setValor={setNome} />
                    <CampoDeDigitacao 
                        label='E-mail'
                        tipo='email'
                        placeholder='Digite o seu e-mail'
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
                    </fieldset>
                    <Botao>Cadastrar</Botao>
                </form>
                <div className='container-links'>
                    <Texto classe='container-links__titulo'>ou entre com outras contas</Texto>
                    <ul>
                        <ItemRedesSociais link='https://github.com' nome='Github' />
                        <ItemRedesSociais link='https://google.com' nome='Google' />
                    </ul>
                    <Texto classe='container-links__texto'>Já tem conta?
                        <Link link='./index.html'> Faça seu login!</Link>
                    </Texto>
                </div>
            </section>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PaginaDeCadastro />);
