ServerEvents.recipes((event) =>{
    
    event.custom({
        type: 'avaritia:shaped_table',
        category: 'equipment',
        key: {
        A: {
            item: 'kubejs:euclid/euclid_mainframe'
        },
        B: {
            item: 'kubejs:animated/var2'
        },
        C: {
            item: 'kubejs:animated/thatfrombehind'
        },
        D: {
            item: 'megacells:cell_component_256m'
        },
        E: {
            item: 'gtceu:uhv_quantum_chest'
        },
        F: {
            item: 'gtceu:supergrympl_block'
        },
        G: {
            item: 'kubejs:euclid/elementium'
        }
        },
        pattern: [
        'AAAFFFAAA',
        'ADBCGCBDA',
        'ABCCGCCBA',
        'FCCCGCCCF',
        'FGGGEGGGF',
        'FCCCGCCCF',
        'ABCCGCCBA',
        'ADBCGCBDA',
        'AAAFFFAAA',
        ],
        result: {
        item: 'gtceu:creative_chest'
        },
        show_notification: true,
        tier: 4,
    });

    event.custom({
        type: 'avaritia:shaped_table',
        category: 'equipment',
        key: {
        A: {
            item: 'kubejs:euclid/euclid_mainframe'
        },
        B: {
            item: 'kubejs:animated/var2'
        },
        C: {
            item: 'kubejs:animated/thatfrombehind'
        },
        D: {
            item: 'megacells:cell_component_256m'
        },
        E: {
            item: 'gtceu:uhv_quantum_tank'
        },
        F: {
            item: 'gtceu:supergrympl_block'
        },
        G: {
            item: 'kubejs:euclid/elementium'
        }
        },
        pattern: [
        'AAAFFFAAA',
        'ADBCGCBDA',
        'ABCCGCCBA',
        'FCCCGCCCF',
        'FGGGEGGGF',
        'FCCCGCCCF',
        'ABCCGCCBA',
        'ADBCGCBDA',
        'AAAFFFAAA',
        ],
        result: {
        item: 'gtceu:creative_tank'
        },
        show_notification: true,
        tier: 4,
    });

    event.custom({
        type: 'avaritia:shaped_table',
        category: 'equipment',
        key: {
        A: {
            item: 'kubejs:euclid/euclid_mainframe'
        },
        B: {
            item: 'kubejs:animated/var2'
        },
        C: {
            item: 'kubejs:animated/thatfrombehind'
        },
        D: {
            item: 'gtceu:element_356_hex_wire'
        },
        E: {
            item: 'gtceu:uiv_energy_input_hatch_16a'
        },
        F: {
            item: 'gtceu:supergrympl_block'
        }
        },
        pattern: [
        'AAAFFFAAA',
        'AABCDCBAA',
        'ABCCDCCBA',
        'FCCCDCCCF',
        'FDDDEDDDF',
        'FCCCDCCCF',
        'ABCCDCCBA',
        'AABCDCBAA',
        'AAAFFFAAA',
        ],
        result: {
        item: 'gtceu:creative_energy'
        },
        show_notification: true,
        tier: 4,
    });

    event.replaceInput(
        {id: 'avaritia:de_creative_capacitor'},
        'avaritia:infinity_ingot',
        'kubejs:animated/thatfrombehind'
    )

    event.replaceInput(
        {id: 'avaritia:de_creative_op_capacitor'},
        'avaritia:infinity',
        'kubejs:animated/thatfrombehind'
    )

    event.replaceInput(
        {id: 'avaritia:ae2_creative_energy_cell'},
        'ae2:singularity',
        'kubejs:animated/thatfrombehind'
    )

    event.replaceInput(
        {id: 'avaritia:botania_creative_pool'},
        'botania:dragonstone_block',
        'kubejs:animated/var2'
    )

})