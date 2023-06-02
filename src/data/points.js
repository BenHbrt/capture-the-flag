const colors = [
    "white",
    "darkblue",
    "yellow",
    "lightblue",
    "green",
    "orange",
    "pink"
]

const points = [
    -10, -5, 5, 10, 15, 20, 30
]

const getRandomColors = () => {
    const colorsArray = []
    for (let i = 0; i < colors.length; i++) {
        let isChecking = true
        while (isChecking) {
            const newItem = Math.floor(Math.random() * colors.length)
            if (!colorsArray.includes(colors[newItem])) {
                colorsArray.push(colors[newItem])
                isChecking = false
            }
        }
    }
    return colorsArray
}

export const getRandomFlags = () => {
    return getRandomColors().concat(getRandomColors())
}

export const getPoints = () => {
    let newArray = []
    for (let i = 0; i < points.length; i++) {
        let isChecking = true
        while (isChecking) {
            const newItem = Math.floor(Math.random() * points.length)
            if (!newArray.includes(points[newItem])) {
                newArray.push(points[newItem])
                isChecking = false
            }
        }
        
    }
    const pointsObj = {}
    let pointsPos = 0
    colors.forEach((color) => {
        pointsObj[color] = newArray[pointsPos]
        pointsPos += 1
    })
    return pointsObj
}