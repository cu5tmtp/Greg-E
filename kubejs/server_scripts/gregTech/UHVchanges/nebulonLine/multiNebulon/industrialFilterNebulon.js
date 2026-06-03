ServerEvents.recipes(event => {

        event.shaped(
        Item.of('gtceu:industrialfilter', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/uhv',
            B: 'gtceu:sturdy_machine_casing',
            C: 'gtceu:reaction_safe_mixing_casing',
            D: 'gtceu:high_temperature_smelting_casing',
            E: 'gtceu:uhv_machine_hull'
        }
    )

    event.recipes.gtceu.industrialfilter('getstrainedndinebulon1')
        .inputFluids(
            'gtceu:dinebulon_zeta_omni_fluid 144'
        )
        .outputFluids(
            'gtceu:dinebulon_zeta 72'
        )
        .duration(800)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.industrialfilter('getstrainedndinebulon2')
        .inputFluids(
            'gtceu:dinebulon_zeta_omni_fluid 144'
        )
        .outputFluids(
            'gtceu:dinebulon_zeta 144'
        )
        .notConsumable('kubejs:naquadahfilter')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(2)

    event.recipes.gtceu.industrialfilter('getstrainedndinebulon3')
        .inputFluids(
            'gtceu:dinebulon_zeta_omni_fluid 144'
        )
        .outputFluids(
            'gtceu:dinebulon_zeta 288'
        )
        .notConsumable('kubejs:nebulonfilter')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(3)

    event.recipes.gtceu.industrialfilter('getstrainedndinebulon4')
        .inputFluids(
            'gtceu:dinebulon_zeta_omni_fluid 144'
        )
        .outputFluids(
            'gtceu:dinebulon_zeta 566'
        )
        .notConsumable('kubejs:prismaliumfilter')
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(4)

    event.recipes.gtceu.industrialfilter('getstrainednebulon1')
        .inputFluids(
            'gtceu:dinebulon_zeta 144'
        )
        .outputFluids(
            'gtceu:nebulon_zeta 72'
        )
        .duration(800)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.industrialfilter('getstrainednebulon2')
        .inputFluids(
            'gtceu:dinebulon_zeta 144'
        )
        .outputFluids(
            'gtceu:nebulon_zeta 144'
        )
        .notConsumable('kubejs:naquadahfilter')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(2)

    event.recipes.gtceu.industrialfilter('getstrainednebulon3')
        .inputFluids(
            'gtceu:dinebulon_zeta 144'
        )
        .outputFluids(
            'gtceu:nebulon_zeta 288'
        )
        .notConsumable('kubejs:nebulonfilter')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(3)

    event.recipes.gtceu.industrialfilter('getstrainednebulon4')
        .inputFluids(
            'gtceu:dinebulon_zeta 144'
        )
        .outputFluids(
            'gtceu:nebulon_zeta 566'
        )
        .notConsumable('kubejs:prismaliumfilter')
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(4)

    

    

})