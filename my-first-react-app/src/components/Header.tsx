type Props = {
    logoText: string
}

const Header = ({logoText}: Props) =>{
    return(
        <header>
            <h1>{logoText}</h1>
        </header>
    )
}

export default Header