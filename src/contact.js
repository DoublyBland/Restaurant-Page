const contact = (function() { //mainPage module
    const container = document.getElementById('content');
    setContact(container);
    
    function setContact(container){
        _removeAllChildNodes(container);
        _addChildren(container);
    

    }

    function _addChildren(container){
        const header = document.createElement('h1');
        header.textContent = "Contact";
        const picture = document.createElement('img');
        picture.src="https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?s=612x612";
        picture.alt="pizza"
        const blurb = document.createElement('p');
        blurb.textContent = `This is the contact page. Behold our contacts`;
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


export {contact};