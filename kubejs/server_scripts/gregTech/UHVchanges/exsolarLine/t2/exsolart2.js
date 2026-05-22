ServerEvents.recipes((event) => {

    const fuels = [
        { fluid: 'gtceu:rocket_fuel', amount: 10000, timeMult: 1.0},
        { fluid: 'gregecore:superheated_solar', amount: 5000, timeMult: 0.85},
        { fluid: 'gtceu:activated_astrophage_fuel', amount: 1000, timeMult: 0.7}
    ];

    const solar_systems = [
        {
            id: 3,
            items: ['64x gtceu:iridium_dust', '512x gtceu:platinum_dust', '512x powah:uraninite'],
            fluids: ['gtceu:krypton 80000', 'gtceu:helium 50000', 'gtceu:helium_3 4000', 'gtceu:krypton 5000', 'gtceu:lacallium 3000']
        },
        {
            id: 4,
            items: ['512x gtceu:bauxite_dust', '512x gtceu:magnesium_dust', '512x gtceu:silver_dust', '512x gtceu:lead_dust'],
            fluids: ['gtceu:hydrogen 100000', 'gtceu:nitrogen 85000', 'gtceu:ammonia 35000', 'gtceu:deuterium 5000', 'gtceu:gliesium 3000']
        }
    ];

    solar_systems.forEach((system, systemIndex) => {
        fuels.forEach((fuel, fuelIndex) => {
            let uniqueCircuit = (systemIndex * fuels.length) + fuelIndex + 1;

            let recipe = event.recipes.gtceu.deep_space_explore(`deep_space_explore/${system.id}/${fuel.amount}`)
                .inputFluids(`${fuel.fluid} ${fuel.amount}`)
                .itemInputs('kubejs:mellodiumscience')
                .addData('drone', 2)
                .addData('system', system.id)
                .duration(Math.floor(3000 * fuel.timeMult))
                .circuit(uniqueCircuit);

            system.items.forEach(item => recipe.itemOutputs(item));
            
            system.fluids.forEach(fluid => recipe.outputFluids(fluid));
        });
    });

    event.recipes.gtceu.large_chemical_reactor()
        .inputFluids(
            'gtceu:lacallium 1000',
            'gtceu:gliesium 1000'
        )
        .itemInputs(
            '256x powah:uraninite',
            '96x gtceu:iridium_dust'
        )
        .outputFluids(
            'gtceu:prismalium 3000'
        )
        .duration(650)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(4)

    event.recipes.gtceu.autoclave()
        .inputFluids(
            'gtceu:prismalium 144'
        )
        .itemOutputs(
            'gtceu:prismalium_dust'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:prismalium_dust'
        )
        .inputFluids(
            'gtceu:krypton 350'
        )
        .itemOutputs(
            'gtceu:hot_prismalium_ingot'
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UHV])
        .blastFurnaceTemp(10000)

    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_prismalium_ingot'
        )
        .itemOutputs(
            'gtceu:prismalium_ingot'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:prismalium_ingot'
        )
        .itemOutputs(
            '4x gtceu:prismalium_foil'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(10)

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:prismalium_ingot'
        )
        .itemOutputs(
            'gtceu:prismalium_plate'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.bender()
        .itemInputs(
            '2x gtceu:prismalium_ingot'
        )
        .itemOutputs(
            'gtceu:double_prismalium_plate'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(2)

    event.recipes.gtceu.extruder()
        .itemInputs(
            '4x gtceu:prismalium_ingot'
        )
        .itemOutputs(
            'gtceu:prismalium_gear'
        )
        .notConsumable('gtceu:gear_extruder_mold')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)

    event.recipes.gtceu.extruder()
        .itemInputs(
            'gtceu:prismalium_ingot'
        )
        .itemOutputs(
            'gtceu:small_prismalium_gear'
        )
        .notConsumable('gtceu:small_gear_extruder_mold')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    event.recipes.gtceu.lathe()
        .itemInputs(
            'gtceu:prismalium_ingot'
        )
        .itemOutputs(
            '2x gtceu:prismalium_rod'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    event.recipes.gtceu.compressor()
        .itemInputs(
            '9x gtceu:prismalium_ingot'
        )
        .itemOutputs(
            'gtceu:prismalium_block'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(300)

})