ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gtceu:mv_component_mass_assembler', 1),
        [
            ' A ',
            'DED',
            'CBC'
        ],
        {
            A: '#gtceu:circuits/hv',
            B: 'gtceu:hv_machine_hull',
            C: 'gtceu:stainless_steel_ingot',
            D: 'gtceu:hv_robot_arm',
            E: 'ad_astra:ostrum_ingot'
        }
    )

    event.shaped(
        Item.of('gtceu:hv_component_mass_assembler', 1),
        [
            ' A ',
            'DED',
            'CBC'
        ],
        {
            A: '#gtceu:circuits/ev',
            B: 'gtceu:ev_machine_hull',
            C: 'gtceu:titanium_ingot',
            D: 'gtceu:ev_robot_arm',
            E: 'botanicalextramachinery:shadow_ingot'
        }
    )

    event.shaped(
        Item.of('gtceu:largecomponentmassassembler', 1),
        [
            'EAE',
            'DED',
            'CBC'
        ],
        {
            A: '#gtceu:circuits/iv',
            B: 'gtceu:iv_machine_hull',
            C: 'gtceu:tungsten_steel_ingot',
            D: 'gtceu:iv_robot_arm',
            E: 'undergarden:froststeel_block'
        }
    )


    const componentRecipesTierOne = [
        { output: '4x gtceu:resistor', inputs: ['gtceu:carbon_dust', '2x gtceu:fine_annealed_copper_wire'], fluid: 'gtceu:glue 100', circuit: 1, duration: 20},
        { output: '4x gtceu:diode', inputs: ['gtceu:small_gallium_dust', '2x gtceu:fine_annealed_copper_wire'], fluid: 'gtceu:polyethylene 100', circuit: 1, duration: 20},
        { output: '8x gtceu:transistor', inputs: ['gtceu:silicon_plate', '3x gtceu:fine_tin_wire'], fluid: 'gtceu:polyethylene 100', circuit: 1, duration: 20},
        { output: '8x gtceu:capacitor', inputs: ['gtceu:aluminium_foil', 'gtceu:polyethylene_foil'], fluid: 'gtceu:polyethylene 100', circuit: 1, duration: 20},
        { output: '8x gtceu:inductor', inputs: ['gtceu:nickel_zinc_ferrite_ring', '2x gtceu:fine_annealed_copper_wire'], fluid: 'gtceu:polyethylene 18', circuit: 1, duration: 20},
        { 
            output: ['6x gtceu:resistor', '6x gtceu:diode', '10x gtceu:transistor', '10x gtceu:capacitor', '10x gtceu:inductor'], 
            inputs: ['gtceu:aluminium_foil', 'gtceu:polyethylene_foil', 'gtceu:silicon_plate', '3x gtceu:fine_tin_wire', 'gtceu:small_gallium_dust', '6x gtceu:fine_annealed_copper_wire', 'gtceu:carbon_dust', 'gtceu:nickel_zinc_ferrite_ring'], 
            fluid: ['gtceu:glue 80', 'gtceu:polyethylene 350'], 
            circuit: 24,
            duration: 100
        }
    ];

    componentRecipesTierOne.forEach(r => {
        event.recipes.gtceu.component_mass_assembly()
            .itemInputs(r.inputs)
            .inputFluids(r.fluid)
            .itemOutputs(r.output)
            .EUt(GTValues.VA[GTValues.MV])
            .duration(r.duration)
            .circuit(r.circuit);
    });

    const componentRecipesTierTwo = [
        { output: '32x gtceu:smd_transistor', inputs: ['gtceu:gallium_foil', '4x gtceu:fine_tantalum_wire'], fluid: 'gtceu:polyethylene 100', circuit: 1, duration: 20},
        { output: '32x gtceu:smd_resistor', inputs: ['gtceu:carbon_dust', '2x gtceu:fine_tantalum_wire'], fluid: 'gtceu:polyethylene 200', circuit: 1, duration: 20},
        { output: '24x gtceu:smd_capacitor', inputs: ['gtceu:tantalum_foil', '2x gtceu:polyvinyl_chloride_foil'], fluid: 'gtceu:polyethylene 50', circuit: 1, duration: 20},
        { output: '32x gtceu:smd_diode', inputs: ['gtceu:gallium_arsenide_dust', '4x gtceu:fine_titanium_wire'], fluid: 'gtceu:polyethylene 200', circuit: 1, duration: 20},
        { output: '32x gtceu:smd_inductor', inputs: ['gtceu:nickel_zinc_ferrite_ring', '2x gtceu:fine_tantalum_wire'], fluid: 'gtceu:polyethylene 100', circuit: 1, duration: 20},
        { 
            output: ['36x gtceu:smd_transistor', '36x gtceu:smd_resistor', '30x gtceu:smd_capacitor', '36x gtceu:smd_diode', '36x gtceu:smd_inductor'], 
            inputs: ['gtceu:gallium_foil', '12x gtceu:fine_tantalum_wire', 'gtceu:carbon_dust', 'gtceu:tantalum_foil', '2x gtceu:polyvinyl_chloride_foil', 'gtceu:gallium_arsenide_dust', 'gtceu:nickel_zinc_ferrite_ring'], 
            fluid: ['gtceu:polyethylene 450'], 
            circuit: 24,
            duration: 100
        }
    ];

    componentRecipesTierTwo.forEach(r => {
        event.recipes.gtceu.component_mass_assembly()
            .itemInputs(r.inputs)
            .inputFluids(r.fluid)
            .itemOutputs(r.output)
            .EUt(GTValues.VA[GTValues.HV])
            .duration(r.duration)
            .circuit(r.circuit);
    });

    const componentRecipesTierThree = [
        { output: '16x gtceu:advanced_smd_transistor', inputs: ['gtceu:vanadium_gallium_foil', '4x gtceu:fine_hssg_wire'], fluid: 'gtceu:polybenzimidazole 100', circuit: 1, duration: 20},
        { output: '16x gtceu:advanced_smd_resistor', inputs: ['gtceu:graphene_dust', '2x gtceu:fine_platinum_wire'], fluid: 'gtceu:polybenzimidazole 200', circuit: 1, duration: 20},
        { output: '16x gtceu:advanced_smd_capacitor', inputs: ['gtceu:hsss_foil', 'gtceu:polybenzimidazole_foil'], fluid: 'gtceu:polybenzimidazole 18', circuit: 1, duration: 20},
        { output: '64x gtceu:advanced_smd_diode', inputs: ['gtceu:indium_gallium_phosphide_dust', '8x gtceu:fine_niobium_titanium_wire'], fluid: 'gtceu:polybenzimidazole 200', circuit: 1, duration: 20},
        { output: '16x gtceu:advanced_smd_inductor', inputs: ['gtceu:hsse_ring', 'gtceu:fine_palladium_wire'], fluid: 'gtceu:polybenzimidazole 100', circuit: 1, duration: 20},
        { 
            output: ['24x gtceu:advanced_smd_transistor', '24x gtceu:advanced_smd_resistor', '24x gtceu:advanced_smd_capacitor', '64x gtceu:advanced_smd_diode', '24x gtceu:advanced_smd_inductor'], 
            inputs: ['gtceu:vanadium_gallium_foil', '4x gtceu:fine_hssg_wire', 'gtceu:graphene_dust', '2x gtceu:fine_platinum_wire', 'gtceu:hsss_foil', 'gtceu:polybenzimidazole_foil', 'gtceu:indium_gallium_phosphide_dust', '8x gtceu:fine_niobium_titanium_wire', 'gtceu:hsse_ring', 'gtceu:fine_palladium_wire'], 
            fluid: ['gtceu:polybenzimidazole 500'], 
            circuit: 24,
            duration: 100
        }
    ];

    componentRecipesTierThree.forEach(r => {
        event.recipes.gtceu.component_mass_assembly()
            .itemInputs(r.inputs)
            .inputFluids(r.fluid)
            .itemOutputs(r.output)
            .EUt(GTValues.VA[GTValues.IV])
            .duration(r.duration)
            .circuit(r.circuit);
    });

    

})