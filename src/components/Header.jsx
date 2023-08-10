
function Header() {
    return (
        <header className="flex items-center justify-center h-32 my-8">
            <h1 className="font-extrabold leading-relaxed user-select-none text-transparent text-5xl bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
                <span className="inline-block">T</span>
                <span className="inline-block">O</span>
                <span className="inline-block">D</span>
                <span className="inline-block">O</span>
                <span className="inline-block mx-2"> </span>
                <span className="inline-block">L</span>
                <span className="inline-block">I</span>
                <span className="inline-block">S</span>
                <span className="inline-block">T</span>
                <i className="fa-solid fa-circle-check inline-block animate-bounce text-green-400" />
            </h1>
        </header>
    )
}

export default Header
