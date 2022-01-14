const menu = (function() { //mainPage module
    const container = document.getElementById('content');
    menu(container);
    
    function menu(container){
        _removeAllChildNodes(container);
        _addChildren(container);
    

    }

    function _addChildren(container){
        const header = document.createElement('h1');
        header.textContent = "Menu";
        const picture = document.createElement('img');
        picture.src="https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?s=612x612";
        picture.alt="pizza"
        const blurb = document.createElement('p');
        blurb.textContent = `Ooh this is some yummy stuff`;
        container.appendChild(header);
        container.appendChild(picture);
        container.appendChild(blurb);
    }

    function _removeAllChildNodes(parent) {
        console.log(parent);
        //console.log(parent.firstChild);
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
});


export {menu};