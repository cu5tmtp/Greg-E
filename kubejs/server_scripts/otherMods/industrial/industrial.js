ServerEvents.recipes((event) => {

    event.remove({mod: 'industrialforegoing'})
    event.remove({id: 'ad_astra_giselle_addon:compat/industrialforegoing/laser_drill_fluid/oil'})
    event.remove({id: 'ad_astra_giselle_addon:compat/industrialforegoing/laser_drill_ore/calorite'})
    event.remove({id: 'ad_astra_giselle_addon:compat/industrialforegoing/laser_drill_ore/desh'})
    event.remove({id: 'ad_astra_giselle_addon:compat/industrialforegoing/laser_drill_ore/moon_cheese'})
    event.remove({id: 'ad_astra_giselle_addon:compat/industrialforegoing/laser_drill_ore/ostrum'})

    event.custom({
        type: 'avaritia:shaped_table',
        category: 'equipment',
        key: {
        A: {
            item: 'gtceu:uhv_electric_motor'
        },
        B: {
            item: 'gregecore:awakened_draconium_cable_quadruple_wire'
        },
        C: {
            item: 'gtceu:stellarium_ingot'
        },
        D: {
            item: 'avaritia:diamond_lattice_block'
        },
        X: {
            item: 'gtceu:nebulon_alpha_ingot'
        },
        Y: {
            item: 'gtceu:uhv_machine_hull'
        },
        Z: {
            item: 'kubejs:animated/draconicprocessor'
        },
        },
        pattern: [
        'CCDDDDDCC',
        'CDDBBBDDC',
        'DDAAZAADD',
        'DBAXXXABD',
        'DBZXYXZBD',
        'DBAXXXABD',
        'DDAAZAADD',
        'CDDBBBDDC',
        'CCDDDDDCC',
        ],
        result: {
        item: 'industrialforegoing:mob_duplicator'
        },
        show_notification: true,
        tier: 4,
    });

    event.shaped(
        Item.of('industrialforegoing:mob_imprisonment_tool', 1),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'gtceu:nebulon_alpha_ingot',
            B: 'kubejs:animated/draconicprocessor'
        }
    )

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:lv_machine_hull',
            'mob_grinding_utils:saw',
            '#gtceu:circuits/lv'
        )
        .itemOutputs(
            'industrialforegoing:mob_crusher'
        )
        .duration(500)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(24)

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:lv_machine_hull',
            '#minecraft:hoes',
            '#gtceu:circuits/lv'
        )
        .itemOutputs(
            'industrialforegoing:plant_gatherer'
        )
        .duration(500)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(24)

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:lv_machine_hull',
            'minecraft:bone_meal',
            '#gtceu:circuits/lv'
        )
        .itemOutputs(
            'industrialforegoing:plant_fertilizer'
        )
        .duration(500)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(24)

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:lv_machine_hull',
            'minecraft:wheat_seeds',
            '#gtceu:circuits/lv'
        )
        .itemOutputs(
            'industrialforegoing:plant_sower'
        )
        .duration(500)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(24)

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:lv_machine_hull',
            'minecraft:bucket',
            '#gtceu:circuits/lv'
        )
        .itemOutputs(
            'industrialforegoing:animal_rancher'
        )
        .duration(500)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(24)

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:lv_machine_hull',
            'gtceu:gold_tiny_fluid_pipe',
            '#gtceu:circuits/lv'
        )
        .itemOutputs(
            'industrialforegoing:animal_feeder'
        )
        .duration(500)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(24)

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:lv_machine_hull',
            'minecraft:white_bed',
            '#gtceu:circuits/lv'
        )
        .itemOutputs(
            'industrialforegoing:animal_baby_separator'
        )
        .duration(500)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(24)

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:lv_machine_hull',
            'minecraft:white_bed',
            '#gtceu:circuits/lv'
        )
        .itemOutputs(
            'industrialforegoing:animal_baby_separator'
        )
        .duration(500)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(24)

    let augment = [
        Item.of('industrialforegoing:range_addon0', '{TitaniumAugment:{Range:0.0f}}'),
        Item.of('industrialforegoing:range_addon1', '{TitaniumAugment:{Range:1.0f}}'),
        Item.of('industrialforegoing:range_addon2', '{TitaniumAugment:{Range:2.0f}}'),
        Item.of('industrialforegoing:range_addon3', '{TitaniumAugment:{Range:3.0f}}'),
        Item.of('industrialforegoing:range_addon4', '{TitaniumAugment:{Range:4.0f}}'),
        Item.of('industrialforegoing:range_addon5', '{TitaniumAugment:{Range:5.0f}}'),
        Item.of('industrialforegoing:range_addon6', '{TitaniumAugment:{Range:6.0f}}'),
        Item.of('industrialforegoing:range_addon7', '{TitaniumAugment:{Range:7.0f}}'),
        Item.of('industrialforegoing:range_addon8', '{TitaniumAugment:{Range:8.0f}}'),
        Item.of('industrialforegoing:range_addon9', '{TitaniumAugment:{Range:9.0f}}'),
        Item.of('industrialforegoing:range_addon10', '{TitaniumAugment:{Range:10.0f}}'),
        Item.of('industrialforegoing:range_addon11', '{TitaniumAugment:{Range:11.0f}}')
    ]

    augment.forEach((addon, index) => {

        event.recipes.gtceu.assembler(`if_range_addon_${index}`)
            .itemInputs(
                '#gtceu:circuits/lv',
                'minecraft:glass',
                'gtceu:steel_ingot',
                'gtceu:resin_circuit_board'
            )
            .itemOutputs(
                addon
            )
            .circuit(index + 1)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])

    })

    let addonBad = [
        Item.of('industrialforegoing:speed_addon_1', '{TitaniumAugment:{Speed:2.0f}}'),
        Item.of('industrialforegoing:efficiency_addon_1', '{TitaniumAugment:{Efficiency:0.9f}}'),
        Item.of('industrialforegoing:processing_addon_1', '{TitaniumAugment:{Processing:2.0f}}')
    ]

    addonBad.forEach((addon, index) => {

        event.recipes.gtceu.assembler()
            .itemInputs(
                '#gtceu:circuits/lv',
                'gtceu:resin_circuit_board',
                'gtceu:fine_gold_wire'
            )
            .itemOutputs(
                addon
            )
            .circuit(index + 1)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])
    })

    let addonGood = [
        Item.of('industrialforegoing:speed_addon_2', '{TitaniumAugment:{Speed:3.0f}}'),
        Item.of('industrialforegoing:efficiency_addon_2', '{TitaniumAugment:{Efficiency:0.8f}}'),
        Item.of('industrialforegoing:processing_addon_2', '{TitaniumAugment:{Processing:3.0f}}')
    ]

    addonGood.forEach((addon, index) => {

        event.recipes.gtceu.assembler()
            .itemInputs(
                '#gtceu:circuits/mv',
                'gtceu:phenolic_circuit_board',
                'gtceu:fine_gold_wire'
            )
            .itemOutputs(
                addon
            )
            .circuit(index + 1)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])
    })


})