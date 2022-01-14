const headerFooter = (function() { //mainPage module
    const container = document.getElementById('body');
    _addHeader(container);
    _addFooter(container);

    function _addHeader(container){
        const header = document.createElement('div');
        header.classList.add('header');
        const main = document.createElement('button');
        main.textContent = "Main";
        main.setAttribute("id", "main");
        const menu = document.createElement('button');
        menu.textContent = "Menu";
        menu.setAttribute("id", "menu");
        const contact = document.createElement('button');
        contact.textContent = "Contact";
        contact.setAttribute("id", "contact");
        header.appendChild(main);
        header.appendChild(menu);
        header.appendChild(contact);

        container.appendChild(header);
    }

    function _addFooter(container){
        const footer = document.createElement('div');
        footer.classList.add('footer');
        container.appendChild(footer);
    }
    
});

export {headerFooter};