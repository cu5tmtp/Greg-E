ServerEvents.recipes((event) => {

    const powahTiers = ['starter', 'basic', 'hardened', 'blazing', 'niotic', 'spirited', 'nitro'];
    const powahTiersNormal = ['basic', 'hardened', 'blazing', 'niotic', 'spirited', 'nitro'];
    const circuits = ['#gtceu:circuits/lv', '#gtceu:circuits/mv','#gtceu:circuits/hv','#gtceu:circuits/ev','#gtceu:circuits/iv', '#gtceu:circuits/luv',]

    powahTiers.forEach(tier => {
        event.remove({ output: `powah:furnator_${tier}` });
        event.remove({ output: `powah:solar_panel_${tier}` });
        event.remove({ output: `powah:magmator_${tier}` });
        event.remove({ output: `powah:ender_gate_${tier}` });
        event.remove({ output: `powah:player_transmitter_${tier}` });
        event.remove({ output: `powah:energy_hopper_${tier}` });
        event.remove({ output: `powah:energy_discharger_${tier}` });

    });

    powahTiersNormal.forEach((tier, i) => {

        let previousTier = powahTiers[i]; 
        let currentCircuit = circuits[i];

        event.replaceInput(
            { output: `powah:thermo_generator_${tier}` },
            `powah:thermo_generator_${previousTier}`,
            currentCircuit
        )

        event.replaceInput(
            { output: `powah:reactor_${tier}` },
            `powah:reactor_${previousTier}`,
            currentCircuit
        )

        event.replaceInput(
            { output: `powah:energizing_rod_${tier}` },
            `powah:energizing_rod_${previousTier}`,
            currentCircuit
        )

        event.replaceInput(
            { output: `powah:energy_cell_${tier}` },
            `powah:energy_cell_${previousTier}`,
            currentCircuit
        )

        event.replaceInput(
            { output: `powah:energy_cable_${tier}` },
            `powah:energy_cable_${previousTier}`,
            currentCircuit
        )

        event.replaceInput(
            { output: `powah:battery_${tier}` },
            `powah:battery_${previousTier}`,
            currentCircuit
        )

        event.replaceInput(
            { output: `powah:ender_cell_${tier}` },
            'powah:ender_core',
            '#gtceu:circuits/hv'
        )

    });

    event.remove('powah:crafting/cable_basic_2')
    event.remove('powah:crafting/cable_hardened_2')
    event.remove('powah:crafting/cable_blazing_2')
    event.remove('powah:crafting/cable_niotic_2')
    event.remove('powah:crafting/cable_spirited_2')
    event.remove('powah:crafting/cable_nitro_2')

    event.remove('powah:crafting/ender_cell_starter')
    event.remove('powah:crafting/energy_cell_starter')
    event.remove('powah:crafting/energy_cell_basic')
    event.remove({output: 'powah:uraninite'})

    event.remove('powah:energizing/compat/certus_quartz_to_charged_certus_quartz')

    event.shapeless(
        Item.of('powah:uraninite', 1),
        [
            'minecraft:iron_ingot',
            'minecraft:iron_ingot',
            'minecraft:slime_ball',
            '#gtceu:tools/crafting_mortars'
        ]
    )

    event.remove('powah:crafting/dielectric_paste_2')
    event.replaceInput(
        'powah:crafting/dielectric_paste',
        'minecraft:lava_bucket',
        'minecraft:redstone'
    )
    event.replaceInput(
        'powah:crafting/dielectric_paste',
        'minecraft:clay_ball',
        'gtceu:iron_dust'
    )

    event.replaceInput(
        'powah:crafting/capacitor_basic',
        'minecraft:redstone_block',
        'gtceu:sintercoke_ingot'
    )

    event.replaceInput(
        'powah:crafting/thermoelectric_plate',
        'minecraft:blaze_powder',
        'minecraft:copper_ingot'
    )

    event.recipes.powah.energizing(
        ['minecraft:emerald_block'],
        'powah:spirited_crystal_block',
        9000000
    )

    event.recipes.powah.energizing(
        ['minecraft:diamond_block'],
        'powah:niotic_crystal_block',
        2700000
    )

    event.recipes.powah.energizing(
        ['botania:blaze_block'],
        'powah:blazing_crystal_block',
        810000
    )

    event.recipes.powah.energizing(
        [
            'minecraft:iron_block',
            'minecraft:gold_block'
        ],
        '2x powah:energized_steel_block',
        90000
    )

    event.replaceInput(
        'powah:energizing/nitro_crystal',
        'minecraft:redstone_block',
        '#gtceu:circuits/luv'
    )

     event.replaceInput(
        'pipez:energy_pipe',
        'minecraft:redstone_block',
        '#gtceu:circuits/mv'
    )
})