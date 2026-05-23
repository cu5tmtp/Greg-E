StartupEvents.registry('item', event => {

    event.create('manaapple').food(food => {
        food
        .hunger(10)
        .saturation(2)
    })

    event.create('manabread').food(food => {
        food
        .hunger(14)
        .saturation(2)
        .effect('minecraft:absorption', 300, 1, 1)
    })

})