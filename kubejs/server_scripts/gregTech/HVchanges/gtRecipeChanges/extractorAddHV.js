ServerEvents.recipes((event) => {

    event.recipes.gtceu.extractor('deepslatedrillingfluid')
        .itemInputs(
            '4x kubejs:deepslateearth'
        )
        .outputFluids(
            'kubejs:deepdrill 3000'
        )
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])

})