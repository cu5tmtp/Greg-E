ServerEvents.recipes((event) => {

    event.recipes.gtceu.macerator('getdirt')
        .itemInputs(
            'minecraft:apple'
        )
        .itemOutputs(
            'gtceu:bio_chaff'
        )
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(100)

    event.remove('gtceu:macerator/dirt_from_bio_chaff')
    event.recipes.gtceu.macerator()
        .itemInputs(
            'gtceu:bio_chaff'
        )
        .itemOutputs(
            'minecraft:dirt'
        )
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(100)

})