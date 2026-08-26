ServerEvents.recipes((event) => {

    event.recipes.gtceu.distillation_tower()
        .inputFluids(
            'gtceu:fracturedoil 5000'
        )
        .outputFluids(
            'gtceu:fracturedheavyoil 2500', 
            'gtceu:fracturedlightoil 1200',
            'gtceu:fracturednaphta 1000'
        )
        .itemOutputs(
            'gtceu:sulfur_dust'
        )
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(500)
        .disableDistilleryRecipes(true)

    event.recipes.gtceu.large_chemical_reactor()
        .inputFluids(
            'gtceu:fracturedheavyoil 1000',
            'gtceu:hydrogen 750'
        )
        .outputFluids(
            'gtceu:purifiedfracturedheavyoil 800'
        )
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)
        .circuit(15)

    event.recipes.gtceu.centrifuge()
        .inputFluids(
            'gtceu:purifiedfracturedheavyoil 500'
        )
        .itemOutputs(
            'gtceu:small_sulfur_dust'
        )
        .outputFluids(
            'gtceu:fracturedlubricantbase 350',
            'gtceu:carbon_monoxide 100'
        )
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(250)
        .circuit(5)

    event.recipes.gtceu.mixer()
        .itemInputs(
            'gtceu:small_naquadria_dust'
        )
        .inputFluids(
            'gtceu:fracturedlubricantbase 300'
        )
        .outputFluids(
            'gtceu:fracturedlubricant 150'
        )
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)
        .circuit(5)

})