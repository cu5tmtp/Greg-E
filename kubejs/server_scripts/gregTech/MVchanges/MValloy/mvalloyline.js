ServerEvents.recipes(event => {

    event.recipes.gtceu.mixer('uknowncompoundwhat')
        .itemInputs(
            '3x gtceu:chromium_dust',
            'gtceu:emerald_dust',
            '6x gtceu:zinc_dust'
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
        .duration(500)
        .EUt(120)

    event.recipes.gtceu.extractor('mvcircuitslurry')
        .itemInputs(
            '#gtceu:circuits/mv'
        )
        .outputFluids(
            'kubejs:mvcas 1000'
        )
        .duration(500)
        .EUt(120)

})