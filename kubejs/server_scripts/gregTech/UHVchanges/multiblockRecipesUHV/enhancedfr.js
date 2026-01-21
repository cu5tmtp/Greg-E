ServerEvents.recipes((event) => {

    event.recipes.gtceu.advanced_fusion("getneutroniumfaster")
        .inputFluids(
            'gtceu:americium 1000',
            'gtceu:naquadria 1000'
        )
        .outputFluids(
            'gtceu:neutronium 2000'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .addData('heat_level', 2700)

});