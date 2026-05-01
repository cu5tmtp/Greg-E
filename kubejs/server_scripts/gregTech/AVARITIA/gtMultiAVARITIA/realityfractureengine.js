ServerEvents.recipes((event) => {

    event.recipes.gtceu.open_rift('test')
        .itemInputs(
            "minecraft:stick"
        )
        .itemOutputs(
            "minecraft:cobblestone"
        )
        .duration(1000)

})