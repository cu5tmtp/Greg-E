ServerEvents.recipes((event) => {

    event.remove({ type: "justdirethings:goospread"})
    event.remove({ type: "justdirethings:goospread_tag"})

    event.custom({
        type: 'justdirethings:goospread',
        craftingDuration: 400,
        id: 'kubejs:delirium_to_first_mat',
        input: { Name: 'gtceu:reinforced_delirium_block' },
        output: { Name: 'gtceu:bio_welded_reinforced_delirium_block' },
        tierRequirement: 1
    })
    .id('kubejs:delirium_to_first_mat')

    event.custom({
        type: 'justdirethings:goospread',
        craftingDuration: 400,
        id: 'kubejs:kamenium_to_second_mat',
        input: { Name: 'gtceu:reinforced_kamenium_block' },
        output: { Name: 'gtceu:bio_welded_reinforced_kamenium_block' },
        tierRequirement: 2
    })
    .id('kubejs:kamenium_to_second_mat')

    event.custom({
        type: 'justdirethings:goospread',
        craftingDuration: 400,
        id: 'kubejs:grympl_to_third_mat',
        input: { Name: 'gtceu:supergrympl_block' },
        output: { Name: 'gtceu:bio_welded_supergrympl_block' },
        tierRequirement: 3
    })
    .id('kubejs:grympl_to_third_mat')

    event.custom({
        type: 'justdirethings:goospread',
        craftingDuration: 400,
        id: 'kubejs:xynredar_to_fourth_mat',
        input: { Name: 'gtceu:xynredar_block' },
        output: { Name: 'gtceu:bio_welded_xynredar_block' },
        tierRequirement: 4
    })
    .id('kubejs:xynredar_to_fourth_mat')

})