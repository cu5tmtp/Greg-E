ServerEvents.recipes(event => {

    event.shaped(
        Item.of('gtceu:specmetheat', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/iv',
            B: 'minecraft:magma_block',
            C: 'undergarden:cloggrum_block',
            D: 'undergarden:froststeel_block',
            E: 'gtceu:iv_machine_hull'
        }
    )

    event.shaped(
        Item.of('gregecore:bigchemical', 1),
        [
            'EAE',
            'DBD',
            'CEC'
        ],
        {
            A: 'kubejs:ancientfilter',
            B: 'gtceu:iv_machine_hull',
            C: 'gtceu:iv_electric_motor',
            D: 'gtceu:iv_electric_pump',
            E: '#gtceu:circuits/iv'
        }
    )

    event.shaped(
        Item.of('gregecore:threading_one_overlcock_machine', 1),
        [
            'CCC',
            'ABA',
            'CCC'
        ],
        {
            A: 'gregecore:threading_one_machine',
            B: '#gtceu:circuits/iv',
            C: 'gregecore:forgotten_ingot_cable_single_wire'
        }
    )


})