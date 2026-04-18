ServerEvents.recipes(event => {

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

    

    

})