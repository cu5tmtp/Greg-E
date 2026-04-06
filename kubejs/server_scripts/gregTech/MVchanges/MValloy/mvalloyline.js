ServerEvents.recipes(event => {

    event.recipes.gtceu.mixer('uknowncompoundwhat')
        .itemInputs(
            'gtceu:chromium_dust',
            'gtceu:emerald_dust',
            'gtceu:zinc_dust'
        )
        .itemOutputs(
            'kubejs:uncomp'
        )
        .duration(200)
        .EUt(120) 

    event.recipes.gtceu.wiremill('ultrawire')
        .itemInputs(
            'kubejs:supingot'
        )
        .itemOutputs(
            '8x kubejs:supcables'
        )
        .duration(200)
        .EUt(120)
    
    event.recipes.gtceu.assembler('mvalloyingotyummy')
        .itemInputs(
            '2x kubejs:supcables',
            'kubejs:lvalloy'
        )
        .itemOutputs(
            'kubejs:mvalloy'
        )
        .inputFluids(
            'kubejs:mvcas 10'
        )
        .duration(100)
        .EUt(120)

    event.recipes.gtceu.extractor('mvcircuitslurry')
        .itemInputs(
            '#gtceu:circuits/mv'
        )
        .outputFluids(
            'kubejs:mvcas 1000'
        )
        .duration(100)
        .EUt(120)

})