ServerEvents.recipes((event) => {

    event.recipes.gtceu.antimassspectro()
        .notConsumable('kubejs:freemans')
        .outputFluids(
            'gtceu:lambda_particles 10000'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

})