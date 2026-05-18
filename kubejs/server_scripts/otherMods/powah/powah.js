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

        let reactorIngot = (i < 3) ? 'gtceu:dielectric_ingot' : 'gtceu:refined_dielectric_ingot';

        event.replaceInput(
            { output: `powah:thermo_generator_${tier}` },
            `powah:thermo_generator_${previousTier}`,
            currentCircuit
        )

        event.replaceInput(
            { output: `powah:thermo_generator_${tier}` },
            'powah:dielectric_paste',
            reactorIngot
        )

        event.replaceInput(
            { output: `powah:reactor_${tier}` },
            `powah:reactor_${previousTier}`,
            reactorIngot
        )

        event.replaceInput(
            { output: `powah:reactor_${tier}` },
            'powah:uraninite',
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

    event.recipes.gtceu.forming_press()
        .itemInputs(
            '4x powah:dielectric_paste'
        )
        .itemOutputs(
            'gtceu:dielectric_ingot'
        )
        .notConsumable('gtceu:ingot_casting_mold')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(350)

    event.recipes.gtceu.extruder()
        .itemInputs(
            '2x powah:dielectric_paste'
        )
        .itemOutputs(
            'gtceu:dielectric_ingot'
        )
        .notConsumable('gtceu:ingot_extruder_mold')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(150)

    event.recipes.gtceu.mixer()
        .itemInputs(
            '4x powah:dielectric_paste',
            'gtceu:titanium_dust',
            '2x gtceu:stainless_steel_dust'
        )
        .inputFluids(
            'gtceu:silicone_rubber 144'
        )
        .itemOutputs(
            '3x gtceu:refined_dielectric_dust'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(400)
        .circuit(4)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:refined_dielectric_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 150'
        )
        .itemOutputs(
            'gtceu:hot_refined_dielectric_ingot'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(500)
        .blastFurnaceTemp(1500)

    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_refined_dielectric_ingot'
        )
        .itemOutputs(
            'gtceu:refined_dielectric_ingot'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(100)


})