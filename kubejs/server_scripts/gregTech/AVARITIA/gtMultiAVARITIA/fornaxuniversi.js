ServerEvents.recipes((event) => {

    event.recipes.gtceu.fornax_universi_acceleration("testrecipe1")
        .itemInputs(
            'minecraft:cobblestone'
        )
        .itemOutputs(
            'minecraft:stone'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

});