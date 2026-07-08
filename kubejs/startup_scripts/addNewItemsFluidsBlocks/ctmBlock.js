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

StartupEvents.registry('block', event => {
    
    ctmBlocks.forEach(blockId => {
        
        const displayName = blockId
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        event.create(blockId)
            .displayName(displayName)
            .stoneSoundType()
            .hardness(2.0)
            .resistance(1.0)
            .textureAll(`kubejs:block/ctm/${blockId}`)
            
            
    });
    
});