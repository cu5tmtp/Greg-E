ServerEvents.recipes((event) => {

    event.recipes.gtceu.extractor()
        .itemInputs(
            'kubejs:licoriceplant'
        )
        .outputFluids(
            'gtceu:licorice_extract 250'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)

    event.recipes.gtceu.chemical_reactor()
        .itemInputs(
            'sugar',
            'gtceu:starch_dust'
        )
        .inputFluids(
            'gtceu:licorice_extract 100',
            'gtceu:glucose_syrup 100',
            'minecraft:water 50'
        )
        .outputFluids(
            'gtceu:licorice_mixture 500'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(500)

    event.recipes.gtceu.candyomatic()
        .inputFluids(
            'gtceu:licorice_mixture 250'
        )
        .itemOutputs(
            'kubejs:licorice'
        )
        .notConsumable('gtceu:cylinder_casting_mold')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)

    event.recipes.gtceu.mixer()
        .itemInputs(
            'gtceu:salt_dust'
        )
        .inputFluids(
            'gtceu:eggyolk 150'
        )
        .itemOutputs(
            'kubejs:scrambledeggs'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(350)

    event.recipes.gtceu.candyomatic()
        .itemInputs(
            'kubejs:licorice',
            'kubejs:choccybar',
            '2x kubejs:candy'
        )
        .itemOutputs(
            'kubejs:candybag'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(300)
        .circuit(4)

    event.recipes.gtceu.candyomatic()
        .itemInputs(
            'kubejs:candybag'
        )
        .itemOutputs(
            'kubejs:rottenapple'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(10)
        .circuit(4)


})