ServerEvents.recipes((event) =>{
    
    event.remove({id: 'avaritia:sculk_crafting_table'})
    event.remove({id: 'avaritia:nether_crafting_table'})
    event.remove({id: 'avaritia:end_crafting_table'})
    event.remove({id: 'avaritia:extreme_crafting_table'})

    event.custom({
        type: 'avaritia:shaped_table',
        category: 'equipment',
        key: {
        A: {
            item: 'gtceu:vibration_safe_casing'
        },
        B: {
            item: 'gtceu:neutronium_ingot'
        },
        C: {
            item: 'gtceu:neutronium_gear'
        },
        D: {
            item: 'gtceu:industrial_steam_casing'
        },
        X: {
            item: 'kubejs:animated/draconicprocessor'
        },
        Y: {
            item: 'gtceu:atomic_casing'
        },
        },
        pattern: [
        'CCDDDDDCC',
        'CDDBBBDDC',
        'DDAAAAADD',
        'DBAXXXABD',
        'DBAXYXABD',
        'DBAXXXABD',
        'DDAAAAADD',
        'CDDBBBDDC',
        'CCDDDDDCC',
        ],
        result: {
        item: 'gregecore:starmaykr'
        },
        show_notification: true,
        tier: 4,
    });

})