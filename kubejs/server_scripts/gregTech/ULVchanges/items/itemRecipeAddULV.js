ServerEvents.recipes((event) => {

    //Add item recipes
    event.shaped(
        Item.of('kubejs:hammer', 1),
        [
            'AAA',
            'ABA',
            'B  '
        ],
        {
            A: 'minecraft:cobblestone',
            B: 'minecraft:stick'
        }
    )

    event.shaped(
        Item.of('gtceu:red_alloy_single_cable', 1),
        [
            '   ',
            'ABA',
            '   '
        ],
        {
            A: 'kubejs:insulation',
            B: '2x gtceu:red_alloy_single_wire'
        }
    )

    event.shaped(
        Item.of('gtceu:tin_single_cable', 1),
        [
            '   ',
            'ABA',
            '   '
        ],
        {
            A: 'kubejs:insulation',
            B: '2x gtceu:tin_single_wire'
        }
    )

    event.shaped(
        Item.of('kubejs:insulation', 1),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'gtceu:sticky_resin',
            B: 'minecraft:paper'
        }
    )

    event.shaped(
        Item.of('gtceu:wrought_iron_ingot', 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'gtceu:wrought_iron_nugget',
        }
    )

    event.shaped(
        Item.of('gtceu:tin_dust', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:cobblestone',
            B: '#gtceu:tools/crafting_mortars'
        }
    )

    event.shaped(
        Item.of('minecraft:iron_block', 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'minecraft:iron_ingot',
        }
    )

    event.recipes.minecraft.campfire_cooking(
        'minecraft:glass',
        'gtceu:glass_dust',
        0,
        600
    )

    event.recipes.minecraft.campfire_cooking(
        'minecraft:string',
        '#minecraft:leaves',
        0,
        200
    )

    event.shapeless(
        Item.of('minecraft:iron_nugget', 9),
        [
            'minecraft:iron_ingot'
        ]
    )

    event.shapeless(
        Item.of('minecraft:iron_ingot', 1),
        [
            '9x minecraft:iron_nugget'
        ]
    )

    event.shapeless(
        Item.of('minecraft:iron_ingot', 9),
        [
            'minecraft:iron_block'
        ]
    )

    event.shapeless(
        Item.of('gtceu:red_alloy_dust', 1),
        [
            '4x minecraft:redstone',
            'gtceu:copper_dust',
        ]
    )

    event.shapeless(
        Item.of('gtceu:wrought_iron_nugget', 9),
        [
            'gtceu:wrought_iron_ingot'
        ]
    )

    event.recipes.minecraft.campfire_cooking(
        'gtceu:wrought_iron_ingot',
        'gtceu:sintercoke_ingot',
        0,
        300
    )

    const converterToChange = [
        {number: 1, times: 'single'},
        {number: 4, times: 'quadruple'},
        {number: 8, times: 'octal'},
        {number: 16, times: 'hex'},
    ]

    converterToChange.forEach(change => {

        event.remove( { id: `gtceu:shaped/ulv_${change.number}a_energy_converter`})

        event.shaped(
            Item.of(`gtceu:ulv_${change.number}a_energy_converter`, 1),
            [
                ' A ',
                'ABA',
                ' A '
            ],
            {
                A: `gtceu:red_alloy_${change.times}_wire`,
                B: 'gtceu:ulv_machine_casing'
            }
        )
    })

});