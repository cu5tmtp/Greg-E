ServerEvents.recipes(event =>{

    event.shaped(
        Item.of('gtceu:industrialfilter', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: 'kubejs:animated/draconicprocessor',
            B: 'gtceu:sturdy_machine_casing',
            C: 'gtceu:reaction_safe_mixing_casing',
            D: 'gtceu:high_temperature_smelting_casing',
            E: 'gtceu:uhv_machine_hull'
        }
    )

    event.recipes.gtceu.vacuum_freezer('getcoolednaquadron')
        .inputFluids(
            'gtceu:naquadron_delta_plasma 144'
        )
        .outputFluids(
            'gtceu:naquadron_delta 144'
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UHV])

})