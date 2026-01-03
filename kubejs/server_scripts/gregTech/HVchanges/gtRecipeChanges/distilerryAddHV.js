ServerEvents.recipes((event) => {

    event.recipes.gtceu.distillery('getheliuminhv')
        .inputFluids(
            'gtceu:ender_air 1000'
        )
        .outputFluids(
            'gtceu:helium 20'
        )
        .duration(500)
        .EUt(480)
        .circuit(1)

})