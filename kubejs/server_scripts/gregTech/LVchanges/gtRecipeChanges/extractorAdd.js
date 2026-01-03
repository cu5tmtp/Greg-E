ServerEvents.recipes((event) => {

    event.recipes.gtceu.extractor('rawcolor_from_leaves')
        .itemInputs(
            '8x minecraft:oak_leaves'
        )
        .itemOutputs(
            'kubejs:rawcolor'
        )
        .duration(150)
        .EUt(30)

    event.recipes.gtceu.extractor('lava_from_cobble')
        .itemInputs(
            '8x minecraft:cobblestone'
        )
        .outputFluids(
            'minecraft:lava 100'
        )
        .duration(70)
        .EUt(30)

    event.recipes.gtceu.extractor('raw_color_to_essence')
        .itemInputs(
            'kubejs:rawcolor'
        )
        .outputFluids(
            'kubejs:myessence 1000'
        )
        .duration(100)
        .EUt(30)
})