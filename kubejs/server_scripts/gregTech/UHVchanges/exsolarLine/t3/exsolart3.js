ServerEvents.recipes((event) => {

    const fuels = [
        { fluid: 'gtceu:rocket_fuel', amount: 10000, timeMult: 1.0},
        { fluid: 'gregecore:superheated_solar', amount: 5000, timeMult: 0.85},
        { fluid: 'gtceu:activated_astrophage_fuel', amount: 1000, timeMult: 0.7}
    ];

    const solar_systems = [
        {
            id: 5,
            items: ['512x gtceu:chromium_dust', '512x gtceu:antimony_dust', '512x gtceu:gypsum_dust', '512x gtceu:platinum_raw_dust'],
            fluids: ['gtceu:mercury 60000', 'gtceu:hydrochloric_acid 50000', 'gtceu:methanol 4000', 'gtceu:dinitrogen_tetroxide 5000', 'gtceu:ophiuchium 3000']
        },
        {
            id: 6,
            items: ['512x gtceu:ammonium_chloride_dust', '512x gtceu:magnesium_chloride_dust', '512x gtceu:barium_dust', '512x gtceu:rutile_dust'],
            fluids: ['gtceu:naquadah 5000', 'gtceu:enriched_naquadah 3200', 'gtceu:enriched_naquadah_solution 1500', 'gtceu:steinium 3000']
        }
    ];

    solar_systems.forEach((system, systemIndex) => {
        fuels.forEach((fuel, fuelIndex) => {
            let uniqueCircuit = (systemIndex * fuels.length) + fuelIndex + 1;

            let recipe = event.recipes.gtceu.deep_space_explore(`deep_space_explore/${system.id}/${fuel.amount}`)
                .inputFluids(`${fuel.fluid} ${fuel.amount}`)
                .itemInputs('kubejs:lasermining')
                .addData('drone', 3)
                .addData('system', system.id)
                .duration(Math.floor(3000 * fuel.timeMult))
                .circuit(uniqueCircuit);

            system.items.forEach(item => recipe.itemOutputs(item));
            
            system.fluids.forEach(fluid => recipe.outputFluids(fluid));
        });
    });

    event.remove({id: 'gtceu:chemical_reactor/formic_acid'})
    event.recipes.gtceu.large_chemical_reactor()
        .inputFluids(
            'gtceu:carbon_dioxide 1000',
            'minecraft:water 1000'
        )
        .outputFluids(
            'gtceu:formic_acid 1000',
            'gtceu:oxygen 1000'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)
        .circuit(9)

    event.recipes.gtceu.large_chemical_reactor()
        .inputFluids(
            'gtceu:ophiuchium 1000',
            'gtceu:steinium 1000'
        )
        .itemInputs(
            '512x gtceu:ammonium_chloride_dust',
            '512x gtceu:platinum_dust',
            '512x gtceu:chromium_dust'
        )
        .outputFluids(
            'gtceu:stellarium 3000'
        )
        .duration(650)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.autoclave()
        .inputFluids(
            'gtceu:stellarium 144'
        )
        .itemOutputs(
            'gtceu:stellarium_dust'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:stellarium_dust'
        )
        .inputFluids(
            'gtceu:krypton 350'
        )
        .itemOutputs(
            'gtceu:hot_stellarium_ingot'
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UHV])
        .blastFurnaceTemp(10000)

    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_stellarium_ingot'
        )
        .itemOutputs(
            'gtceu:stellarium_ingot'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:stellarium_ingot'
        )
        .itemOutputs(
            '4x gtceu:stellarium_foil'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(10)

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:stellarium_ingot'
        )
        .itemOutputs(
            'gtceu:stellarium_plate'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.bender()
        .itemInputs(
            '2x gtceu:stellarium_ingot'
        )
        .itemOutputs(
            'gtceu:double_stellarium_plate'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(2)

    event.recipes.gtceu.extruder()
        .itemInputs(
            '4x gtceu:stellarium_ingot'
        )
        .itemOutputs(
            'gtceu:stellarium_gear'
        )
        .notConsumable('gtceu:gear_extruder_mold')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)

    event.recipes.gtceu.extruder()
        .itemInputs(
            'gtceu:stellarium_ingot'
        )
        .itemOutputs(
            'gtceu:small_stellarium_gear'
        )
        .notConsumable('gtceu:small_gear_extruder_mold')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    event.recipes.gtceu.lathe()
        .itemInputs(
            'gtceu:stellarium_ingot'
        )
        .itemOutputs(
            '2x gtceu:stellarium_rod'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    event.recipes.gtceu.compressor()
        .itemInputs(
            '9x gtceu:stellarium_ingot'
        )
        .itemOutputs(
            'gtceu:stellarium_block'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(300)

})