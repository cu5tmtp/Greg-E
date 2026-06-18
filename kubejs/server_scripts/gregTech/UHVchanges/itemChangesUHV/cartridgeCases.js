
ServerEvents.recipes((event) => {

    let cartridges = [
        {id: 'gregecore:giant_crystallization', block: 'gtceu:watertight_casing', controller: 'gtceu:large_autoclave'},
        {id: 'gregecore:giant_extraction', block:  'gtceu:watertight_casing', controller: 'gtceu:large_extractor'},
        {id: 'gregecore:giant_solidification', block:  'gtceu:watertight_casing', controller: 'gtceu:large_solidifier'},
        {id: 'gregecore:giant_chemical_bath', block:  'gtceu:watertight_casing', controller: 'gtceu:large_chemical_bath'},
        {id: 'gregecore:giant_distillation', block:  'gtceu:watertight_casing', controller: 'gtceu:large_distillery'},
        {id: 'gregecore:giant_extrusion_machine', block:  'gtceu:stress_proof_casing', controller: 'gtceu:large_extruder'},
        {id: 'gregecore:giant_material_press', block:  'gtceu:stress_proof_casing', controller: 'gtceu:large_material_press'},
        {id: 'gregecore:giant_wire_factory', block:  'gtceu:stress_proof_casing', controller: 'gtceu:large_wiremill'},
        {id: 'gregecore:giant_assembler_circuit', block:  'gtceu:large_scale_assembler_casing', controller: 'gtceu:large_circuit_assembler'},
        {id: 'gregecore:giant_assembler', block:  'gtceu:large_scale_assembler_casing', controller: 'gtceu:large_assembler'},
        {id: 'gregecore:giant_sifter', block:  'gtceu:vibration_safe_casing', controller: 'gtceu:large_sifting_funnel'},
        {id: 'gregecore:giant_centrifuge', block:  'gtceu:vibration_safe_casing', controller: 'gtceu:large_centrifuge'},
        {id: 'gregecore:giant_electromagnet', block:  'gtceu:nonconducting_casing', controller: 'gtceu:large_electromagnet'},
        {id: 'gregecore:giant_electrolyzer', block:  'gtceu:nonconducting_casing', controller: 'gtceu:large_electrolyzer'},
        {id: 'gregecore:giant_macerator', block:  'gtceu:secure_maceration_casing', controller: 'gtceu:large_maceration_tower'},
        {id: 'gregecore:giant_mixer', block:  'gtceu:reaction_safe_mixing_casing', controller: 'gtceu:large_mixer'},
        {id: 'gregecore:giant_engraver', block:  'gtceu:laser_safe_engraving_casing', controller: 'gtceu:large_engraving_laser'},
        {id: 'gregecore:giant_saw', block:  'gtceu:shock_proof_cutting_casing', controller: 'gtceu:large_cutter'},
        {id: 'gregecore:giant_arc_furnace', block:  'gtceu:high_temperature_smelting_casing', controller: 'gtceu:large_arc_smelter'},
        {id: 'gregecore:giant_brewery', block:  'gtceu:corrosion_proof_casing', controller: 'gtceu:large_brewer'},
    ]

    cartridges.forEach((recipe) => {

        event.shaped(
            Item.of(recipe.id, 1),
            [
                'CDC',
                'ABA',
                'CDC'
            ],
            {
                A: 'gtceu:neutronium_block',
                B: recipe.controller,
                C: recipe.block,
                D: '#gtceu:circuits/uhv'

            }
        )

    })

})