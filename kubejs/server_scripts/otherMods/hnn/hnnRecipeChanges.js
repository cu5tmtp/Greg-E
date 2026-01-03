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

})