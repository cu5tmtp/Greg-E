ServerEvents.recipes((event) => {

    event.recipes.gtceu.autoclave('crystallizelava')
        .itemInputs(
            'minecraft:netherrack'
        )
        .inputFluids(
            'kubejs:acidinfusedlava 1000'
        )
        .itemOutputs(
            'kubejs:solidacidinfusedlava'
        )
        .duration(100)
        .EUt(1680)


    event.recipes.gtceu.extractor('getacidinfusedlava')
        .itemInputs(
            'kubejs:solidacidinfusedlava'
        )
        .outputFluids(
            'kubejs:acidinfusedlava 1000'
        )
        .duration(100)
        .EUt(1680)


})