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

})