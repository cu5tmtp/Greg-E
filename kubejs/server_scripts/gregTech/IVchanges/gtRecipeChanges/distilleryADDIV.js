ServerEvents.recipes((event) => {

    event.remove( {id: "gtceu:distillation_tower/distill_liquid_ender_air"})
    event.recipes.gtceu.distillation_tower("distilenderair")
        .inputFluids(
            'gtceu:liquid_ender_air 200000'
        )
        .outputFluids(
            'gtceu:radon 1000',
            'gtceu:tritium 10000',
            'gtceu:krypton 1000',
            'gtceu:xenon 1000',
            'gtceu:nitrogen_dioxide 122000',
            'gtceu:deuterium 50000',
            'gtceu:helium 130000'
        )
        .chancedOutput(
            'gtceu:ender_pearl_dust', 100, 0
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2000)

})