ServerEvents.recipes((event) => {

    event.recipes.gtceu.fluid_heater()
        .itemInputs(
            'sugar'
        )
        .outputFluids(
            'gtceu:molten_sugar 250'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)

    event.recipes.gtceu.extractor()
        .itemInputs(
            'apple'
        )
        .outputFluids(
            'gtceu:apple_extract 500'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)

    event.recipes.gtceu.candyomatic()
        .itemInputs(
            'kubejs:rawcolor'
        )
        .inputFluids(
            'gtceu:apple_extract 250',
            'gtceu:molten_sugar 250'
        )
        .itemOutputs(
            '4x kubejs:candy'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(300)
        .circuit(4)

})