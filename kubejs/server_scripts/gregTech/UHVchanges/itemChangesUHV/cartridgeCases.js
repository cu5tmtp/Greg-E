ServerEvents.recipes((event) => {

    let cartridges = [
        {id: 'one', block: 'gtceu:stress_proof_casing'},
        {id: 'two', block: 'gtceu:large_scale_assembler_casing'},
        {id: 'three', block: 'gtceu:watertight_casing'},
        {id: 'four', block: 'gtceu:vibration_safe_casing'},
        {id: 'five', block: 'gtceu:nonconducting_casing'},
        {id: 'six', block: 'gtceu:secure_maceration_casing'},
        {id: 'seven', block: 'gtceu:reaction_safe_mixing_casing'},
        {id: 'eight', block: 'gtceu:laser_safe_engraving_casing'},
        {id: 'nine', block: 'gtceu:shock_proof_cutting_casing'},
        {id: 'ten', block: 'gtceu:high_temperature_smelting_casing'},
        {id: 'eleven', block: 'gtceu:corrosion_proof_casing'},
    ]

    cartridges.forEach((recipe) => {

        event.shaped(
            Item.of('gregecore:machine_' + recipe.id, 1),
            [
                'CCC',
                'ABA',
                'CCC'
            ],
            {
                A: '#gtceu:circuits/uhv',
                B: 'gregecore:draconium_cable_single_wire',
                C: recipe.block
            }
        )

    })

})