ServerEvents.recipes((event) => {

    const fuels = [
        { fluid: 'gtceu:rocket_fuel', amount: 10000, timeMult: 1.0},
        { fluid: 'gregecore:superheated_solar', amount: 5000, timeMult: 0.85},
        { fluid: 'gtceu:activated_astrophage_fuel', amount: 1000, timeMult: 0.7}
    ];

    const solar_systems = [
        {
            id: 1,
            items: ['512x gtceu:carbon_dust', '512x ae2:silicon', '512x gtceu:quartz_sand_dust'],
            fluids: ['gtceu:methane 35000', 'gtceu:ammonia 35000', 'gtceu:cygnium 3000']
        },
        {
            id: 2,
            items: ['512x gtceu:cobaltite_dust', '512x gtceu:gallium_dust', '512x gtceu:iron_dust'],
            fluids: ['gtceu:argon 35000', 'gtceu:krypton 35000', 'gtceu:struvium 3000']
        }
    ];

    solar_systems.forEach((system, systemIndex) => {
        fuels.forEach((fuel, fuelIndex) => {
            let uniqueCircuit = (systemIndex * fuels.length) + fuelIndex + 1;

            let recipe = event.recipes.gtceu.deep_space_explore(`deep_space_explore/${system.id}/${fuel.amount}`)
                .inputFluids(`${fuel.fluid} ${fuel.amount}`)
                .itemInputs('kubejs:heatshield')
                .addData('drone', 1)
                .addData('system', system.id)
                .duration(Math.floor(3000 * fuel.timeMult))
                .circuit(uniqueCircuit);

            system.items.forEach(item => recipe.itemOutputs(item));
            
            system.fluids.forEach(fluid => recipe.outputFluids(fluid));
        });
    });

    event.recipes.gtceu.large_chemical_reactor()
        .inputFluids(
            'gtceu:struvium 1000',
            'gtceu:cygnium 1000'
        )
        .itemInputs(
            '512x gtceu:iron_dust'
        )
        .outputFluids(
            'gtceu:mellodium 5000'
        )
        .duration(650)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(4)

    event.recipes.gtceu.autoclave()
        .inputFluids(
            'gtceu:mellodium 144'
        )
        .itemOutputs(
            'gtceu:mellodium_dust'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:mellodium_dust'
        )
        .inputFluids(
            'gtceu:krypton 350'
        )
        .itemOutputs(
            'gtceu:hot_mellodium_ingot'
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UHV])
        .blastFurnaceTemp(10000)

    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_mellodium_ingot'
        )
        .itemOutputs(
            'gtceu:mellodium_ingot'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:mellodium_ingot'
        )
        .itemOutputs(
            '4x gtceu:mellodium_foil'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(10)

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:mellodium_ingot'
        )
        .itemOutputs(
            'gtceu:mellodium_plate'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.bender()
        .itemInputs(
            '2x gtceu:mellodium_ingot'
        )
        .itemOutputs(
            'gtceu:double_mellodium_plate'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(2)

    event.recipes.gtceu.extruder()
        .itemInputs(
            '4x gtceu:mellodium_ingot'
        )
        .itemOutputs(
            'gtceu:mellodium_gear'
        )
        .notConsumable('gtceu:gear_extruder_mold')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)

    event.recipes.gtceu.extruder()
        .itemInputs(
            'gtceu:mellodium_ingot'
        )
        .itemOutputs(
            'gtceu:small_mellodium_gear'
        )
        .notConsumable('gtceu:small_gear_extruder_mold')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    event.recipes.gtceu.lathe()
        .itemInputs(
            'gtceu:mellodium_ingot'
        )
        .itemOutputs(
            '2x gtceu:mellodium_rod'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    event.recipes.gtceu.compressor()
        .itemInputs(
            '9x gtceu:mellodium_ingot'
        )
        .itemOutputs(
            'gtceu:mellodium_block'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(300)

})