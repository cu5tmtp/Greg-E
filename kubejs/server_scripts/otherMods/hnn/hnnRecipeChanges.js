ServerEvents.recipes((event) => {

    event.remove({ id: 'hostilenetworks:loot_fabricator'})
    event.remove({ id: 'hostilenetworks:sim_chamber'})

    event.replaceInput(
        { id: 'hostilenetworks:framework'},
        'minecraft:clay_ball',
        'kubejs:senplate'
    )

    event.replaceInput(
        { id: 'hostilenetworks:deep_learner'},
        'minecraft:obsidian',
        'kubejs:senplate'
    )

    event.replaceInput(
        { id: 'extrahnn:merger_camera'},
        'minecraft:netherite_block',
        '#gtceu:circuits/iv'
    )

    event.replaceInput(
        { id: 'extrahnn:upgrade_module_stack'},
        'minecraft:comparator',
        '#gtceu:circuits/iv'
    )

})