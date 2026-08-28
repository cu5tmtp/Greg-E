ServerEvents.recipes((event) => {

    event.recipes.gtceu.robotic_fabrication()
        .itemInputs(
            'minecraft:stick'
        )
        .itemOutputs(
            'minecraft:cobblestone'
        )
        .duration(300)

    event.recipes.gtceu.robotic_fabrication()
        .itemInputs(
            'minecraft:cobblestone'
        )
        .itemOutputs(
            'minecraft:stick'
        )
        .duration(300)

    event.recipes.gtceu.robotic_fabrication()
        .itemInputs(
            'minecraft:dirt'
        )
        .itemOutputs(
            'minecraft:stick'
        )
        .duration(300)

    event.recipes.gtceu.robotic_fabrication()
        .itemInputs(
            'minecraft:grass_block'
        )
        .itemOutputs(
            'minecraft:cobblestone'
        )
        .duration(30000000)

})