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

    event.create('choccybar').food(food => {
        food
            .hunger(20)
            .saturation(1)
    }).displayName('Chocolate Bar')

    event.create('peanuts').food(food => {
        food
            .hunger(2)
            .saturation(1)
    }).displayName('Peanuts')

    event.create('mashedpotato').food(food => {
        food
            .hunger(6)
            .saturation(1)
    }).displayName('Mashed Potato')

    event.create('crushedpeanuts').food(food => {
        food
            .hunger(2)
            .saturation(1)
    }).displayName('Crushed Peanuts')

    event.create('nougatplate').food(food => {
        food
            .hunger(4)
            .saturation(1)
    }).displayName('Nougat Plate')

    event.create('candy').food(food => {
        food
            .hunger(1)
            .saturation(1)
    }).displayName('Candy')

    event.create('licorice').food(food => {
        food
            .hunger(1)
            .saturation(1)
    }).displayName('Licorice')

    event.create('scrambledeggs').food(food => {
        food
            .hunger(16)
            .saturation(1)
    }).displayName('Scrambled Eggs')

})