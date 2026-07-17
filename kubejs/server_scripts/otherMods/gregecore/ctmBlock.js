ServerEvents.recipes((event) => {

    const ctmBlocks = [ 
        'machine_casing_block_cyan', 
        'machine_casing_block_dark_blue', 
        'machine_casing_block_diamond', 
        'machine_casing_block_gold', 
        'machine_casing_block_green', 
        'machine_casing_block_lime', 
        'machine_casing_block_magenta', 
        'machine_casing_block_orange', 
        'machine_casing_block_purple', 
        'machine_casing_block_red', 
        'machine_casing_tiled_dark_gray', 
        'machine_casing_tiled_gray', 
        'machine_casing_tiled_green', 
        'machine_casing_tiled_light_gray', 
        'machine_casing_tiled_lime', 
        'machine_casing_tiled_orange', 
        'machine_casing_tiled_red', 
        'machine_casing_tiled_very_dark_gray', 
        'machine_casing_tiled_yellow', 
    ]; 

    const namespace = 'kubejs'; 

    ctmBlocks.forEach(inputBlock => {
        ctmBlocks.forEach(outputBlock => {
            if (inputBlock !== outputBlock) {
                event.stonecutting(`${namespace}:${outputBlock}`, `${namespace}:${inputBlock}`);
            }
        });
    });

    event.shaped(
        Item.of('kubejs:machine_casing_block_cyan', 16),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'gtceu:steel_plate',
            B: 'minecraft:redstone'
        }
    )

})