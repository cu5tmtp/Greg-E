ServerEvents.recipes(event =>{

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