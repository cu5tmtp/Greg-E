ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembler()
        .itemInputs(
            '8x gtceu:supergrympl_plate'
        )
        .itemOutputs(
            'gtceu:uiv_machine_casing'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .circuit(8)

    event.remove({id: 'gtceu:shaped/uiv_machine_hull'})
    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:uiv_machine_casing',
            '2x gtceu:mirrored_grympl1_plate',
            'gtceu:reinforced_kamenium_plate',
            '2x gtceu:stabilizedarboretum_single_wire'
        )
        .inputFluids(
            'gtceu:grymploxideepoxilidas 288'
        )
        .itemOutputs(
            'gtceu:uiv_machine_hull'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:grymploxideepoxilidas_rod',
            '16x gtceu:fine_stabilizedarboretum_wire'
        )
        .itemOutputs(
            'kubejs:euclidcoil'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .circuit(1)

    event.shaped(Item.of('gtceu:uiv_1a_energy_converter', 1),
        [
            ' AA',
            'ABC',
            ' AA'
        ],
        {
            A: 'gtceu:element_356_single_wire',
            B: 'gtceu:uiv_machine_hull',
            C: 'kubejs:euclid/euclid_computer'
        }
    )

    event.shaped(Item.of('gtceu:uiv_4a_energy_converter', 1),
        [
            ' AA',
            'ABC',
            ' AA'
        ],
        {
            A: 'gtceu:element_356_quadruple_wire',
            B: 'gtceu:uiv_machine_hull',
            C: 'kubejs:euclid/euclid_computer'
        }
    )

    event.shaped(Item.of('gtceu:uiv_8a_energy_converter', 1),
        [
            ' AA',
            'ABC',
            ' AA'
        ],
        {
            A: 'gtceu:element_356_octal_wire',
            B: 'gtceu:uiv_machine_hull',
            C: 'kubejs:euclid/euclid_computer'
        }
    )

    event.shaped(Item.of('gtceu:uiv_16a_energy_converter', 1),
        [
            ' AA',
            'ABC',
            ' AA'
        ],
        {
            A: 'gtceu:element_356_hex_wire',
            B: 'gtceu:uiv_machine_hull',
            C: 'kubejs:euclid/euclid_computer'
        }
    )

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:uiv_machine_hull',
            '4x gtceu:element_356_hex_wire',
            '2x gtceu:diamond_lens',
            '2x gtceu:uiv_sensor',
            '2x gtceu:uiv_electric_pump'
        )
        .itemOutputs(
            'gtceu:uiv_4096a_laser_target_hatch'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .circuit(3)

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:uiv_machine_hull',
            '4x gtceu:element_356_hex_wire',
            '2x gtceu:diamond_lens',
            '2x gtceu:uiv_emitter',
            '2x gtceu:uiv_electric_pump'
        )
        .itemOutputs(
            'gtceu:uiv_4096a_laser_source_hatch'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .circuit(3)

    event.remove({id: 'gtceu:assembler/dynamo_hatch_4a_uiv'})
    event.remove({id: 'gtceu:assembler/dynamo_hatch_16a_uiv'})
    event.remove({id: 'gtceu:assembler/energy_hatch_4a_uiv'})
    event.remove({id: 'gtceu:assembler/energy_hatch_16a_uiv'})
    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:uiv_energy_output_hatch',
            '2x gtceu:element_356_quadruple_wire',
            '2x gtceu:supergrympl_plate'
        )
        .itemOutputs(
            'gtceu:uiv_energy_output_hatch_4a'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:uiv_energy_output_hatch_4a',
            'gtceu:uiv_transformer_1a',
            '2x gtceu:element_356_hex_wire',
            '4x gtceu:supergrympl_plate'
        )
        .itemOutputs(
            'gtceu:uiv_energy_output_hatch_16a'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:uiv_machine_hull',
            '2x gtceu:element_356_single_wire',
            'kubejs:carcosacpuchip'
        )
        .itemOutputs(
            'gtceu:uiv_transformer_1a'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:uiv_energy_input_hatch',
            '2x gtceu:element_356_quadruple_wire',
            '2x gtceu:supergrympl_plate'
        )
        .itemOutputs(
            'gtceu:uiv_energy_input_hatch_4a'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:uiv_energy_input_hatch_4a',
            'gtceu:uiv_transformer_1a',
            '2x gtceu:element_356_hex_wire',
            '4x gtceu:supergrympl_plate'
        )
        .itemOutputs(
            'gtceu:uiv_energy_input_hatch_16a'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

})