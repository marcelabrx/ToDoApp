
function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center text-white bg-gray-900 p-4">
            <ul className="flex items-center space-x-4 mb-4">
            <li>
                <a href="https://github.com/marcelabrx" target="_blank">
                <i className="fa-brands fa-github-alt" aria-hidden="true" />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/marcelabritos/" target="_blank">
                <i className="fa-brands fa-linkedin" aria-hidden="true" />
                </a>
            </li>
            <li>
                <a href="mailto:marcelalbritos@gmail.com" target="_blank">
                <i className="fa-solid fa-envelope" aria-hidden="true" />
                </a>
            </li>
            </ul>
            <p className="text-sm">© 2023 My ToDo List. All rights reserved.</p>
        </footer>

    )
}

export default Footer