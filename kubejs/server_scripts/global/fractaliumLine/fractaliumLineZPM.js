ServerEvents.recipes((event) => {

    event.recipes.gtceu.fusion_reactor()
        .inputFluids(
            'gtceu:luminite_22 16',
            'gtceu:sturenium_35 16'
        )
        .outputFluids(
            'gtceu:synchro_plasma_plasma 16'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .fusionStartEU(150000000)
        .duration(64)

    event.recipes.gtceu.solar_ray_filter()
        .circuit(1)
        .itemOutputs(
            'gtceu:small_luminite_22_dust'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(100)
        .daytime()

    event.recipes.gtceu.compressor()
        .itemInputs(
            '4x gtceu:small_luminite_22_dust'
        )
        .itemOutputs(
            'gtceu:luminite_22_dust'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(100)

    event.recipes.gtceu.extractor()
        .itemInputs(
            'gtceu:luminite_22_dust'
        )
        .outputFluids(
            'gtceu:luminite_22 144'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)

    event.recipes.gtceu.extractor()
        .itemInputs(
            'gtceu:sturenium_35_dust'
        )
        .outputFluids(
            'gtceu:sturenium_35 144'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)

    event.recipes.gtceu.advanced_fusion()
        .inputFluids(
            'gtceu:luminite_22 1600',
            'gtceu:sturenium_35 1600'
        )
        .outputFluids(
            'gtceu:synchro_plasma_plasma 1600'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .addData('heat_level', 2200)
        .duration(400)

    event.recipes.gtceu.chemical_reactor()
        .itemInputs(
            'kubejs:voiddust'
        )
        .inputFluids(
            'gtceu:fluorine 1000',
            'gtceu:voidium 1500',
            'gtceu:hydrogen 500'
        )
        .outputFluids(
            'gtceu:fluorovoidic_acid 1000'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(300)
        .circuit(4)

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            'gtceu:muddied_fractalium_dust'
        )
        .inputFluids(
            'gtceu:fluorovoidic_acid 650',
            'gtceu:synchro_plasma_plasma 200'
        )
        .itemOutputs(
            'gtceu:cleansed_fractalium_dust'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(300)
        .circuit(4)

    event.recipes.gtceu.chemical_reactor()
        .itemInputs(

        )
        .inputFluids(
            'gtceu:voidium 400',
            'gtceu:fluorine 350',
            'gtceu:oxygen 500'
        )
        .outputFluids(
            'gtceu:phase_acid 500'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(350)
        .circuit(5)

    event.recipes.gtceu.chemical_bath()
        .inputFluids(
            'gtceu:phase_acid 250'
        )
        .itemInputs(
            'gtceu:cleansed_fractalium_dust'
        )
        .itemOutputs(
            'gtceu:purified_fractalium_dust'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:purified_fractalium_dust'
        )
        .inputFluids(
            'gtceu:argon 500'
        )
        .itemOutputs(
            'gtceu:hot_purified_fractalium_ingot'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(800)
        .blastFurnaceTemp(7300)

    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_purified_fractalium_ingot'
        )
        .itemOutputs(
            'gtceu:purified_fractalium_ingot'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    event.recipes.gtceu.compressor()
        .itemInputs(
            '9x gtceu:purified_fractalium_ingot'
        )
        .itemOutputs(
            'gtceu:purified_fractalium_block'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)  
 
    event.replaceInput(
        'gtceu:shaped/parallel_hatch_mk2',
        'gtceu:niobium_titanium_double_cable',
        'gtceu:purified_fractalium_block'
    )

    let solarRayMachines = [
        {id: 'zpm', energy: GTValues.VA[GTValues.ZPM]},
        {id: 'uv', energy: GTValues.VA[GTValues.UV]},
        {id: 'uhv', energy: GTValues.VA[GTValues.UHV]}
    ]

    solarRayMachines.forEach((id) => {

        event.recipes.gtceu.assembler()
            .itemInputs(
                `2x gtceu:${id.id}_robot_arm`,
                'gtceu:filter_casing',
                `#gtceu:circuits/${id.id}`
            )
            .inputFluids(
                'gtceu:polytetrafluoroethylene 144'
            )
            .itemOutputs(
                `gtceu:${id.id}_solar_ray_particle_filter`
            )
            .EUt(id.energy)
            .duration(300)
            .circuit(1)

    })
        
})