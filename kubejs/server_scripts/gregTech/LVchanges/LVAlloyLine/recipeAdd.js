ServerEvents.recipes(event => {
    
    event.recipes.gtceu.extractor('lvcef_with_ironshard_to_lvalloy_slurry')
        .itemInputs(
            '#gtceu:circuits/lv'
        )
        .outputFluids(
            'kubejs:lvcas 1000'
        )
        .duration(250)
        .EUt(30)    

})