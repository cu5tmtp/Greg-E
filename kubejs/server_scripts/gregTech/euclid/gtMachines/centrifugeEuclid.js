ServerEvents.recipes((event) => {

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            '4x gtceu:murkyspacetime_dust'
        )
        .outputFluids(
            'gtceu:spacetime 250'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)

    event.recipes.gtceu.fluid_solidifier()
        .inputFluids(
            'gtceu:spacetime 250'
        )
        .itemOutputs(
            '2x gtceu:spacetime_dust'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)

})