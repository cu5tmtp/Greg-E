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

    event.remove('avaritia:ultimate_stew')

    event.custom({
        type: 'avaritia:shaped_table',
        category: 'equipment',
        key: {
        A: {
            item: 'kubejs:lvalloy'
        },
        B: {
            item: 'kubejs:mvalloy'
        },
        C: {
            item: 'kubejs:hvalloy'
        },
        D: {
            item: 'kubejs:evalloy'
        },
        E: {
            item: 'kubejs:ivalloy'
        },
        F: {
            item: 'kubejs:luvalloy'
        },
        G: {
            item: 'kubejs:animated/zpmalloy'
        },
        H: {
            item: 'kubejs:animated/uvalloy'
        },
        I: {
            item: 'kubejs:animated/uhvalloy'
        }
        },
        pattern: [
        'AAAHIHAAA',
        'ABBFGFBBA',
        'ABCCICCBA',
        'HFCDDDCFH',
        'IGIDEDIGI',
        'HFCDDDCFH',
        'ABCCICCBA',
        'ABBFGFBBA',
        'AAAHIHAAA',
        ],
        result: {
        item: 'avaritia:ultimate_stew'
        },
        show_notification: true,
        tier: 4,
    });

    event.remove('avaritia:cosmic_meatballs')

    event.custom({
        type: 'avaritia:shaped_table',
        category: 'equipment',
        key: {
        A: {
            item: 'kubejs:commonearth'
        },
        B: {
            item: 'kubejs:deepslateearth'
        },
        C: {
            item: 'kubejs:voiddust'
        },
        D: {
            item: 'kubejs:blessedearth'
        },
        E: {
            item: 'kubejs:eidust'
        },
        F: {
            item: 'kubejs:gassydust'
        },
        G: {
            item: 'kubejs:activatedrune'
        },
        H: {
            item: 'kubejs:dustwithbroom'
        },
        I: {
            item: 'kubejs:neutroniuminfused'
        }
        },
        pattern: [
        'AAAHIHAAA',
        'ABBFGFBBA',
        'ABCCICCBA',
        'HFCDDDCFH',
        'IGIDEDIGI',
        'HFCDDDCFH',
        'ABCCICCBA',
        'ABBFGFBBA',
        'AAAHIHAAA',
        ],
        result: {
        item: 'avaritia:cosmic_meatballs'
        },
        show_notification: true,
        tier: 4,
    });

    event.remove('avaritia:endest_pearl')

    event.custom({
        type: 'avaritia:shaped_table',
        category: 'equipment',
        key: {
        A: {
            item: 'botania:manasteel_ingot'
        },
        B: {
            item: 'kubejs:twilightingots'
        },
        C: {
            item: 'ad_astra:desh_ingot'
        },
        D: {
            item: 'undergarden:forgotten_ingot'
        },
        E: {
            item: 'botanicalextramachinery:malachite_ingot'
        },
        F: {
            item: 'gregecore:superelement27_ingot'
        },
        G: {
            item: 'kubejs:bloodinfused'
        },
        H: {
            item: 'kubejs:bacterialmatteringot'
        },
        I: {
            item: 'draconicevolution:awakened_draconium_ingot'
        }
        },
        pattern: [
        'AAAHIHAAA',
        'ABBFGFBBA',
        'ABCCICCBA',
        'HFCDDDCFH',
        'IGIDEDIGI',
        'HFCDDDCFH',
        'ABCCICCBA',
        'ABBFGFBBA',
        'AAAHIHAAA',
        ],
        result: {
        item: 'avaritia:endest_pearl'
        },
        show_notification: true,
        tier: 4,
    });

})