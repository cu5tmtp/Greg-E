ServerEvents.tags('item', event => {

    event.add('gtceu:circuits', 'kubejs:universal/lv')
    event.add('gtceu:circuits/lv', 'kubejs:universal/lv')

    event.add('gtceu:circuits', 'kubejs:universal/mv')
    event.add('gtceu:circuits/mv', 'kubejs:universal/mv')

    event.add('gtceu:circuits', 'kubejs:universal/hv')
    event.add('gtceu:circuits/hv', 'kubejs:universal/hv')

    event.add('gtceu:circuits', 'kubejs:universal/ev')
    event.add('gtceu:circuits/ev', 'kubejs:universal/ev')

    event.add('gtceu:circuits', 'kubejs:universal/iv')
    event.add('gtceu:circuits/iv', 'kubejs:universal/iv')

    event.add('gtceu:circuits', 'kubejs:universal/luv')
    event.add('gtceu:circuits/luv', 'kubejs:universal/luv')

    event.add('gtceu:circuits', 'kubejs:universal/zpm')
    event.add('gtceu:circuits/zpm', 'kubejs:universal/zpm')

    event.add('gtceu:circuits', 'kubejs:universal/uv')
    event.add('gtceu:circuits/uv', 'kubejs:universal/uv')

    event.add('gtceu:circuits', 'kubejs:universal/uhv')
    event.add('gtceu:circuits/uhv', 'kubejs:universal/uhv')

    event.add('forge:leather', 'gtceu:artificial_leather_plate')

    event.add('grege:blood', 'gregecore:tinyblood')
    event.add('grege:blood', 'gregecore:mediumblood')
    event.add('grege:blood', 'gregecore:largeblood')
    
    event.add('forge:dusts/quicklime', 'enchanted:quicklime')
    

    //cataclysm imitation ingots tagging
    event.add('grege:witherite', 'cataclysm:witherite_ingot')
    event.add('grege:witherite', 'gtceu:imitation_witherite_ingot')

    event.add('grege:ancientmetal', 'cataclysm:ancient_metal_ingot')
    event.add('grege:ancientmetal', 'gtceu:ancient_metal_imitation_ingot')

    event.add('grege:ignitium', 'cataclysm:ignitium_ingot')
    event.add('grege:ignitium', 'gtceu:ignitium_imitation_ingot')

    event.add('grege:powcell', 'cataclysm:lava_power_cell')
    event.add('grege:powcell', 'kubejs:imitationbattery')

    event.add('grege:enderium', 'gtceu:enderium_ingot')
    event.add('grege:enderium', 'gtceu:enderium_imitation_ingot')

    event.add('grege:cursium', 'gtceu:cursium_imitation_ingot')
    event.add('grege:cursium', 'cataclysm:cursium_ingot')

    event.add('grege:lightning', 'cataclysm:essence_of_the_storm')
    event.add('grege:lightning', 'gtceu:storm_imitation_ingot')


})

ServerEvents.tags('block', event => {
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
        'slurry_squeezer',
        'heatingel',
        'researchlens',
        'laservoid'
    ]; 

    ctmBlocks.forEach(block => {
        event.add('gtceu:mineable/pickaxe_or_wrench', `kubejs:${block}`);
    });

    const blocksToTag = [ 
        'cobbleone',
        'cobbletwo',
        'cobblethree',
        'cobblefour',
        'cobblefive',
        'voidseed',
        'vanaheimingotblock',
        'solidacidinfusedlava',
        'vending_machine'
    ]; 

    blocksToTag.forEach(block => {
        event.add('minecraft:mineable/pickaxe', `kubejs:${block}`);
    });
});