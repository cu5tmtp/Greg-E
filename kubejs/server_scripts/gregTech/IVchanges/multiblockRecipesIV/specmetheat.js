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


})