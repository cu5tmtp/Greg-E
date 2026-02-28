ServerEvents.recipes((event) =>{

    event.shaped(
        Item.of('kubejs:hhead', 1),
        [
            'A A',
            'AAA',
            'A A'
        ],
        {
            A: 'minecraft:cobblestone',
        }
    )

    event.shaped(
        Item.of('minecraft:blackstone', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:cobblestone',
            B: 'minecraft:black_dye'
        }
    )

    event.shaped(
        Item.of('minecraft:blackstone', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:sand',
            B: 'minecraft:red_dye'
        }
    )

    event.shaped(
        Item.of('minecraft:deepslate', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:blackstone',
            B: 'minecraft:black_dye'
        }
    )

    event.shaped(
        Item.of('minecraft:reinforced_deepslate', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:deepslate',
            B: 'minecraft:iron_ingot'
        }
    )

    event.shaped(
        Item.of('kubejs:dwpliblue'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'kubejs:dwppart'
        }
    )

    event.shaped(
        Item.of('kubejs:vanaheimingotblock', 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'kubejs:vanaheimingot'
        }
    )

    event.shaped(
        Item.of('gregecore:coolant_input_machine', 1),
        [
            ' A ',
            'DED',
            'CBC'
        ],
        {
            A: '#gtceu:circuits/ev',
            B: 'gtceu:ev_machine_hull',
            C: 'gtceu:tungsten_steel_ingot',
            D: 'gtceu:steel_large_fluid_pipe',
            E: 'minecraft:bucket'

        }
    )

    event.shapeless(
        Item.of('kubejs:vanaheimingot', 9), 
        'kubejs:vanaheimingotblock'
    )

})