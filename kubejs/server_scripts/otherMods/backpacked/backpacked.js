ServerEvents.recipes((event) => {

    event.replaceInput(
        'backpacked:backpack',
        '#forge:leather',
        'botania:manaweave_cloth'
    )

    event.replaceInput(
        'backpacked:backpack',
        'minecraft:iron_ingot',
        'gtceu:steel_ingot'
    )

    event.shaped('kubejs:backpackslot',
        [
            'AAA',
            'ABA',
            'AAA'

        ],
        {
            A: 'botania:mana_string',
            B: 'minecraft:chest'
        }
    )

    event.shaped('kubejs:backpackplusoneslot',
        [
            'AAA',
            'ABA',
            'AAA'

        ],
        {
            A: 'botania:manaweave_cloth',
            B: 'botania:ender_hand'
        }
    )

})