const CONFIG = ((element, config)=>{
    for(let i in config){
        element[i] = config[i];
    }    
});
const CSS = ((element, args)=>{
    for(let i in args){
        element.style[i] = args[i];
    }
});

function createElement(element){
    function buildChildren(parent, children){
        const child = document.createElement(children.tagName);
        CONFIG(child, children.config);
        CSS(child, children.style);

        parent.appendChild(child);

        if ( children.children !== undefined ){
            if ( children.children.length > 0 ){
                build(child, children.children)
            }
        }


    }

    const e = document.createElement(element.tagName);
    CONFIG(e, element.config);
    CSS(e, element.style)

    if ( element.children !== undefined ){
        if (element.children.length > 0){
            for(let i=0;i < element.children.length ;i++){
               buildChildren(e, element.children[i])
            }
        }
    }

    return e;
}
function build(name, page = []){
    const app = document.querySelector(name);
    page.forEach(element => {
        app.appendChild(createElement(element))
    });
}


function init(){
    const page = [
        {
            tagName: "div",
            config: {
                className: "navbar",
            },
            children: [
                {
                    tagName: "div",
                    config: {
                        className: "navbar-title",
                        textContent: "Home"
                    }
                }
            ],
            style: {
                backgroundColor: "#111",
                color: "#cacaca",
                width: "100%",
                height: "4.5rem",
            }
        }
    ]

    build('.app', page)
}

// window.onload = init();
