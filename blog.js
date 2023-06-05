class myheader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = 
            '<header>
                <a href="blog.html">The Piston Rings</a>
                <nav>
                    <ul>
                        <li>Trending</li>
                        <li>New</li>
                        <li>Motorsports</li>
                    </ul>
                </nav>
            </header>'
    }
}

customElements.define('my-header',myheader)