;(() => {
    const addMenu = () => {
        const group = document.querySelector('.css-11wlziv-NavControls')
        if (group) {
            const newNode = document.createElement('a')
            group.insertBefore(newNode, group.childNodes[0])
            const link = document.querySelector('.css-11wlziv-NavControls a')
            link.innerHTML = '<a href="/about">about</a>'
        }
    }

    setTimeout(() => {
        addMenu()
    }, 500)
})()
