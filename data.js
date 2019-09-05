let users = [{
    id: 1,
    name: 'Tamas',
    cars: [1, 2]
}, {
    id: 2,
    name: 'Michelle',
    cars: []
}, {
    id: 3,
    name: 'Steven',
    cars: [3]
}]

let cars = [{
    id: 1,
    make: 'Volkswagen',
    model: 'GTI',
    color: 'Red',
    ownedBy: 1
}, {
    id: 2,
    make: 'BMW',
    model: '120',
    color: 'Black',
    ownedBy: 1
}, {
    id: 3,
    make: 'Mercedez',
    model: 'A200',
    color: 'White',
    ownedBy: 3
}]

module.exports = {
    users,
    cars
}