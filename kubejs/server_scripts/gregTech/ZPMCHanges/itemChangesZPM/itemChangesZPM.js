ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gtceu:mobpurgatory', 1),
        [
            'AAA',
            'DBD',
            'CCC'
        ],
        {
            A: '#gtceu:circuits/zpm',
            B: 'gtceu:zpm_machine_hull',
            C: 'mob_grinding_utils:spikes',
            D: 'kubejs:machine_casing_tiled_very_dark_gray'
        }
    )

})