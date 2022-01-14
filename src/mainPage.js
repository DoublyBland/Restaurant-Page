const mainPage = (function() { //mainPage module
    const container = document.getElementById('content');
    setMainPage(container);
    
    function setMainPage(container){
        _removeAllChildNodes(container);
        _addChildren(container);
    

    }

    function _addChildren(container){
        const header = document.createElement('h1');
        header.textContent = "My Restaurant";
        const picture = document.createElement('img');
        picture.src="https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?s=612x612";
        picture.alt="pizza"
        const blurb = document.createElement('p');
        blurb.textContent = `Contrary to popular belief, Lorem Ipsum is
         not simply random text. It has roots in a piece of classical 
         Latin literature from 45 BC, making it over 2000 years old.
          Richard McClintock, a Latin professor at Hampden-Sydney College 
          in Virginia, looked up one of the more obscure Latin words,
           consectetur, from a Lorem Ipsum passage, and going through 
           the cites of the word in classical literature, discovered the
            undoubtable source. Lorem Ipsum comes from sections 1.10.32
             and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                 of Good and Evil) by Cicero, written in 45 BC. This book
                  is a treatise on the theory of ethics, very popular 
                  during the Renaissance. The first line of Lorem Ipsum,
                  "Lorem ipsum dolor sit amet..", comes from a line in 
                  section 1.10.32.`;
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


export {mainPage};