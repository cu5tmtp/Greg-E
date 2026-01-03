ServerEvents.recipes(event => {

    event.recipes.gtceu.ore_washer('iron_ingot_to_iron_shards')
        .itemInputs(
            '8x minecraft:iron_ingot'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 1000)
        )
        .itemOutputs(
            '4x kubejs:ironshard'
        )
        .duration(500)
        .EUt(30)

    event.recipes.gtceu.extractor('lvcircuit_to_pure_circuit_essence')
        .itemInputs(
            '#gtceu:circuits/lv'
        )
        .outputFluids(
            Fluid.of('kubejs:lvcef', 1000)
        )
        .duration(500)
        .EUt(30)
    
    event.recipes.gtceu.mixer('lvcef_with_ironshard_to_lvalloy_slurry')
        .itemInputs(
            '16x kubejs:ironshard'
        )
        .inputFluids(
            Fluid.of('kubejs:lvcef', 1000)
        )
        .outputFluids(
            Fluid.of('kubejs:lvcas', 1000)
        )
        .duration(250)
        .EUt(30)    

})