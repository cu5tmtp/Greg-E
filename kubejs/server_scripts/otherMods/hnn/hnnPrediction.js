ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembler()
        .itemInputs(
            'hostilenetworks:overworld_prediction'
        )
        .itemOutputs(
            'minecraft:spider_eye'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)
        .circuit(1)

})