ServerEvents.recipes(event => {

    event.recipes.gtceu.centrifuge('getgamma')
        .inputFluids(
            'gtceu:nebulon_gamma_slurry 144'
        )
        .outputFluids(
            'gtceu:naquadah 72',
            'gtceu:nebulon_gamma 72'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
    
})