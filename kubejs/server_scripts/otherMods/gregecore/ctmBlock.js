ServerEvents.recipes((event) => {

    const ctmBlocks = [ 
        '16x kubejs:machine_casing_block_cyan',
        '16x kubejs:machine_casing_block_dark_blue', 
        '16x kubejs:machine_casing_block_diamond', 
        '16x kubejs:machine_casing_block_gold', 
        '16x kubejs:machine_casing_block_green', 
        '16x kubejs:machine_casing_block_lime', 
        '16x kubejs:machine_casing_block_magenta', 
        '16x kubejs:machine_casing_block_orange', 
        '16x kubejs:machine_casing_block_purple', 
        '16x kubejs:machine_casing_block_red', 
        '16x kubejs:machine_casing_tiled_dark_gray', 
        '16x kubejs:machine_casing_tiled_gray', 
        '16x kubejs:machine_casing_tiled_green', 
        '16x kubejs:machine_casing_tiled_light_gray', 
        '16x kubejs:machine_casing_tiled_lime', 
        '16x kubejs:machine_casing_tiled_orange', 
        '16x kubejs:machine_casing_tiled_red', 
        '16x kubejs:machine_casing_tiled_very_dark_gray', 
        '16x kubejs:machine_casing_tiled_yellow', 
    ]; 

    ctmBlocks.forEach((inputBlock, index) => {
        event.recipes.gtceu.casing_creator()
            .itemInputs(
                '8x gtceu:steel_plate',
                'minecraft:redstone'
            )
            .itemOutputs(
                inputBlock
            )
            .EUt(GTValues.V[GTValues.ULV])
            .duration(100)
            .circuit(index + 1)

        event.recipes.gtceu.assembler()
            .itemInputs(
                '8x gtceu:steel_plate',
                'minecraft:redstone'
            )
            .itemOutputs(
                inputBlock
            )
            .EUt(GTValues.V[GTValues.LV])
            .duration(100)
            .circuit(index + 1)
    });

})