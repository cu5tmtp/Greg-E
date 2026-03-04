ServerEvents.recipes((event) => {

    event.replaceInput(
        { id: 'advanced_ae:reactionchamber' },
        'ae2:condenser',
        '#gtceu:circuits/hv'
    )

    event.replaceInput(
        { id: 'advanced_ae:quantum_core' },
        'ae2:singularity',
        '#gtceu:circuits/ev'
    )

    event.replaceInput(
        { id: 'ae2:network/blocks/pattern_providers_interface' },
        'minecraft:crafting_table',
        '#gtceu:circuits/mv'
    )

    event.replaceInput(
        { id: 'ae2:network/crafting/molecular_assembler' },
        'minecraft:crafting_table',
        '#gtceu:circuits/mv'
    )

    event.replaceInput(
        { id: 'ae2:network/blocks/controller' },
        'ae2:fluix_crystal',
        '#gtceu:circuits/lv'
    )

    event.replaceInput(
        { id: 'ae2:network/blocks/storage_drive' },
        'ae2:engineering_processor',
        '#gtceu:circuits/lv'
    )

    event.replaceInput(
        { id: 'expatternprovider:water_cell' },
        'minecraft:water_bucket',
        'kubejs:waterfive'
    )

    event.replaceInput(
        { id: 'advanced_ae:quantumcore' },
        'ae2:singularity',
        '#gtceu:circuits/ev'
    )

    event.shaped(
        Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}'),
        [
            'ABA',
            'BCB',
            'DDD'
        ],
        {
            A: 'ae2:quartz_glass',
            B: 'kubejs:cobblefive',
            C: 'ae2:cell_component_16k',
            D: 'minecraft:diamond'
        }
    )

    event.replaceInput(
        'expatternprovider:wireless_connector',
        'ae2:sky_dust',
        '#gtceu:circuits/iv'
    )

    event.replaceInput(
        'expatternprovider:wireless_hub',
        'ae2:quantum_link',
        '#gtceu:circuits/iv'
    )



    //Advanced aes reaction chamber recipie for matter balls
    event.custom({
        type: 'advanced_ae:reaction',
        energy: 100000,
        fluid: {
            fluidStack: {
                Amount: 500,
                FluidName: 'minecraft:water',
            },
        },
        input_items: [{
            amount: 64,
            ingredient: { 
                item: 'minecraft:cobblestone' 
            },
        }],
        output: { 
            '#' : 8,
            '#c': 'ae2:i',
            id: 'ae2:matter_ball' 
        }
    })
    .id('ae2:matter_ball_reaction_chamber');
});