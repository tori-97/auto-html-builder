# Simple Auto Html builder , build due learning purposes.

```txt
With the build function in the main.js file you are able to build html pages, based on JSON input (See Example below). 
```

# Example:
----------
```JSON
[
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
```
